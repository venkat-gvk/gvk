import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { send } from "emailjs-com";
import { v4 as uuidv4 } from "uuid";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  const detailObj = {
    name: "",
    email_id: "",
    message: "",
    id: "",
  };

  const [details, setDetails] = useState(detailObj);
  const [didSend, setDidSend] = useState(false);

  const handleChange = (e) => {
    let nameProp = e.target.name;
    let value = e.target.value;

    if (nameProp !== "message") value = value.trim();

    setDetails({
      ...details,
      [nameProp]: value,
      id: uuidv4(),
    });
  };

  const handleDidSend = () => {
    setDidSend(!didSend);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDidSend(!didSend);
    send(
      "service_cvk2fpv",
      "template_t2ersok",
      details,
      "user_Jc0unU7hOldV9HvPXpLbG"
    ).catch((err) => console.error(err));
    setDetails(detailObj);
  };

  const formCSS = `outline-none rounded p-2 mt-2 border md:w-10/12 sm:w-11/12
               ${
                 darkMode
                   ? "border-pink-500 focus:border-pink-800 bg-gray-100"
                   : "border-blue-500 focus:border-blue-800"
               } w-60 md:w-72 text-black text-sm sm:text-md`;
  return (
    <section className="p-2 pb-3 md:mb-5" id="contact">
      <h2
        className={`text-3xl uppercase text-center sm:mt-4 transition-all duration-500 ${
          darkMode ? "text-pink-500" : "text-gray-700"
        }`}>
        Contact
      </h2>{" "}
      <div
        className={`${
          darkMode
            ? "text-white border-pink-500 shadow-2xl"
            : "border-blue-500 shadow"
        } mx-auto mt-10 p-4 rounded border-t-2 border-b-2 w-72
         sm:w-11/12 md:w-85p
        `}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center space-y-8 md:mx-auto">
          <div
            className={`${didSend && "opacity-50"} transition-all duration-500 
              sm:w-11/12 md:w-full md:text-center md:relative sm:mt-2
            `}>
            <label
              htmlFor="name"
              className=" 
                md:text-left md:absolute md:left-16 lg:left-22">
              Name
            </label>{" "}
            <br />
            <input
              className={formCSS}
              id="name"
              type="text"
              name="name"
              required="true"
              disabled={didSend && true}
              value={details.name}
              onChange={handleChange}
            />
          </div>
          <div
            className={`${
              didSend && "opacity-50"
            } sm:w-11/12 transition-all duration-500 md:w-full md:text-center md:relative`}>
            <label
              htmlFor="email_id"
              className=" 
              md:text-left md:absolute md:left-16 lg:left-22">
              Email
            </label>{" "}
            <br />
            <input
              className={formCSS}
              type="email"
              required="true"
              name="email_id"
              id="email_id"
              disabled={didSend && true}
              value={details.email_id}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${
              didSend && "opacity-50"
            } sm:w-11/12 transition-all duration-500 md:w-full md:text-center md:relative`}>
            <label
              htmlFor="message"
              className=" 
                md:text-left md:absolute md:left-16 lg:left-22">
              Message
            </label>{" "}
            <br />
            <textarea
              className={`${formCSS} h-40 resize-y`}
              id="message"
              required="true"
              type="text"
              name="message"
              disabled={didSend && true}
              value={details.message}
              onChange={handleChange}
            />
          </div>
          <div>
            {didSend ? (
              <div
                className="pt-4 pb-4 bg-gray-50 w-72 text-black h-20 rounded font-semibold flex flex-col justify-center
                items-center space-y-3 transition-all
                md:w-96
                ">
                <p>Thank you, I will contact you shortly.</p>
                <button
                  className={`
                ${
                  darkMode
                    ? "bg-pink-500 hover:bg-pink-700"
                    : "bg-blue-500 hover:bg-blue-800"
                } pl-2 pr-2 text-white
                transition-all rounded-full transform duration-500 md:w-36 md:p-1
                hover:duration-300 hover:shadow-md
              `}
                  onClick={handleDidSend}>
                  close
                </button>
              </div>
            ) : (
              <button
                className={`
                ${
                  darkMode
                    ? "bg-pink-500 hover:bg-pink-700"
                    : "bg-blue-500 hover:bg-blue-800"
                } p-2 text-white font-semibold rounded-full w-32 mb-2
                transition-all transform duration-500 hover:-translate-y-2 
                hover:duration-300 hover:shadow-md
                md:w-48
              `}
                submit="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
