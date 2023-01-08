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
import project1 from '../assets/web/project1.png'
import project2 from '../assets/web/project2.png'
import project3 from '../assets/web/project3.png'
import project4 from '../assets/web/project4.png'
import project5 from '../assets/web/project5.png'
import dolapot from '../assets/web/dolapot.png'

export const socials = [
  {
    id: 1,
    url: 'https://twitter.com/king_hayjhay?t=NQhyW25e51IwiPa1lOcC1g&s=09',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://linkedin.com/in/williamsbalogun',
    icon: <FaLinkedinIn />,
  },
  { id: 3, url: 'https://github.com/willhemz', icon: <AiOutlineGithub /> },
  { id: 4, url: 'https://facebook.com/aj.willie.583', icon: <FaFacebookF /> },
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
    id: new Date().getTime().toString(),
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: dolapot,
    title: 'dolapot',
    desc: 'A food and cocktail shopping app',
    link: 'https://ihemz-dolapot.netlify.app',
    github: 'https://github.com/willhemz/restaurant',
    technologies: ['react', 'redux', 'meal api', 'tailwind', 'react-router'],
    type: 'web',
  },
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
  {
    id: 3,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: project1,
    title: 'coverly',
    desc: 'A cover letter generator app',
    link: 'https://coverly.app',
    github: 'https://github.com/workshopapps/coverletter.web',
    technologies: [
      'react',
      'javascript',
      'tailwind',
      'react-router',
      'redux',
      'GoogleAuth',
    ],
    type: 'web',
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: project2,
    title: 'streetrates',
    desc: "An info app for currencies' exchange rates",
    link: 'https://streetrates.info',
    github: 'https://github.com/workshopapps/realxchangerate.web',
    technologies: ['react', 'firebase', 'sass', 'react-router', 'redux', 'api'],
    type: 'web',
  },
  {
    id: 5,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: project3,
    title: 'metabnb',
    desc: 'A clone of MetaBnB landing page',
    link: 'https://ihemz-metabnb.netlify.app',
    github: 'https://github.com/willhemz/metabnb',
    technologies: ['react', 'tailwind', 'react-router'],
    type: 'web',
  },
  {
    id: 6,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: project4,
    title: 'stripe',
    desc: 'A clone of Stripe landing page',
    link: 'https://ihemz-stripe.netlify.app',
    github: 'https://github.com/willhemz/stripe',
    technologies: ['react', 'context api', 'css3', 'redux'],
    type: 'web',
  },
  {
    id: 7,
    icon: <AiOutlineGithub />,
    web: <BiLinkExternal />,
    image: project5,
    title: 'grocery-bud',
    desc: 'A grocery list generator app',
    link: 'https://ihemz-grocery.netlify.app',
    github: 'https://github.com/willhemz/Grocery-Bud',
    technologies: ['react', 'css3'],
    type: 'web',
  },
]
