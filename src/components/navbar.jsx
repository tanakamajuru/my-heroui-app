import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDesktop,faCirclePlay,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
   
    useDisclosure,
  } from "@heroui/react";
  


  export  function DrawerComponent() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>

        <div>
        <Button className="bg-transparent" >        
        <FontAwesomeIcon icon={faDesktop} />
        </Button>

        <Button className="bg-transparent" onPress={onOpen}>        
        <FontAwesomeIcon icon={faBars} />
        </Button>

        </div>

        
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
                <DrawerBody>

                <div>                
                <h1 className='text-bold text-2xl'>How can we help? </h1>
                <p> Call, email or chat with us and we'll get back to you as soon as possible.</p>
                </div>

                <div className="flex-col">
                <FontAwesomeIcon icon={faCirclePlay} />
                <h1 className='text-bold text-2xl'>Start Over </h1>
                <p>This will clear everything.</p>  
                </div>

                <div>
                <FontAwesomeIcon icon={faPhone} />
                <h1 className='text-bold text-2xl'>Call us </h1>
                <p>0242 780 111</p>                    
                </div>

                <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <h1 className='text-bold text-2xl'>Email us </h1>
                <p>insureme@corp.telone.co.zw</p>                    
                </div>
                </DrawerBody>
               
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  

export default function NavigationBar () {

    return(
        <Navbar className="bg-white mt-5" >

            <img className="h-12 mt-5 mb-5" src="src\images\logo.png" alt="InsureMe logo" />
            <DrawerComponent/>

        </Navbar>




    )



}