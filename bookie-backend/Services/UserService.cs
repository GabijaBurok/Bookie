using bookie_backend.DTOs;
using bookie_backend.Models;
using bookie_backend.Repositories.Interfaces;
using bookie_backend.Services.Interfaces;

namespace bookie_backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task CreateUserAsync(UserDto userDto)
        {
            var user = new User { 
                Id = userDto.Id,
                Password = userDto.Password,
                Username = userDto.Username
            };
            await _userRepository.CreateUserAsync(user);
        }

        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteUserAsync(id);
        }

        public async Task<UserDto?> GetUserByIdAsync(int id)
        {
            var user = await _userRepository.GetUserAsync(id);
            return user is not null
                ? new UserDto
                    {
                        Id = user.Id,
                        Password = user.Password,
                        Username = user.Username 
                    }
                : null;
        }

        public async Task UpdateUserAsync(UserDto newUserDto)
        {
            var newUser = new User
            {
                Id = newUserDto.Id,
                Password = newUserDto.Password,
                Username = newUserDto.Username
            };
            await _userRepository.UpdateUserAsync(newUser);
        }
    }
}
