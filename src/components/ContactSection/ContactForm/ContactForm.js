import React, { useState } from "react";
import Alerts from "../../Alerts/Alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./ContactForm.css";
import { Turnstile } from "@marsidev/react-turnstile";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [isChallengeSolved, setIsChallengeSolved] = useState(false);

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsSending(true);

    if (!isChallengeSolved) {
      setError(
        "Please solve the CloudFlare challenge before submitting the form."
      );
      setAlertVisible(true);
      setIsSending(false);
      return;
    }

    fetch("https://formcarry.com/s/jM9qENiXIga", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setError(response.message);
        }
        setAlertVisible(true);
        setIsSending(false);
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
        setAlertVisible(true);
        setIsSending(false);
      });
  };

  return (
    <>
      {success && alertVisible && (
        <Alerts
          title="Message Sent!"
          message="Thank you for reaching out! I'll respond to your message as soon as possible."
          type="success"
          onClose={closeAlert}
        />
      )}
      {error && alertVisible && (
        <Alerts
          title="Error"
          message={error}
          type="error"
          onClose={closeAlert}
        />
      )}
      <form className="max-w-md mx-auto" onSubmit={onSubmit}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500 dark:focus:border-violet-500 bg-transparent transition-colors duration-300"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500 dark:focus:border-violet-500 bg-transparent transition-colors duration-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500 dark:focus:border-violet-500 bg-transparent transition-colors duration-300"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Your message"
            id="message"
            name="message"
            className="w-full border-b-2 border-gray-300 py-2 px-1 focus:outline-none focus:border-blue-500 dark:focus:border-violet-500 bg-transparent transition-colors duration-300 resize-none min-h-[100px]"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 dark:bg-violet-600 dark:hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 flex items-center justify-center"
          >
            {isSending && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
            )}
            Send Message
          </button>

          <Turnstile
            className="mr-4"
            siteKey="0x4AAAAAAAPqkrWzipSjYJLa"
            onSuccess={() => {
              setIsChallengeSolved(true);
            }}
            options={{
              theme: "light",
              size: "compact",
              execution: "render",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
