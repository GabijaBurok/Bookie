using bookie_backend.Data;
using bookie_backend.Models;
using bookie_backend.Repositories.Interfaces;

namespace bookie_backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly BookieDbContext _context;

        public UserRepository(BookieDbContext context)
        {
            _context = context;
        }

        public async Task CreateUserAsync(User newUser)
        {
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<User> GetUserAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task UpdateUserAsync(User newUser)
        {
            _context.Users.Update(newUser);
            await _context.SaveChangesAsync();
        }
    }
}
