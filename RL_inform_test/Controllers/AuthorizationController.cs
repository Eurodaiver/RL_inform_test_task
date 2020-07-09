using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using RL_inform_test.Data;
using RL_inform_test.Models;

namespace RL_inform_test.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthorizationController : ControllerBase
    {
        private readonly ILogger<AuthorizationController> _logger;
        UserManager<User> _userManager;
        RoleManager<IdentityRole> _roleManager;

        public AuthorizationController(ILogger<AuthorizationController> logger, UserManager<User> manager, RoleManager<IdentityRole> rolemanager)
        {
            _logger = logger;
            _userManager = manager;
            _roleManager = rolemanager;
        }

        /// <summary>
        /// возвращает токен доступа если есть пользователь с таким логином и паролем
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns>AuthorizationResult</returns>
        [HttpPost]
        public async Task<ActionResult<AuthorizationResultModel>> Auth(AuthorizationRequestModel request)
        {
            var x = Request;
            var _user = _userManager.Users.FirstOrDefault(x => x.UserName == request.userName);
            if (_user != null)
            {
                //проверяем соответствие пароля, и если все ок - возвращаем ключ
                //TODO: тут надо сделать сравнение зашифрованного пароля, а не открытого, т.к. они хранятся в БД
                var res = await _userManager.CheckPasswordAsync(_user, request.password);
                if (res)
                {

                    var claims = new List<Claim>
                                 {
                                    new Claim(ClaimsIdentity.DefaultNameClaimType, _user.UserName),
                                    new Claim(ClaimsIdentity.DefaultRoleClaimType, "Администратор")
                                 };
                    ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

                    var now = DateTime.UtcNow;
                    // создаем JWT-токен
                    var jwt = new JwtSecurityToken(
                            issuer: "MyAuthServer", // издатель токена
                            audience: "RLApp", // потребитель токена
                            notBefore: now,
                            claims: claims, //identity.Claims,
                            expires: now.Add(TimeSpan.FromMinutes(60)), //время жизни токена 60 минут
                            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("mysupersecret_secret_key!2020")), SecurityAlgorithms.HmacSha256) //создаем подпись
                            );
                    //сериализуем токен в компактный формат
                    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                    return new AuthorizationResultModel { userName = request.userName, result = "success", Token = encodedJwt };
                }
                else
                {
                    //пароль не совпадает
                    return new AuthorizationResultModel { userName = request.userName, result = "wrong password", Token = "" };
                }
            }
            else
            {
                //пользователь с таким userName не существует
                return new AuthorizationResultModel { userName = request.userName, result = "userName not found", Token = "" };
            }

        }
    }
}
