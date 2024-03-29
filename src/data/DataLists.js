//ProjectList Images
import proj1 from '../imgs/sortingVisualizer_Proj.png';
import proj2 from '../imgs/title_proj.png';
import proj3 from '../imgs/personalSite_Proj.png';
import proj4 from '../imgs/penAI_Proj.png';
import proj5 from '../imgs/game_Proj.png';
import proj6 from '../imgs/flood_Proj.png';

//ExperienceList Icons
import exp1 from '../imgs/Scotiabank-logo.png';
import exp2 from '../imgs/GameDev-logo.png';

//SkillList Icons
import logo from '../imgs/RU-logo.png';
import logo2 from '../imgs/reactLogo.png';
import logo3 from '../imgs/camera.png';
import logo4 from '../imgs/bilingual.png';

//iOS & Android Game Images
import game2 from '../imgs/leapingBall.png';
import game4 from '../imgs/rocketBlast.png';

export const ProjectList = [
    {
        id: 1, 
        title: "Sorting Visualizer", 
        content:"A React App that visualizes sorting algorithms.", 
        pic: proj1,
        gitHub:"https://github.com/rohan-dhir/Sorting-Visualizer",
        demo:"https://sorting-visualizer-rohan.netlify.app"
    },

    {
        id: 2, 
        title: "AI Enhanced Rich Text Editor", 
        content:"A Rich Text Editor that intelligently suggests sentence completions. Makes use of the OpenAI API.", 
        pic: proj4,
        gitHub:"https://github.com/rohan-dhir/Pen-AI",
        demo:"https://pen-ai.netlify.app/"
    },

    {
        id: 3, 
        title: "Product Title Parser", 
        content:"A React App that parses extraneous details from text input. Ideal for e-commerce.", 
        pic: proj2,
        gitHub:"https://github.com/rohan-dhir/parsing-tool-react",
        demo:"https://parsing-tool-react.netlify.app/"
    },

    {
        id: 4, 
        title: "Personal Website", 
        content:"This website! Built with React :)", 
        pic: proj3,
        gitHub:"https://github.com/rohan-dhir/personal-website",
        demo:""
    },

    {
        id: 5, 
        title: "iOS & Android Games", 
        content:"Built a variety of 2D and 3D mobile games using Objective-C and C#.", 
        pic: proj5,
        gitHub:"",
        demo:"/mobilegames"
    },

    {
        id: 6, 
        title: "Flood! (React)", 
        content:"A short game based on the popular title 'Flood It!'", 
        pic: proj6,
        gitHub:"https://github.com/rohan-dhir/Flood-React",
        demo:"https://flood-react-rohan.netlify.app"
    },
];

export const ExperienceList = [
    {
        id: 1, 
        title:"Business Analyst - High Value Payments | Scotiabank", 
        description: "March 2022 - Present", 
        icon:exp1
    },

    {
        id: 2, 
        title:"Freelance Front-End Web Developer", 
        description: "January 2018 - April 2021", 
        icon:logo2
    },

    {
        id: 3, 
        title: "Freelance iOS & Android Game Developer", 
        description: "February 2014 - November 2017", 
        icon:exp2
    }
];

export const SkillList = [
    {
        id: 1, 
        title:"Bachelor of Science (Honours) - Computer Science", 
        description: "Studied Computer Science at Ryerson University in Toronto. Graduated in April 2021. Relevant Courses: Data Structures, Algorithms, and Operating Systems. Minor in Economics.", 
        icon:logo
    },

    {
        id: 2, 
        title: "Technical Skills", 
        description: "Java · C# · Python 3 · JavaScript (ES6) · HTML5 · CSS3 · PHP · jQuery · React/Redux · Node.js · GraphQL · SQL · MongoDB · Git · Agile (Scrum)", 
        icon:logo2
    },

    {
        id: 3, 
        title: "Interests", 
        description: "Aside from coding, I am a hobbyist photographer and enjoy capturing portraits and landscapes during my travels.", 
        icon:logo3
    },

    {
        id: 4, 
        title: "Bilingual", 
        description: "Able to speak Hindi at a professional working proficiency.", 
        icon:logo4
    }
];

export const SliderList = [
    {
        id: 1,
        title: "Hostile Moon",
        downloads: "50+",
        description: "A game with multiple modes where a lone player must defeat a near endless amount of enemies and cross more than 100 levels. Developed using Unity and Autodesk Maya for 3D modelling. Written in C#.",
        video: "https://www.youtube.com/embed/cucYpb_MY9M?autoplay=1&mute=1",
        image: "",
        link: "https://play.google.com/store/apps/details?id=com.RohanDhir.HostileMoon"
    },

    {
        id: 2,
        title: "Leaping Ball",
        downloads: "10+",
        description: "My first 3D game! A game in which a user must tap the screen to bounce the ball between the walls to maintain speed while avoiding obstacles. 3D models developed with Unity and Autodesk Maya, written in C#.",
        video: "",
        image: game2,
        link: "https://play.google.com/store/apps/details?id=com.RohanDhir.LeapingBall"
    },

    {
        id: 3,
        title: "Drop of Faith",
        downloads: "3.5k+",
        description: "My first 2D game! An 'endless runner' style game where the user must dodge obstacles by rotating the device left or right to control the player. Developed with Xcode, written in Objective-C. Adobe Photoshop was used for 2D sprites.",
        video: "https://www.youtube.com/embed/6ccQvSVp5dA?autoplay=1&mute=1",
        image: "",
        link: ""
    },

    {
        id: 4,
        title: "Rocket Blast!",
        downloads: "10+",
        description: "Another 2D endless game written in Objective-C. Utilized many of the same assets from the first game to save on development time.",
        video: "",
        image: game4,
        link: ""
    },
];

