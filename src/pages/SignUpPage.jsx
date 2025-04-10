import React from 'react';

import { Card } from '@heroui/react';
import SignUpForm from '../components/SignUpForm';


export default function SignUp() {
  return (
    <Card className="border-2 border-gray-300 shadow-md rounded-lg p-4 h-[600px] w-[500px] flex flex-col justify-between">
      <div className="flex flex-col justify-center h-full  text-left m-5">
        <p className="font-sans">
          I'll need some info before I can get your perfect price!
        </p>

        <h1 className='text-3xl font-bold text-left mt-4 mb-4'>
            Personal Information   
        </h1>
        <SignUpForm/>
             
      </div>
    </Card>
  );
}