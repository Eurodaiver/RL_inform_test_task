using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RL_inform_test.Models
{
    public class AuthorizationRequestModel
    {
        public string userName { get; set; }
        public string password { get; set; }
    }
    public class AuthorizationResultModel
    {
        public string userName { get; set; }
        public string result { get; set; }
        public string Token { get; set; }
    }

}
