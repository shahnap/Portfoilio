import React from "react";
import { Button, Breadcrumbs } from "@material-tailwind/react";
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineMessage } from "react-icons/ai";

function Contacts() {
  return (
    <div>
      <div className="text-2xl mb-2">
        <b>Contact Me</b>
      </div>
      <div className="mb-3">
        If you want to reach out, feel free to contact me via Email, WhatsApp, or SMS. I'd love to hear from you.
      </div>

      <div className="mb-6">
        {/* <Breadcrumbs>
          <a href="mailto:shahnapshahna243@gmail.com">
            <Button variant="outlined" className="flex items-center gap-3">
              Email
            </Button>
          </a>
          <a href="https://wa.me/918589034828" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" className="flex items-center gap-3">
              WhatsApp
            </Button>
          </a>
        
          <a href="sms:+918589034828">
            <Button variant="outlined" className="flex items-center gap-3">
              SMS
            </Button>
          </a>
        </Breadcrumbs> */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Email Option */}
        <a href="mailto:shahnapshahna243@gmail.com" className="w-full md:w-auto">
          <Button variant="outlined" className="flex items-center gap-3 w-full justify-start md:justify-center">
            <AiOutlineMail className="text-lg" /> Email
          </Button>
        </a>
        
        {/* WhatsApp Option */}
        <a href="https://wa.me/918589034828" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
          <Button variant="outlined" className="flex items-center gap-3 w-full justify-start md:justify-center">
            <AiOutlineWhatsApp className="text-lg" /> WhatsApp
          </Button>
        </a>
        
        {/* SMS Option */}
        <a href="sms:+918589034828" className="w-full md:w-auto">
          <Button variant="outlined" className="flex items-center gap-3 w-full justify-start md:justify-center">
            <AiOutlineMessage className="text-lg" /> SMS
          </Button>
        </a>
      </div>
      </div>

      <div className="mt-6">
        <p className="text-center text-lg">
          <b>Contact Number:</b> <a href="tel:+918589034828">+918589034828</a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
