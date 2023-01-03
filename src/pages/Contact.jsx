import React, {useState, useRef} from 'react'
import { sendEmail } from '../components/email'
import { obj } from '../components/data'

const Contact = () => {
  const [info, setInfo] = useState({name:'', email:'', message:''})
  const [rules, setRules] = useState(false)
  const form = useRef()
  const contact_number = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [spin, setSpin] = useState(false)

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInfo({...info, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(info.name.length === 0 || info.email.length === 0 || info.message.length === 0) {
      setRules(true)
    }
    if(info.name && info.email && info.message) {
      setSpin(true)
      setRules(false)
      contact_number.current.value = Math.random() * 10000 | 0
      sendEmail(form.current, setLoading, setSpin, setInfo, setError)
    }
  }
  return <>
    <section className="contact" id='contact'>
        <article className='contact-header'>
          <h1 className=''>Get in Touch_</h1>
          <p className="sub-title">Let's connect, Let's work together...</p>
        </article>

        <div className="divider">
          <article className='contact-details'>
            <div className='contact-item'>
              <p>
                {obj.phone}
              </p>
              <div>
                <p>Phone</p>
                <a href='tel:+2348164443163'>+234 816 444 3163</a>
              </div>
            </div>
            <div className='contact-item'>
              <p>
                {obj.email}
              </p>
              <div>
                <p>Email</p>
                <a href='mailto:williamsbalogun49@gmail.com'>williamsbalogun49@gmail.com</a>
              </div>
            </div>
            <div className='contact-item'>
              <p>
                {obj.location}
              </p>
              <div>
                <p>Address</p>
                <p className='address'>Lagos, Nigeria.</p>
              </div>
            </div>
          </article>

          <article className='contact-footer'>
            {
              loading && <p className='success'>Message Sent Successfully...</p>
            }
            {
              error && <p className='error'>Error!!! Message not sent...</p>
            }
            <p>Or write me a message here_</p>
            <form ref={form}>
              <input type="hidden" name="contact_number" ref={contact_number} />
              <input className={`${rules && info.name.length <= 0 && 'error'}`} type="text" name="name" id="name" placeholder='Your name *' required='required' value={info.name} onChange={handleChange} />
              <label className={`${rules && info.name.length <= 0 && 'error'}`}>Name field cannot be empty</label>
              <input className={`${rules && info.email.length <= 0 && 'error'}`} type="email" name="email" id="name" placeholder='Email *' required='required' value={info.email} onChange={handleChange} />
              <label className={`${rules && info.email <= 0 && 'error'}`}>Email cannot be empty</label>
              <textarea className={`${rules && info.message.length <= 0 && 'error'}`} name="message" id="message" placeholder='Type your message here...' maxLength={270} required='required' value={info.message} onChange={handleChange}></textarea>
              <label className={`${rules && info.message <= 0 && 'error'}`}>Message cannot be empty</label>

              <div className='btn-container'>
                <button className='submit-btn' type="submit" onClick={handleSubmit}>
                  {
                    spin ? <div className='spinner'>{obj.spinner}</div> : 'Send'
                  }
                </button>
              </div>
            </form>
          </article>
        </div>
      </section> 
  </>
}

export default Contact
