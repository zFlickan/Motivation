using System;
using System.Web.Http;

namespace SquareMe.Web.Api
{
    [RoutePrefix("api")]
    public class MyApiController : ApiController
    {
        [Route("SquareRoot"), HttpGet]
        public IHttpActionResult SquareRoot(double? number)
        {
            if (number == null)
            {
                return BadRequest("Felaktigt format");
            }

            if (number < 0)
            {
                return BadRequest("Kan inte ta roten ur negativt tal");
            }

            double result = Math.Sqrt((double)number);
            return Ok(result);
        }
    }
}
