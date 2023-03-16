package controllers

import "github.com/go-playground/validator"

// "context"
// "fmt"
// "log"
// "strconv"
// "net/http"
// "time"
"github.com/gin-gonic/gin"
"github.com/go-playground/validator/v10"
// helper "golang-jwt-project/helpers"
// "golang-jwt-project/models"
// "golang-jwt-project/helpers"
// "golang.org/x/crypto/bcrypt"

var userCollection *mongo.Collection = database.OpenCollection(database.Client, "user")
var validate = validator.New()

func HashPassowrd()

func VerifyPassword()

func Signup()

func Login()

func GetUsers()

func GetUser gin.HandlerFunc(
	return func(c *gin.Context){
		userId := c.Param("user_id")

		if err:= helper.MatchUserTypetoUid(c, userId); err != nil {
			c.JSON(http.BadStatusRequest, gin.H{"error": err.Error()})
			return
		}
	}
)
