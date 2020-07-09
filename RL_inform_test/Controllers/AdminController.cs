using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RL_inform_test.Data;
using RL_inform_test.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RL_inform_test.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        UserManager<User> _userManager;
        RoleManager<IdentityRole> _roleManager;

        public AdminController(UserManager<User> manager, RoleManager<IdentityRole> rolemanager)
        {
            _userManager = manager;
            _roleManager = rolemanager;

        }


        // GET: api/Admin/GetUsers
        /// <summary>
        /// получение списка пользователей
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<ViewUserModel>> GetUsers()
        {
            if (_roleManager.Roles.Count() < 3)
            {
                //создаем роли по умолчанию если их нет в БД
                if (!_roleManager.RoleExistsAsync("Администратор").Result)
                    await _roleManager.CreateAsync(new IdentityRole("Администратор"));
                if (!_roleManager.RoleExistsAsync("Редактор справочников").Result)
                    await _roleManager.CreateAsync(new IdentityRole("Редактор справочников"));
                if (!_roleManager.RoleExistsAsync("Заказчик").Result)
                    await  _roleManager.CreateAsync(new IdentityRole("Заказчик"));
            }
            if (_userManager.Users.Count() == 0)
            {
                //создаем пользователя по умолчанию если их нет в БД
                User admin = new User { UserName = "Admin", FirstName = "Администратор", Email = "admin@admin.ru" };
                IdentityResult result = await _userManager.CreateAsync(admin, "123456");
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(admin, "Администратор");
                }
            }
            //возвращаем упорядоченную последовательность 
            return await _userManager.Users.OrderBy(x => x.UserName).Select(x => new ViewUserModel { UserName = x.UserName, Email = x.Email, FirstName = x.FirstName }).ToListAsync();

        }

        // GET: api/Admin/SearchUsers?str=Alex
        /// <summary>
        /// поиск пользователей по введенной строке
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<ViewUserModel>> SearchUsers(string str)
        {
            //возвращаем упорядоченную последовательность найденных пользователей
            //поиск по имени, при необходимочти можно расширить
            return await _userManager.Users.Where(x => x.FirstName.Contains(str)).OrderBy(x => x.UserName).Select(x => new ViewUserModel { UserName = x.UserName, Email = x.Email, FirstName = x.FirstName }).ToListAsync();

        }

        /// <summary>
        /// удалает пользователя из БД
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete("{userName}")]
        public async Task<ActionResult> DeleteUser(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);
            if (user != null)
            {
                IdentityResult result = await _userManager.DeleteAsync(user);
                return Ok();
            }
            else return NotFound();
        }

        // GET: api/Admin/GetRoles
        /// <summary>
        /// получение полного списка ролей в системе
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<IdentityRole>> GetRoles()
        {

            return await _roleManager.Roles.ToListAsync();
        }

        // GET: api/Admin/GetRoles?username=Alex
        /// <summary>
        /// получаем роли конкретного пользователя по логину(userName)
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<string>> GetUserRoles(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            return await _userManager.GetRolesAsync(user);
        }


        // POST api/<UserController>
        /// <summary>
        /// создание нового пользователя, либо обновление данных если пользователь с таким логином уже существует
        /// </summary>
        /// <param name="value"></param>
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<RegisterUserModel>> CreateUser(RegisterUserModel user)
        {
            //проверим по неизменяемому полю наличие данного пользователя в БД, если есть - обновляем значения
            User current = await _userManager.FindByNameAsync(user.userName);
            if (current != null)
            {
                try
                {
                    current.FirstName = user.firstName;
                    current.Email = user.email;
                    var inrolesList = await _userManager.GetRolesAsync(current);
                    await _userManager.RemoveFromRolesAsync(current, inrolesList);
                    var res = await _userManager.AddToRolesAsync(current, user.roles);
                    return Ok(current);
                }
                catch (Exception ex)
                {
                    return NoContent();
                }
            }

            //если такого пользователя в БД нет - создаем
            var newUser = new User() { Email = user.email, FirstName = user.firstName, UserName = user.userName };
            var result = await _userManager.CreateAsync(newUser, "123456");
            if (result.Succeeded)
            {
                await _userManager.AddToRolesAsync(newUser, user.roles);
            }

            //TODO: необходимо сделать генерацию паролей с отправкой на почту, для демо - добавляем всем одинаковый пароль
            string password = "123456";
            await _userManager.AddPasswordAsync(newUser, password);

            return Ok(user);
        }


    }
}
