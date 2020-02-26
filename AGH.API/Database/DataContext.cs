using AGH.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AGH.API.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Blog> Blogs { get; set; }
    }
}