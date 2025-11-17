import React from 'react'

import { useState } from 'react'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    signInWithPopup, signOut} from 'firebase/auth'

import { auth,Gprovider } from '../firebase/firebase';


const Auth = () => {
  return (
    <div>Auth</div>
  )
}

export default Auth