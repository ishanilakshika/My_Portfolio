import codesprintImage from "../assets/codesprint.jpg";
import pearlhackImage from "../assets/pearlhack.jpg";
import derma from "../assets/derma.png";
import cityways from "../assets/cityways.png";
import eventvibes from "../assets/eventvibes.png";
import campinga from "../assets/campinga.png";
import slar from "../assets/slar.png";
import hacklikeagirl from "../assets/hacklikeagirl.png";
import creativesoftware from "../assets/creative.png";
import codegen from "../assets/codegen.png";
import zone24 from "../assets/zone24.png";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "achievement",
      title: "Achievement",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "CodeSprint 7.0",
      company_name: "Winner",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Achieved 1st place in CodeSprint 7.0, an annual coding competition organized by the IEEE Student Branch of IIT. Secured the win among 525+ teams and over 2400 participants, demonstrating exceptional technical skills and innovation.",
        "Designed and developed EventVibe, an innovative website connecting event planners with clients. EventVibe allows event planners to showcase their work and helps clients find and access tailored services effortlessly.",
       
      ],
    },
    {
      title: "Pearl Hack 2.0",
      company_name: "2nd Runners-Up",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Earned 2nd Runner-Up in Pearl Hack 2.0, a hackathon organized by the IEEE WIE Student Branch at Sabaragamuwa University of Sri Lanka.",
        "Developed TeenWallet, a groundbreaking app enabling cardless payments for teenagers, with features like parental expense monitoring and daily spending limits. Teenagers can make payments easily by showing a QR code, even without carrying a mobile phone.",
        
        
      ],
    },
    {
      title: "HackX 2022",
      company_name: "Semi-Finalists",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Reached the Semi-Finals of HackX 2022, an innovation-driven hackathon organized by the Department of Industrial Management at the University of Kelaniya.",
        "Designed and developed StudentPal, a platform that aggregates available scholarships from various companies, enabling undergraduate students to view, review, and apply for them seamlessly. The platform simplifies the process for both students and scholarship providers.",
        
        
      ],
    },
    {
      title: "Hack Like a Girl 1.0",
      company_name: "Finalists",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Selected among the top 15 teams in the Hack Like a Girl Hackathon 2022, organized by SLASSCOM in collaboration with IFC (International Finance Corporation - World Bank Group).",
        "Developed and presented Fairy Women Safety App, an innovative application designed to enhance women's safety through technology. The app includes an SOS button for emergencies and an online counseling platform for support and guidance.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The proud moment of winning CodeSprint 7.0, where my team secured 1st place out of more than 550 teams and competed against over 2,400 participants.",
      name: "CodeSprint 7.0",
      designation: "",
      company: "IEEE Student Branch of IIT",
      image: codesprintImage,
    },
    {
      testimonial:
        "We achieved 2nd Runner-Up at PearlHack 2.0, organized by the WIE Affinity Group of SUSL.",
      name: "PearlHack 2.0",
      designation: "",
      company: "WIE Affinity Group of SUSL",
      image: pearlhackImage,
    },
    {
      testimonial:
        "We proudly participated in the Hack Like a Girl competition, organized by the WIE Sri Lanka Section.",
      name: "HackLikeAGirl",
      designation: "",
      company: "WIE Sri Lanka Section",
      image: hacklikeagirl,
    },
    {
      testimonial:
        "My team and I had the privilege af attending an insightful session at Creative Software, where we gained valuable knowledge and perspectives from their key directors.",
      name: "Creative Software Industry Visit",
      designation: "",
      company: "Creative Software",
      image: creativesoftware,
    },
    {
      testimonial:
        "Our batch had the opportunity to go on an industrial visit to CodeGen International, where we attended informative sessions and had the chance to tour their impressive facilities.",
      name: "Codegen Industry Visit",
      designation: "",
      company: "Codegen International",
      image: codegen,
    },
    {
      testimonial:
        "We attended an informative session at the Zone24 premises, organized by StudPRO Sri Lanka. The session provided us with valuable insights and information about the industry.",
      name: "Zone24x7 Industry Visit",
      designation: "",
      company: "Zone24x7",
      image: zone24,
    },
  ];
  
  const projects = [
    {
      name: "Derma Mobile App",
      description:
        "I developed an innovative app designed to detect skin diseases with just a snap of an image. Built on a Convolutional Neural Network (CNN) architecture, the model has been trained to accurately identify 10 different skin diseases, providing a quick and reliable diagnostic tool.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
      ],
      image: derma,
      source_code_link: "https://github.com/DMevinPerera/Derma_Skin_App",
      design_code_link: "https://www.figma.com/design/5rTCwrOkW5fhALT3AzGbK9/Untitled?node-id=0-1&node-type=canvas&t=C0dZKKKgut2gBM39-0",
    },
    {
      name: "CityWays",
      description:
        "An App designed through Figma to manage the traffic in Sri Lanka.",
      tags: [
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: cityways,
      //source_code_link: "https://github.com/DMevinPerera/Derma_Skin_App",
      design_code_link: "https://www.figma.com/design/nIxftMKCX5VrsWBHuxFCrT/CityWays_Team-SynTax_Error-(Copy)?node-id=0-1&node-type=canvas&t=iEMZrL76fLafbJrK-0",
    },
    {
      name: "EventVibes",
      description:
        "Website which enables Event Planers to showcase their work and clients to directly order their services.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: eventvibes,
      source_code_link: "https://github.com/ishanilakshika/EventVibe",
      design_code_link:"https://www.figma.com/design/bu6JS18ai80HxQGD85KZEN/Team-SynTax_Error?node-id=0-1&node-type=canvas&t=QU3TwYWvWLKITjnC-0",
    },
    {
      name: "Campinga",
      description:
        "A website designed for users to easily locate camping gear for rent.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: campinga,
      source_code_link: "https://github.com/DMevinPerera/Campinga",
      design_code_link: "https://www.figma.com/design/DtV6hjD1JLegLFGqdbC0I0/Campinga?node-id=0-1&t=eIQS5YWZC515XFCe-1",
    },
    {
      name: "SLAR",
      description:
        "An App designed through Figma to manage the natural disasters which are occuring in Sri Lanka",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: slar,
      //source_code_link: "https://github.com/",
      design_code_link: "https://www.figma.com/design/KHJOTfbidjqVisvwQe9Uwb/SLAR-Disaster-Management-Website?node-id=0-1&node-type=canvas&t=SBjRcI35IvoHkPe7-0",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };