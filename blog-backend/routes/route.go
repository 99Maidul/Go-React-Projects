package routes

import (
	"github.com/99Maidul/blog-backend/controller"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
	app.Post("/api/login", controller.Login)
	// app.Use(middleware.IsAuthenticate)

}
