using bookie_backend.DTOs;
using bookie_backend.Services;
using bookie_backend.Services.Interfaces;

namespace bookie_backend.Endpoints
{
    public static class UserEndpoints
    {
        public static void MapUserEndpoints(this IEndpointRouteBuilder routes)
        {
            routes.MapGet("/users/{id}", async (int id, IUserService userService) =>
            {
                var user = await userService.GetUserByIdAsync(id);
                return user is not null ? Results.Ok(user) : Results.NotFound();
            });

            routes.MapPost("/users", async (UserDto userDto, IUserService userService) =>
            {
                await userService.CreateUserAsync(userDto);
                return Results.Created($"/users/{userDto.Id}", userDto);
            });

            routes.MapPut("/users/{id}", async (int id, UserDto userDto, IUserService userService) =>
            {
                await userService.UpdateUserAsync(userDto);
                return Results.NoContent();
            });

            routes.MapDelete("/users/{id}", async (int id, IUserService userService) =>
            {
                await userService.DeleteUserAsync(id);
                return Results.NoContent();
            });
        }
    }
}
