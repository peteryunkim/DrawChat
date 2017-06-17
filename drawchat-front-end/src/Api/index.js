import axios from 'axios'

//user account
export function createUser(user){
	return axios.post("http://localhost:3000/api/v1/users", user)	
}

export function signIn(user){
	return axios.post("http://localhost:3000/api/v1/auth", user)	
}		

export function getUser(token){
	return axios.post("http://localhost:3000/api/v1/user", {Authorization: token})
}

//chatroom
export function getMessages(){
	return axios.get("http://localhost:3000/api/v1/messages")
}
export function postMessage(message, userId){
	return axios.post("http://localhost:3000/api/v1/messages", {message, userId})
}


//canvas
export function getDrawings(){
	return axios.get("http://localhost:3000/api/v1/canvas")
} //populate list of canvas 

export function saveDrawingDB(canvasUrl,canvasName){
	return axios.post("http://localhost:3000/api/v1/canvas", {canvasUrl,canvasName})
}

export function selectExistingDrawing(canvas){
	return axios.post("http://localhost:3000/api/v1/one_canvas", {canvas: canvas})
}

export function deleteCanvas(canvas){
	return axios({method: 'delete', url:"http://localhost:3000/api/v1/canvas" , data: {canvas}} ) 
}

