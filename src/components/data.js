import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import {
  FaReact,
  FaBootstrap,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from 'react-icons/fa'
import {
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from 'react-icons/si'
import { IoLogoVue, IoLocation } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { VscJson } from 'react-icons/vsc'
import { BiLinkExternal } from 'react-icons/bi'
import { ImSpinner9 } from 'react-icons/im'

import cocktail from '../assets/web/cocktail.jpg'
import countdown from '../assets/web/countdown.jpg'

export const socials = [
  { id: 1, url: '', icon: <FaTwitter /> },
  { id: 2, url: '', icon: <FaLinkedinIn /> },
  { id: 3, url: '', icon: <AiOutlineGithub /> },
  { id: 4, url: '', icon: <FaFacebookF /> },
]

export const obj = {
  phone: <FaPhoneAlt />,
  email: <MdEmail />,
  location: <IoLocation />,
  spinner: <ImSpinner9 />,
}

export const data = [
  { id: 1, name: 'HTML', icon: <AiFillHtml5 /> },
  { id: 2, name: 'CSS', icon: <DiCss3 /> },
  { id: 3, name: 'JavaScript', icon: <DiJavascript1 /> },
  { id: 4, name: 'React JS', icon: <FaReact /> },
  { id: 5, name: 'Vue JS', icon: <IoLogoVue /> },
  { id: 6, name: 'Redux', icon: <SiRedux /> },
  { id: 7, name: 'JSON', icon: <VscJson /> },
  { id: 8, name: 'BootStrap', icon: <FaBootstrap /> },
  { id: 9, name: 'Tailwind', icon: <SiTailwindcss /> },
  { id: 10, name: 'Sass', icon: <FaSass /> },
  { id: 11, name: 'Firebase', icon: <SiFirebase /> },
  { id: 12, name: 'Git', icon: <AiOutlineGithub /> },
  { id: 13, name: 'Photoshop', icon: <SiAdobephotoshop /> },
  { id: 14, name: 'Illustrator', icon: <SiAdobeillustrator /> },
  { id: 15, name: 'Figma', icon: <FaFigma /> },
  { id: 16, name: 'Canva', icon: <SiCanva /> },
]

export const projects = [
  {
    id: 1,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: cocktail,
    title: 'cocktail',
    desc: 'Basic info on different Cocktail drinks',
    link: 'https://ihemz-cocktail.netlify.app',
    github: 'https://github.com/willhemz/cocktail',
    technologies: ['react', 'redux', 'cocktail api', 'css3', 'react-router'],
    type: 'web',
  },
  {
    id: 2,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: countdown,
    title: 'countdown',
    desc: 'Event countdown timer creator',
    link: 'https://ihemz-countdown.netlify.app',
    github: 'https://github.com/willhemz/countdown-timer.web',
    technologies: ['react', 'endpoints', 'tailwind', 'react-router'],
    type: 'web',
  },
]
