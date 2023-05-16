using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System;
using Microsoft.Extensions.Primitives;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Net;
using Octokit;
using Portfolio.Models;
using Portfolio;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GitHubController : ControllerBase
    {
        [HttpGet("{repository}/{owner}")]
        public async Task<List<Models.Language>> GetRepositoryLanguages(string repository, string owner = "BlackOutDevelops")
        {
            List<Models.Language> languages = new List<Models.Language>();
            Uri apiUrl = new Uri("https://api.github.com/repos/" + owner + "/" + repository + "/languages");
            GitHubClient client = new GitHubClient(new ProductHeaderValue(repository), apiUrl);
            client.Credentials = new Credentials(Environment.GetEnvironmentVariable("ApiKey"));
            var githubLanguages = await client.Repository.GetAllLanguages(owner, repository);

            foreach (RepositoryLanguage language in githubLanguages)
            {
                languages.Add(new Models.Language
                {
                    Name = language.Name,
                    Bytes = language.NumberOfBytes
                });
            }

            return languages;
        }
    }
}