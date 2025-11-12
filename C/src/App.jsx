import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import Layout from './Layout/Layout'

function App() {
  const [title, setTitle] = useState("Solum Clinic react Technical test")

  return (
    <>
    <Layout>

  
      <div>
      <h2>{title}</h2>
      <nav>
        <a href="https://vitejs.dev" target="_blank">Vite Docs</a> | 
        <a href="https://react.dev" target="_blank">React Docs</a>
      </nav>
      </div>
      <div className="card">
        <LoginForm />
      </div>
       </Layout>
    </>
  )
}

export default App
