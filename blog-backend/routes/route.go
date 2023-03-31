package routes

import (
	"github.com/99Maidul/blog-backend/controller"
	"github.com/99Maidul/blog-backend/middleware"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controller.Register)
	app.Post("/api/login", controller.Login)

	app.Use(middleware.IsAuthenticate)
	app.Post("/api/post", controller.CreatePost)
	app.Get("/api/allpost", controller.AllPosts)
	app.Get("/api/allpost/:id", controller.DetailPost)
	app.Put("/api/updatepost/:id", controller.UpdatePost)
	app.Put("/api/uniquepost/:id", controller.UniquePost)
	app.Delete("/api/deletepost/:id", controller.DeletePost)
}
