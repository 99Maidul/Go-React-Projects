package controllers

import (
	"github.com/99Maidul/golang-jwt-project/database"
	"github.com/go-playground/validator/v10"
)

var userCollection *mongo.Collection = database.OpenCollection(database.Client, "user")
var validate = validator.New()

func HashPassowrd()

func VerifyPassword()

func Signup()

func Login()

func GetUsers()

func GetUser()
