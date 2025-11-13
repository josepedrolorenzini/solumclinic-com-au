// src/components/Contact.js
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm'
import usuarios from '../data/users.json'

const Login = ({users}) => {
    users = JSON.parse(JSON.stringify(usuarios));
    return (
        <>
          <LoginForm  usuarios={users}  />
        </>
    );
};

export default Login;
