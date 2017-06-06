import React from 'react'
import axios from 'axios'

export function createUser(user){
	axios.post("http://localhost:3000/api/v1/users", user)
	.then(function(res){
		if (res.data.error){
			handleDuplicateUsername(res.data.error)
		} else {
			return res.data
		}
	})
}

export function handleDuplicateUsername(error){
	console.log(error)
		return (
			<h3>{error}</h3>
		)
	}