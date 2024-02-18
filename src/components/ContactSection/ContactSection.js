import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm/ContactForm";

const ContactSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="contact" className="container mb-24">
      <div className="relative flex items-center">
        {/* <span className="flex-shrink mx-4 text-2xl">Get in touch</span> */}
        <div className="flex-grow border border-gray-400"></div>
      </div>
      <div className="flex sm:flex-row flex-col items-center p-4">
        <div className="sm:px-4 mb-4 sm:mb-0 text-center sm:w-1/2 w-full">
          <p className="sm:text-5xl text-3xl font-bold">Let's get in touch!</p>
          <p className="mt-2">
            Fill in the form to contact me or you can also email me at <br />
            <span className="font-semibold dark:text-blue-600 text-blue-400">
              <FontAwesomeIcon icon={faEnvelope} /> zurihaqi@gmail.com
            </span>
          </p>
        </div>
        <div className="flex-1 sm:mx-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
