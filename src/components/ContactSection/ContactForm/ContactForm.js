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
      <form className="mx-auto" onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your message"
            type="text"
            id="message"
            name="message"
            className="resize-y bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="sm:text-start text-center">
            <button
              type="submit"
              className="mb-4 bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
            >
              {isSending && (
                <FontAwesomeIcon icon={faSpinner} className="rotate mr-2" />
              )}
              Send Message
            </button>
          </div>
          <Turnstile
            siteKey="0x4AAAAAAAPqkrWzipSjYJLa"
            options={{
              theme: "light",
              size: "invisible",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
