import React from 'react';
import './App.css';
import ProfilePic from './ProfilePic.png';
import github from './github.svg';
import linkedin from './linkedin.png';
import mail from './mail.png';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Experience from './component/exp';
import Learning from './component/learn';
import Programs from './component/Programs';
import Technologies from './component/Technologies';
import Language from './component/Language';
import Courses from './component/Courses';


const App = () => {




return (
    <div class="main">
        <div class="profile">
            <div class="profile-pic img"><img src = {ProfilePic} alt="profile"/></div>
            <div class="name"><h2>Ebrahem Osama Ebrahem</h2></div>
            <div class="contacts">
                <ol>
                    <li>&#9990; 02-01092820877</li>
                    <li><img src={mail}  alt="mail-logo"/> hemahafez01@gmail.com</li>
                    <a href="https://github.com/hemahafez01"><li><img src={github}  alt="github-logo"/> github</li></a>
                    <a href="https://eg.linkedin.com/in/ebrahem-osama-a2083496"><li><img src={linkedin}  alt="linkedin-logo"/> linkedin</li></a>
                </ol>
            </div>
            <Programs/>
            <Technologies/>
            <Language/>
        </div>
        <div class="sections">
        <div class="objective">
            <h4>Objective</h4>
            <p>
                Extremity direction existence as dashwoods do up. Securing marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an
            </p>
        </div>
        <Experience/>
        <Learning/>
        <Courses/>
        </div>
    </div>
)

}




export default App;
