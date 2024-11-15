/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kartik Saha",
  title: "Hi there, I'm Kartik",
  subTitle: emoji(
    "An enthusiastic Full Stack AI Developer 🚀 with a passion for creating innovative solutions."
  ),
  aiExperience: emoji("⚡ Experienced in developing and deploying AI models"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kartiksaha802",
  linkedin: "https://www.linkedin.com/in/kartiksaha/",
  gmail: "kartiksaha802@gmail.com",
  medium: "https://medium.com/@kartiksaha802",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "AI & Machine Learning Skills",
  subTitle: "SPECIALIZED IN AI DEVELOPMENT AND GENERATIVE AI TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Expertise in developing Large Language Models and Generative AI applications"
    ),
    emoji(
      "⚡ Building AI agents and autonomous systems using CrewAI and LangChain"
    ),
    emoji("⚡ Advanced NLP solutions and conversational AI implementations"),
    emoji("⚡ Deep learning model development and MLOps practices"),
    emoji("⚡ Computer Vision and Image Processing applications"),
    emoji("⚡ Reinforcement Learning and Decision Making Systems"),
    emoji("⚡ Vector Databases and Semantic Search implementations")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LlamaIndex",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "CrewAI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "CUDA",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "MLOps",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "Pinecone",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Ray",
      fontAwesomeClassname: "fas fa-sun"
    },
    {
      skillName: "Weights & Biases",
      fontAwesomeClassname: "fas fa-chart-line"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT Bhopal",
      logo: require("./assets/images/not_bhopal.png"),
      subHeader: "Master of Technology in Artificial Intelligence",
      duration: "September 2021 - May 2023"
    },
    {
      schoolName: "Tezpur University",
      logo: require("./assets/images/Tezpur_University_logo.png"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "July 2015 - August 2019"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "GenAI", //Insert stack or technology you have experience in
      progressPercentage: "90%"
    },
    {
      Stack: "MultiAgent Systems", //Insert stack or technology you have experience in
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lead in AI",
      company: "HCLTech",
      companylogo: require("./assets/images/hcl_tech.jpeg"),
      date: "Oct 2023 – Present",
      desc: "Leading AI development and implementation of cutting-edge solutions.",
      descBullets: [
        "Led development of end-to-end AI solutions using LangChain and CrewAI frameworks",
        "Designed and implemented MLOps pipelines for model deployment and monitoring",
        "Built robust APIs and microservices for AI model serving using FastAPI",
        "Integrated vector databases (Pinecone) for efficient semantic search capabilities",
        "Developed custom LLM applications with advanced prompt engineering techniques",
        "Implemented streamlined CI/CD pipelines for AI applications using Docker and Kubernetes"
      ]
    },
    {
      role: "Graduate Engineer Trainee",
      company: "Sanmar Group",
      companylogo: require("./assets/images/Chemplast_Sanmar.jpg"),
      date: "July 2019 –  Feb 2021"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections



const talkSection = {
  display: false // Set false to hide this section
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8638141052",
  email_address: "kartiksaha802@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,

  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
