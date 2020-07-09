using RL_inform_test.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RL_inform_test.Models
{
    //класс для регистрации нового пользователя
    public class RegisterUserModel
    {
        public string firstName { get; set; }
        public string userName { get; set; }
        public List<string> roles { get; set; }
        public string email { get; set; }
    }

    public class ViewUserModel
    {
        public string FirstName { get; set; }
        public string UserName { get; set; } //login
        public List<string> roles { get; set; }
        public string Email { get; set; }
    }
}
