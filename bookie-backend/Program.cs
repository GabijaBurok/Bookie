using bookie_backend.Data;
using bookie_backend.Endpoints;
using bookie_backend.Repositories;
using bookie_backend.Repositories.Interfaces;
using bookie_backend.Services;
using bookie_backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<BookieDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BookieDBConnection")));
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");
app.UseHttpsRedirection();


app.MapUserEndpoints();

app.Run();
