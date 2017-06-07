import React from 'react'

import {  Redirect } from 'react-router'

function isLoggedIn(Component){
	return function (props) {
    if (!localStorage.getItem('jwt')) {
      return < Redirect to='/login' />
    }
    return < Component {...props} />
  }
}

export default isLoggedIn