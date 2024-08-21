import { useRef, useState } from "react";
import { FaPhone, FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_vruz4nc', 'template_3xtcdrg', formRef.current, {
      publicKey: 'v6_1EsYtlteSGYYbv',
    })
      .then(
        () => { 
          setSuccess(true);
          setError(false);
          formRef.current.reset(); 
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.div 
      className='contact' 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    > 
      <motion.div 
        className="textContainer"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1>Contact</h1>
        <div className="item">
          <h2>Email</h2>
          <span><CiMail /> mehadi.webdev@gmail.com</span>
        </div>
        <div className="item">
          <h2>Téléphone</h2>
          <span><FaPhone /> 06 64 51 11 31</span>
        </div>
        <div className="socialLinks">
          <motion.a href="https://www.linkedin.com/in/khireddine-mehadi-6447402a6/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.5 }} ><FaLinkedin /></motion.a>
          <motion.a href="https://github.com/kayro-is?tab=overview&from=2024-08-01&to=2024-08-12" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><FaGithub /></motion.a>
          <motion.a href="https://x.com/KayroWebDev" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><BsTwitterX /></motion.a>
          <motion.a href="https://www.instagram.com/kayro7892/" target="_blank" rel="noopener noreferrer"whileHover={{ scale: 1.5 }}><FaInstagram /></motion.a>
        </div>
      </motion.div>
      <motion.div 
        className="formContainer"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
      >
        <form ref={formRef} onSubmit={sendEmail}>
          <motion.input 
            type="text" 
            required 
            placeholder='Nom' 
            name="from_name" 
            whileFocus={{ scale: 1.05 }} 
          />
          <motion.input 
            type="email" 
            required 
            placeholder='Email' 
            name="email" 
            whileFocus={{ scale: 1.05 }} 
          />
          <motion.textarea 
            rows={8} 
            required 
            placeholder='Message' 
            name="message" 
            whileFocus={{ scale: 1.05 }} 
          />
          <motion.button type="submit" whileHover={{ scale: 1.1 }}>Envoyer</motion.button>
          {error && <motion.div className="error">Erreur lors de l'envoi</motion.div>}
          {success && <motion.div className="success">Message envoyé avec succès</motion.div>}
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
