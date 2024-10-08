package middleware

//Contol access to the routes

import (
	"github.com/99Maidul/blog-backend/util"
	"github.com/gofiber/fiber/v2"
)

func IsAuthenticate(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	if _, err := util.Parsejwt(cookie); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "Unauthorized",
		})
	}
	return c.Next()
}
