using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace RestrictFileAccess
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class NoFileMiddleware
    {
        private readonly RequestDelegate _next;

        public NoFileMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            if ((httpContext.Request.Path.ToString().Split('.')).Length > 1)
            {
                httpContext.Response.WriteAsync("Unauthorized action");
            }
            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class NoFileMiddlewareExtensions
    {
        public static IApplicationBuilder UseNoFileMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<NoFileMiddleware>();
        }
    }
}
