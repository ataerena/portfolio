import React from 'react';

import RouteItem from '../components/RouteItem';
import ProjectItem from '../components/ProjectItem';

import "../App.scss";
import "../styles/Home.scss";

// images //

import graduationImg from "../assets/graduation.png";
import aottg2eeImg from "../assets/aottg2ee.png";

const Projects: React.FC = () => {
    return (
        <div className="MainFrame">
            <h1 className="no-margin-span" style={{borderBottom: 0}}>
                Projects
            </h1>

            <span className="no-margin-span border-bottom">
                On this page, I briefly talk about the projects I have worked on and currently work on, excluding my work experience. 
                You can find a more detailed information on the each project's respective page.
            </span>

            <ProjectItem
                header="Image Album Sorter"
                img_path=""/* {graduationImg} */
                page_link=""
                github_link="https://github.com/ataerena/bitirme"
                brief="
                    This project was the first solo project I worked on. It was a project I made as my graduation project from Marmara University.
                    The app used the YOLOv5 techonology to detect the context of images uploaded by a user and automatically sort them into albums.
                    Album app also had a structure where users needed to register & login to be able to use it. Password encryption was handled by Bcrypt.
                    The tech stack used was Python (YOLO), Vue.js and Node.js. Database structure was made in a simple JSON format.
                "
            />

            <ProjectItem
                header="AoTTG2:EE"
                img_path={aottg2eeImg}
                page_link=""
                github_link="https://github.com/ZippyStew45/Aottg2-EM"
                brief="
                    I don't want to extensively delve into this as it is by no means a project made by myself. This is a mod project for an open source Unity 3D game.
                    The main game, called AoTTG2, is an open source tribute game made by it's successors players.
                    The project was led by a friend of mine and with a small team we aimed to make a mod that created a different game mode.
                    I worked on developing new gameplay features which included their UI development and multiplayer integration using Photon PUN.
                "
            />

            <ProjectItem
                header="Samurai Game"
                img_path=""
                page_link="/projects/samurai-game"
                github_link="https://github.com/ataerena/2DSamuraiGame"
                brief="
                    The purpose of this project was to get more acquainted with Unity by making a small project from scratch. 
                    Assets used in it were all taken from free Unity Asset Store packages, with small improvements made on them such as adding new animation frames or fixing existing ones.
                    It has a dull but functioning combat system, with a single level that requires you to kill all enemies to finish the level accompanied by fire music.
                    Since I was trying to learn the ropes of developing from scratch, I made my own input system, camera follow and character controller scripts.
                "
            />

            <ProjectItem
                header="Untitled 2D Game"
                img_path=""
                page_link=""
                github_link="https://github.com/ataerena/Square_2D"
                brief="
                    This project is the next step from the 2D Samurai Game. It has no commercial aim and is simply another sandbox to get better at using the Unity Game Engine.
                    My aim is to make a more refined game with fewer base mechanics that takes more advantage of the solutions integrated within the engine.
                    The project is currently in progress; 1 out of the 3 levels is created as well as the base mechanics, 
                    base UI, remappable input system -which uses the new Unity input system- with controller support. 
                "
            />
        </div>
    );
}

export default Projects;