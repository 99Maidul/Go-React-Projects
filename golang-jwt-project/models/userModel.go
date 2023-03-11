package models

import ()

type User struct {
	ID            primitive.ObjectID `bson:"_id`
	First_name    *string            `json:"first_name" validate:"required", min=2, max=100`
	Last_name     *string            `json:"last_name" validate:"required", min=2, max=100`
	Password      *string            `json:"Password" validate:"required", min=6, max=100`
	Email         *string            `json:"email" validate:"required", min=6, max=100`
	Phone         *string            `json:"phone" validate:"required", min=6, max=100`
	Token         *string            `json:"token"`
	User_type     *string            `json:"user_type"`
	Refresh_token *string            `json:"refresh_token"`
	Created_at    time.Time          `json:"created_at"`
	Updated_at    time.Time          `json:"updated_at"`
	User_id       string             `json:"user_id"`
}
