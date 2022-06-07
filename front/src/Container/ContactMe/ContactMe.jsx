import React, {useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import axios from 'axios';
import { toast } from 'react-toastify';
import imgBack from '../../assets/images/mailz.jpeg';
import load from '../../assets/images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animation';

import s from './ContactMe.module.css'
import { faMailReply } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscribe =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')  
  const [msg, setMsg] = useState('')  
  const [banner, setBanner] = useState('')  
  const [bool, setBool] = useState(false)  

  const handleName= (e) =>{
    setName(e.target.value)
  }

  const handleEmail= (e) =>{
    setEmail(e.target.value)
  }

  const handleMsg= (e) =>{
    setMsg(e.target.value)
  }
  const submitForm = async (e) =>{
    e.preventDefault();
    try{
      let data ={
        name, 
        email, 
        msg,
      }
      setBool(true);
      const res = await axios.post('/contact', data);
      if(name.length===0 || email.length===0 || msg.length===0){
        setBanner(res.data.msg)
        toast.error('Please fill all the fields', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setBool(false);
    }else if(res.status === 200){
      setBanner(res.data.msg)
      toast.success('Message sent successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setBool(false);
      setName('');
      setEmail('');
      setMsg('');
    }
  }
    catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className='mainContainer fade-in' id={props.id || ''}>
      <ScreenHeading
      subtitle={'Let´s Keep In Touch'}
      title ={'Contact Me '}        
      />
      <div className={s.centralForm}>
        <div className={s.col}>
        <h2 className={s.title}>
        <ReactTypingEffect
           text= {['Send me a line📧.' ,'To collaborate🙌.', 'Say Hello👋!' ]}

           />
        </h2>
        <a href="https://www.linkedin.com/in/luciana-chamorro">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/LucianaCHA">
                <i className="bi bi-github"></i>
              </a>
              <a href="Luciana Chamorro#9676">
                <i className="bi bi-discord"></i>
              </a>
              </div>
              <div className={s.backForm}>
                <div className={s.imgBack}>
                  <h5> Send your message here!</h5>
                  <img src ={imgBack} alt='Not available'/>
                </div>
                <form onSubmit={submitForm}>
                  <p>{banner}</p>
                  <label htmlFor='name'>Name</label>
                  <input type='text'
                    onChange = {handleName}
                    value={name}
                  />

                  <label htmlFor='email'>Email</label>
                  <input type='email'
                    onChange = {handleEmail}
                    value={email}
                  />

                  <label htmlFor='msg'>Message</label>
                  <textarea type='text'
                  onChange = {handleMsg}
                    value={msg}
                  />

                  <div className={s.sendBtn}>
                    <button className='btn primary-btn' type= 'submit'>
                      Send <i className='fa fa-paper-plane'/>
                      {bool
                      ?( <b className={s.load}>
                      <img src={load} alt='loading'/>
                      </b>) 
                      :('')}
                      
                    </button>
                  </div>
                </form>
              
      </div>
      <div>
          <button
            className={s.scroll}
            onClick={() => ScrollService.scrollHandler.scrollToHome()}
          >
            {" "}
            <i className="fa fa-home"></i>
          </button>
        </div>
    </div>
    </div>
  )
}
