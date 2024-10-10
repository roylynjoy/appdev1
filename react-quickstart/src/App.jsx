import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './AdminPanel'
import LoginForm from './LoginForm'



function Profile() {
  let content;
  let isLoggesIn = false;

  if (isLoggesIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
      
  return (
    <>
      {content}
    </>
  )
}

export default Profile
