import axios from 'axios'

export function createUser(user){
	return axios.post("http://localhost:3000/api/v1/users", user)	
}


export function signIn(user){
	return axios.post("http://localhost:3000/api/v1/auth", user)	
}		