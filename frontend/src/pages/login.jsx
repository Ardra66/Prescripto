

import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Submitted:", { name, email, password });

  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='min-h-[80vh] flex items-center justify-center'
    >
      <div className='flex flex-col gap-3 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg bg-white'>
        <p className='text-2xl font-semibold'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </p>
        <p className='mb-4'>
          Please {state === 'Sign Up' ? "sign up" : "login"} to book appointment
        </p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p className='mb-1'>Full Name</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
        }


        <div className='w-full'>
          <p className='mb-1'>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>

        <div className='w-full'>
          <p className='mb-1'>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className='w-full px-3 py-2 border rounded-md'
          />
        </div>

        <button
          type="submit"
          className='w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <sapn onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</sapn></p>
        }
      </div>
    </form>
  );
};

export default Login;
