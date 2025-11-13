import { use, useState } from 'react'
import './App.css'
import usuarios from './data/users.json'
import Layout from './Layout/Layout'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'

import NavMenu from './components/NavMenu'


function App({users , title}) {
  users = JSON.parse(JSON.stringify(usuarios));
  const userParams = useLocation();
   
 // console.log(userParams)
  return (
    <>
    <Layout title={userParams.pathname === "/"? "Home": userParams.pathname.slice(1).toUpperCase()}>
       <div>
      <NavMenu/>      </div>
       </Layout>
    </>
  )
}

export default App
