import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';

function LoginForm({usuarios}) {
    console.log(usuarios.users);

     const myForm = document.getElementById('myForm');
     const navigate = useNavigate();
     const [users, setUsers] = useState(usuarios.users) ; 
     const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')) : null);
     const [error, setError] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);

        users.map( (user,index) => {
            console.log(user.mail, user.password);
            /// checking if user exists
            if(user.mail === e.target.email.value && user.password === e.target.password.value){
                console.log(`User found: ${index}  `, user.mail);

                setLoggedInUser({
                    name: user.name,
                    mail: user.mail,
                    password: user.password
                })

                // adding localstorage
                localStorage.setItem('loggedInUser', JSON.stringify({
                    name: user.name,
                    mail: user.mail,
                    password: user.password
                }));
                //redirection when is successful
                navigate('/');
            }else{
            console.log("User not found or wrong password.");
             // Optional: Set error message
            setError('Invalid email or password.');
        
            }
        })

        }

        useEffect(() => {
            console.log("Form element changed") ;
            console.log(loggedInUser)
           
        }, [loggedInUser]);
   
  return (
    <>
    <div className="relative flex flex-col rounded-xl bg-transparent">
  <h4 className="block text-xl font-medium text-slate-800">
    Sign Up
  </h4>
  <p className="text-cyan-400 font-light">
    {error ? <span className="text-red-500">{error}</span> 
    : !loggedInUser  ? ('Please enter your email and password to sign in.'):( `Hello ${loggedInUser.name}`)}
  </p>

    {loggedInUser ?(

      <button 
      type='button'
      onClick={e=>{
        e.preventDefault()
        console.log(e)
        console.log(localStorage)
        localStorage.getItem("loggedInUser")  === null ? 'localstorage empty' :  console.log(localStorage.getItem("loggedInUser"))
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
        navigate('/');
      }}
      >Log out</button>
    ):(
        <form 
  id='myForm'
  onSubmit={handleSubmit}
  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" 
  >
    <div className="mb-1 flex flex-col gap-6">
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-slate-600">
          Email
        </label>
        <input 
        type="email" 
        id='email' 
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
        placeholder={users[0].mail} />
      </div>
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-slate-600">
          Password
        </label>
        <input 
        type="password" 
        id='password'
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
        placeholder="Your Password" />
      </div>
    </div>
    <div className="inline-flex items-center mt-2">
      <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
        <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
        Remember Me
      </label>
    </div>
    <button 
    className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
    type="submit"
    >
      Log In
    </button>
    <p className="flex justify-center mt-6 text-sm text-slate-600">
      do not have an account?
      <Link to="#signup" className="ml-1 text-sm font-semibold text-slate-700 underline">
        Sign up
      </Link>
    </p>
  </form>
    )
    }
</div>
    </>
  )
}

export default LoginForm