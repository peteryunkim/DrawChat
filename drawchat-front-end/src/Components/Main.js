import React from 'react'
import ChatContainer from '../Containers/ChatContainer'
import DrawContainer from '../Containers/DrawContainer'
import { getUser } from '../Api/index'
class Main extends React.Component{

	constructor(){
    super()
    this.state={
      user: "",
      id: 0
    }
  }

  componentDidMount(){
    // make get request for user information, send token, validate from backend, populate state with response
    getUser(localStorage.getItem('jwt'))
    .then( res => this.setState({
    	user: res.data.username,
    	id: res.data.id
    }))
  }

  render(){
  	console.log(this.state)
  	return(
			<div className="row">
				<div id="draw-container" className='col-md-8 col-sm-8'>	
					<DrawContainer cableApp={this.props.cableApp}/>
				</div>
				<div id="chat-container" className='col-md-4 col-sm-4'>	
					<ChatContainer userId={this.state.id}currentUser={this.state.user} cableApp={this.props.cableApp}/>
				</div>
			</div>
		)
  }
		
}

export default Main
