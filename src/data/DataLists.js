//ProjectList Images
import proj1 from '../imgs/sortingVisualizer_Proj.png';
import proj2 from '../imgs/title_proj.png';
import proj3 from '../imgs/personalSite_Proj.png';
import proj4 from '../imgs/socialNetwork_Proj.png';
import proj5 from '../imgs/game_Proj.png';
import proj6 from '../imgs/flood_Proj.png';

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
        onClick:"https://sorting-visualizer-rohan.netlify.app"
    },

    {
        id: 2, 
        title: "Product Title Parser", 
        content:"A React App that parses extraneous details from text input. Ideal for e-commerce.", 
        pic: proj2,
        onClick:"https://parsing-tool-react.netlify.app/"
    },

    {
        id: 3, 
        title: "Personal Website", 
        content:"This website! Built with React :)", 
        pic: proj3,
        onClick:"/"
    },

    {
        id: 4, 
        title: "Social Networking Site", 
        content:"A PHP site to post, like and follow others. Uses MySQL as the database.", 
        pic: proj4,
        onClick:"https://github.com/rohan-dhir/Logr"
    },

    {
        id: 5, 
        title: "iOS & Android Games", 
        content:"Built a variety of 2D and 3D mobile games using Objective-C and C#.", 
        pic: proj5,
        onClick:"/mobilegames"
    },

    {
        id: 6, 
        title: "Flood! (React)", 
        content:"A short game based on the popular title 'Flood It!'", 
        pic: proj6,
        onClick:"https://flood-react-rohan.netlify.app"
    },
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
        launched: "2017",
        downloads: "50+",
        description: "A game with multiple modes where a lone player must defeat a near endless amount of enemies and cross more than 100 levels. Developed using Unity and Autodesk Maya for 3D modelling. Written in C#.",
        video: "https://www.youtube.com/embed/cucYpb_MY9M?autoplay=1&mute=1",
        image: "",
        link: "https://play.google.com/store/apps/details?id=com.RohanDhir.HostileMoon"
    },

    {
        id: 2,
        title: "Leaping Ball",
        launched: "2017",
        downloads: "10+",
        description: "My first 3D game! A game in which a user must tap the screen to bounce the ball between the walls to maintain speed while avoiding obstacles. 3D models developed with Unity and Autodesk Maya, written in C#.",
        video: "",
        image: game2,
        link: ""
    },

    {
        id: 3,
        title: "Drop of Faith",
        launched: "2015",
        downloads: "3.5k+",
        description: "My first 2D game! An 'endless runner' style game where the user must dodge obstacles by rotating the device left or right to control the player. Developed with Xcode, written in Objective-C. Adobe Photoshop was used for 2D sprites.",
        video: "https://www.youtube.com/embed/6ccQvSVp5dA?autoplay=1&mute=1",
        image: "",
        link: ""
    },

    {
        id: 4,
        title: "Rocket Blast!",
        launched: "2015",
        downloads: "10+",
        description: "Another 2D endless game written in Objective-C. Utilized many of the same assets from the first game to save on development time.",
        video: "",
        image: game4,
        link: ""
    },
];

