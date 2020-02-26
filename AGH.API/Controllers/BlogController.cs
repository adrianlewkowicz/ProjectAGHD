using System.Threading.Tasks;
using AGH.API.Database;
using AGH.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AGH.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly DataContext _context;

        public BlogController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetBlog()
        {
            var value = await _context.Blogs.ToListAsync();
            return Ok(value);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlos(int id)
        {
            var value = await _context.Blogs.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }
        
        [HttpPost]
        public async Task<IActionResult> AddBlog([FromBody] Blog blog)
        {
            _context.Blogs.Add(blog);
            await _context.SaveChangesAsync();
            return Ok(blog);
        }
        
        [HttpPost("{id}")]
        public async Task<IActionResult> EditBlog(int id, [FromBody] Blog blog)
        {
            var data = await _context.Blogs.FindAsync(id);
            data.Name = blog.Name;
            data.Description = blog.Description;
            data.AddDate = blog.AddDate;
            _context.Blogs.Update(data);
            await _context.SaveChangesAsync();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dalate(int id)
        {
            var data = await _context.Blogs.FindAsync(id);

            if(data == null)
                return NoContent();
    
            _context.Blogs.Remove(data);        
            await _context.SaveChangesAsync();
            return Ok(data);
        }
    }
}