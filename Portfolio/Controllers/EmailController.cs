using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {   
        [HttpPost]
        public async Task<IActionResult> Post(Email email)
        {
            string to = "joshiefrazie@hotmail.com";
            string from = "joshiefrazie@hotmail.com";
            string subject = "Email From Portfolio Website";
            string body = $"Contact's Email Address: {email.EmailAddress}" +
                          $"\nContact's Phone Number: {email.PhoneNumber}" +
                          $"\n{new string('-', 87)}\n{email.Message}";

            using var message = new MailMessage(new MailAddress(from, "Portfolio Message").ToString(), to, subject, body);
            using var smtpClient = new SmtpClient("smtp.office365.com")
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(from, Environment.GetEnvironmentVariable("EmailPassword")),
                TargetName = "STARTTLS/smtp.office365.com",
                Port = 587,
                EnableSsl = true
            };

            try
            {
                await smtpClient.SendMailAsync(message);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: {0}", ex.ToString());
                return StatusCode(500);
            }
        }
    }
}
