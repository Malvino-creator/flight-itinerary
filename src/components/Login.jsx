import React from "react";
import { useState } from "react";

function Login() {
  const[email, setEmail] = useState('');
  const[pass,setPass] = useState('');

  const handleSubmit = (e) => {
    e.prevent.Default();
    console.log(email);

  }

    <div>
      <>
      <form onSubmit= {handleSumbit}>
        <label for="email"> email</label>
        <input value={email} type='email' placeholder="emailaddress@gmail.com" id='email' name='email'/>
        <label for="password"> password</label>
        <input value={password} type='password' placeholder="******" id='password' name='password'/>
        <Button type="submit">Login</Button>
      </form>
      </>
      <button>Dont have an account? Register here.</button>
    </div>
}

export default Login