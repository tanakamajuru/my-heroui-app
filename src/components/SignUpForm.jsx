import React from "react";
import {Form, Input, Button} from "@heroui/react";

export default function SignUpForm() {
  const [action, setAction] = React.useState(null);

  return (
    <Form
      className=" bg-transparent"
     
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
      
    >

      <label>
        Full Name
      </label>

      <Input
        errorMessage="Please enter your full name as is on your National ID"
        type="text"
        name = 'fullname'
        
      />

      <label>
        Username
      </label>



      <Input
      
      errorMessage="Please enter your full name as is on your National ID"
    
      name="username"
      
      type="text"

      />
      <div className="flex  gap-60 mt-4">
        
        <Button onClick={() => (window.location.href = '/GetStartedPage')}>
          Back
        </Button>
        <Button className="bg-blue-500 text-white" type="submit">
          Next
        </Button>
      </div>
      
      
    </Form>
  );
}

