import emailjs from '@emailjs/browser'
emailjs.init('OCbNm9drnFAWUB9Cu')

export const sendEmail = (data, a, b, c, d, e) => {
  emailjs.sendForm('message_service', 'contact_form', data).then(
    (result) => {
      console.log('SUCCESS!', result.status, result.text)
      b(false)
      a(true)
      setTimeout(() => {
        a(false)
      }, 2000)
      c({ name: '', email: '', message: '' })
    },
    (error) => {
      console.log('FAILED...', error.text)
      b(false)
      d(true)
      setTimeout(() => {
        d(false)
      }, 2000)
    }
  )
}
