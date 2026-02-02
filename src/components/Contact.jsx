import React, { useRef, useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [triggerAnime, setTriggerAnime] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  //LOADING STATE
  const [loading, setLoading] = useState(false);

  //FORM STATE
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const isFormValid =
    formData.user_name.trim() !== "" &&
    formData.user_email !== "" &&
    formData.message !== "";

  const form = useRef();

  //SEND EMAIL FUNCTION
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Wrap setTimeout in a Promise
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    try {
      // Simulate an asynchronous operation
      await delay(2000);

      const result = await emailjs.sendForm(
        "service_0xap5i6",
        "template_cvdcrd4",
        form.current,
        "93GX9nNMQffy-jJlG"
      );

      console.log(result.text);
      console.log("message sent");

      toast.success("Email submitted successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.log(error.text);
      console.log("error");

      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    // Update the form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function send() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={!triggerAnime && inView ? "whileInView" : {}}
      variants={{
        whileInView: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 50,
      }}
      triggerAnime={triggerAnime}
      className="flex font-poppins flex-col  "
    >
      <div className="justify-center flex w-full">
        <h1 className="text-[32px] font-bold">Let's Work Together</h1>
      </div>
      <div className="box-container flex sm:flex-row flex-col-reverse py-5">
        <div className="box1 basis-[50%]">
          <div className="innerbox">
            <h1 className="font-bold text-[#7d7d7d] text-[25px] mb-2 mt-5 sm:mt-0">
              Get in touch!
            </h1>
            <p className="text-[15px] max-w-[500px]">
              If you wanna get in <span className="font-bold">touch</span> ,
              talk to me about a project collaboration,{" "}
              <span className="font-bold">or</span> just say hi, fill up the
              awesome form
              <span className="sm:inline hidden"> beside </span>
              <span className="inline sm:hidden"> above </span>
              <span className="font-bold">or</span> send an email to{" "}
              <span className="font-bold text-black">
                abyansetyaa@gmail.com
              </span>{" "}
              and ~let's talk.
            </p>
            <div>
              <h1 className="font-bold text-[25px] pt-4 text-[#7d7d7d]">
                Let's Connect
              </h1>
              <div className="flex flex-col mt-2">
                <div className="flex items-center gap-2">
                  <RiInstagramFill
                    style={{
                      fontSize: "30px",
                    }}
                  />
                  <h1 className="hover:font-semibold">
                    <a href="https://www.instagram.com/abyansetya/">
                      abyansetya
                    </a>
                  </h1>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <FaGithub
                    style={{
                      fontSize: "30px",
                    }}
                  />
                  <h1 className="hover:font-semibold">
                    <a href="https://github.com/abyansetya">abyansetya</a>
                  </h1>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <FaLinkedinIn
                    style={{
                      fontSize: "30px",
                    }}
                  />
                  <h1 className="hover:font-semibold">
                    {" "}
                    <a href="www.linkedin.com/in/abyansetya"> Abyan Setya </a>
                  </h1>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <FaTwitter
                    style={{
                      fontSize: "30px",
                    }}
                  />
                  <h1 className="hover:font-semibold">
                    <a href="https://www.x.com/abyansetya/">abyansetya</a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box2 basis-[50%]">
          <form action="" className="flex flex-col" ref={form}>
            <label htmlFor="" className="w-full">
              Name
            </label>
            <input
              type="text"
              className=" border-2 border-black rounded px-2 py-2"
              placeholder="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              className=" border-2 border-black rounded px-2 py-2"
              placeholder="youremail@gmail.com"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
            <label htmlFor="">Messages</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className=" border-2 border-black rounded px-2 py-2 "
              placeholder="messages"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <motion.button
              onClick={isFormValid && loading === false ? sendEmail : undefined}
              className={` flex w-full justify-center items-center border-2 mt-2 h-[40px] border-black bg-gray-300 rounded ${
                isFormValid && loading === false
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              } `}
              whileHover={
                isFormValid && loading === false
                  ? {
                      scale: 1.05,
                    }
                  : {}
              }
              whileTap={
                isFormValid && {
                  scale: 0.9,
                }
              }
              disabled={!isFormValid}
            >
              <div
                className={`h-[20px] w-[20px] border-2 border-black mr-2 border-dashed ${
                  loading === true ? "animate-spin inline-block" : "hidden"
                }`}
              />
              {loading === true ? "Sending" : "Send"}
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
