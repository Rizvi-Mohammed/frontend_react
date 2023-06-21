import React, {useState} from 'react'

import { images } from '../../constants'

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import { client } from '../../client'

import './Footer.scss'

const Footer = () => {
const[formData, setFormData] = useState({name:'', email: '', message:''});
const[isFormSubmitted, setIsFormSubmitted] = useState(false);//submitted state
const[loading, setLoading] = useState(false);//for loading

const { name, email, message } = formData; //object destructuring

const handleChangeInput = (e) => {
  const {name, value} = e.target;//we get the name of input and the value of input of the key press event

  setFormData({...formData, [name]: value });//vlaue of the name trigger to the set value.
}

const handleSubmit = () => {
  setLoading(true);

  const contact ={//following sanity guidlines documentations
    _type: 'contact',
    name: name, 
    email: email, 
    message: message
  }

  client.create(contact) // uploading data to sanity using SANITY create
  .then(() => {
    setLoading(false);
    setIsFormSubmitted(true);
  }).catch((err) => console.log(err))

  console.log(client.config);
}

  return (
    <>
    <h2 className="head-text">Take a coffee & chat with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href='mailto:abbasr12@my.yorku.ca' className='p-text'>abbasr12@my.yorku.ca</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href='tel:+16478773063' className='p-text'>+1 (647) 877 3063</a>
      </div>
    </div>

{isFormSubmitted === false ? (<div className="app__footer-form app__flex">

    <div className="app__flex">

    <input type="text" className="p-text" name="name" placeholder='Your Name' value={name} onChange={handleChangeInput}/>

    </div>

  <div className="app__flex">

    <input type="email" className="p-text" name="email" placeholder='Your email' value={email} onChange={handleChangeInput}/>

    </div>

    <div>
      <textarea
      className='p-text'
      placeholder='Your Message'
      name="message"
      value={message}
      onChange={handleChangeInput}
      ></textarea>
    </div>

    <button type='button' className='p-text' onClick={handleSubmit}>
      {loading ? 'Sending' : 'Send Message'}
    </button>

    </div>
) :
(<div><h3 className='head-text'>
  Thank you for getting in Touch
  </h3></div>)
    
    }
    

    </>
  )
}

export default MotionWrap(AppWrap(Footer, 'footer'), 'app__footer');