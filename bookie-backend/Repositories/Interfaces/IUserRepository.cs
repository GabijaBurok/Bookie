using bookie_backend.Models;

namespace bookie_backend.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserAsync(int id);
        Task CreateUserAsync(User newUser);
        Task UpdateUserAsync(User newUser);
        Task DeleteUserAsync(int id);
    }
}
