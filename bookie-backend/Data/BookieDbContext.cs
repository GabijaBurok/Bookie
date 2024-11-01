using bookie_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace bookie_backend.Data
{
    public class BookieDbContext : DbContext
    {
        public BookieDbContext(DbContextOptions<BookieDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
