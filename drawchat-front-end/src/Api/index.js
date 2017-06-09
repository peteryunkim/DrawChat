import axios from 'axios'

export function createUser(user){
	return axios.post("http://localhost:3000/api/v1/users", user)	
}

export function signIn(user){
	return axios.post("http://localhost:3000/api/v1/auth", user)	
}		

export function getAllUsers(){
	return axios.get("http://localhost:3000/api/v1/users")
}

export function getChatroom(users){
	return axios.post("http://localhost:3000/api/v1/chatroom", users)
}

export function getDrawings(){
	return axios.get("http://localhost:3000/api/v1/canvas")
}

export function saveDrawingDB(canvasUrl,canvasName){
	return axios.post("http://localhost:3000/api/v1/canvas", {canvasUrl,canvasName})
	// console.log('saving', {object, canvasName})
}