import React from 'react';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom'

export default function GetStartedPage() {

return (
<div className='flex flex-col justify-centre h-full text-center'>
<p className='font-sans'> 
    Hey there! I'm Tanya your insurance guide. Let me help you get on board.
</p>

<img 
    src="src\images\agent.avif" 
    alt="Tanya" 
    className="rounded-full h-32 w-32"
/>

<text>
    Where did you hear about us?
</text>

<Button className='bg-white text-black rounded-lg p-2 mt-4 hover:bg-gray-200 border'>
    Next
</Button>

<text> OR </text>

<Button className='bg-white text-black rounded-lg p-2 mt-4 hover:bg-gray-200 border'>
    <img 
        src="src\images\google.png" 
        alt="Google logo" 
        className="inline h-5 w-5 mr-2"
    />
    Sign up using Google
</Button>

<Link to="/sign_in" className="underline text-blue-500">Already have an account?</Link>

</div>)

}
