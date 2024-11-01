using bookie_backend.DTOs;

namespace bookie_backend.Services.Interfaces
{
    public interface IUserService
    {
        Task<UserDto> GetUserByIdAsync (int id);
        Task CreateUserAsync (UserDto userDto);
        Task DeleteUserAsync (int id);
        Task UpdateUserAsync (UserDto newUserDto);
    }
}
