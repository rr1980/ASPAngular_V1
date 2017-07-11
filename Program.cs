using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace ASPAngular_V1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }

    //public enum Role
    //{
    //    User,
    //    Admin,
    //    Guest
    //}

    //public interface IEntity
    //{
    //    long Id { get; set; }
    //}

    //public class User: IEntity
    //{
    //    public string Name { get; set; }
    //    public Role[] Roles { get; set; }
    //    public long Id { get; set; }

    //    public User(string name, Role[] roles)
    //    {
    //        Name = name;
    //        Roles = roles;
    //    }

    //    public bool HasRole(Role role)
    //    {
    //        foreach (var r in Roles)
    //        {
    //            if (r == role)
    //            {
    //                return true;
    //            }
    //        }

    //        return false;
    //    }
    //}
}
