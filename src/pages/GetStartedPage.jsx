import React from 'react';
import { Button, Select, SelectItem } from '@heroui/react'; // Importing components from @heroui/react
import { Link } from 'react-router-dom';
import { Card } from '@heroui/react';
import { SourceSelection } from '../components/select';




export default function GetStarted() {
  return (
    <Card className="border-2 border-gray-300 shadow-md rounded-lg p-4 h-[600px] w-[500px] flex flex-col justify-between">
      <div className="flex flex-col justify-center h-full  text-left m-5">
        <p className="font-sans">
          Hey there! I'm Tanya, your insurance guide. Let me help you get on board.
        </p>
        <div className='flex flex-col items-left justify-center'>
        <img
          src="src\images\agent.avif" 
          alt="Tanya"
          className="rounded-full h-24 w-24 mx-auto flex flex-col items-left justify-center "
        />

        </div>
       

        <p>Where did you hear about us?</p>

        <SourceSelection/>

        <Button 
          className="bg-blue-600 text-white rounded-lg p-2 mt-4 hover:bg-gray-200 border"
          onPress={() => window.location.href = '/SignUp'}
        >
          Next
        </Button>

        <p className="text-center">OR</p>

        <Button 
          className="bg-white text-black rounded-lg p-2 mt-4 hover:bg-gray-200 border m-2 flex-wrap"
          onPress={() => window.location.href = 'https://insuremee.kinde.com/auth/cx/_:nav&m:register&psid:01961f7d7954571682ca198b16c737e8'}
        >
          <img
            src="src\images\google.png"
            alt="Google logo"
            className="inline h-5 w-5 mr-2"
          />
          Sign up using Google
        </Button>

        <Link to="/SignIn" className="underline text-blue-500 text-center">
          Already have an account?
        </Link>
      </div>
    </Card>
  );
}