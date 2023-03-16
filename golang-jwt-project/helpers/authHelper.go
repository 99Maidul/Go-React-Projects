package helper

import (
	"errors"

	"github.com/gin-gonic/gin"
)

func MatchUserTypetoUid(c *gin.Context, userId string) error {
	userType := c.GetString("user_type")
	uid := c.GetString("uid")
	err = nil

	if userType == "USER" && uid != userId {
		err = errors.New("You are not authorized to access this resource")
		return err
	}
	err =
		CheckUserType(c, userType)
}
