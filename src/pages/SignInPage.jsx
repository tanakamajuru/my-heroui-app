import React from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import {Link} from "@heroui/react";

export  function ForgotPasswordLink() {
  return <Link href="#">Forgot your password?</Link>;
}

export default function SignIn () {

    return(

        < div className = 'flex flex-col justify-center h-full  text-left m-5'>


        <h1 className='text-3xl'> Sign In to Insure Me</h1>

        <Button color="primary" variant="bordered" className=' mt-5'>
        <img
            src="src\images\google.png"
            alt="Google logo"
            className="inline h-5 w-5 mr-2"
          />
          Sign up using Google
      </Button>

      <label className='text-center text-blue-500 mt-5 mb-5'>OR</label>

       <label>
              Username
            </label>
      
            <Input
              errorMessage="Please enter your Username"
              type="text"
              name = 'username'
              classNames="mb-5"
            />
      
            <label className='mt-5'>
              Password
            </label>
      
      
      
            <Input
            
            errorMessage="Please enter your full name as is on your National ID"
          
            name="username"
            
            type="text"
            classNames="mb-5 mt-5"      
            />

            <Button className='mt-5 mb-5'color="primary" variant="solid">
            Log in
            </Button>

            <Button className='mt-5 mb-5'color="primary" variant="bordered">
            New to insure-me?
            </Button>

            <Link/>

            </div>

    )


}