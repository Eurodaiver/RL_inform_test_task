using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RL_inform_test.Data
{
    //класс который представляет пользователя в БД, наследуем от стандартного Identity + Имя по ТЗ
    public class User: IdentityUser
    {
        public string FirstName { get; set; }
    }
}
