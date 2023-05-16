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
        public void Post(Email email)
        {
            string to = "joshiefrazie@hotmail.com";
            string from = "joshiefrazie@hotmail.com";
            string subject = "Email From Portfolio Website";
            string body = "Contact's Email Address: " + email.EmailAddress + 
                          "\nContact's Phone Number: " + email.PhoneNumber + "\n---------------------------------------------------------------------------------------\n" +
                          email.Message;
            MailMessage message = new MailMessage(new MailAddress(from, "Portfolio Message").ToString(), to, subject, body);

            SmtpClient smtpClient = new SmtpClient("smtp.office365.com");
            smtpClient.UseDefaultCredentials = false;
            smtpClient.Credentials = new NetworkCredential(from, Environment.GetEnvironmentVariable("EmailPassword"));
            smtpClient.TargetName = "STARTTLS/smtp.office365.com";
            smtpClient.Port = 587;
            smtpClient.EnableSsl = true;

            try
            {
                smtpClient.Send(message);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: {0}",
                    ex.ToString());
            }
        }
    }
}
