import React, { useContext, useEffect } from 'react';
import "./Home.css";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import cartoon from "../../assets/atjays_cartoon.png";
import Project from '../../components/project/Project';
import { PersonalProjectContext } from '../../context/PersonalProjectContext';
import projectFiles from "../../data/projects.js";

export default function Home() {

    const { setPrevious } = useContext(PersonalProjectContext);

    useEffect(() => {
        setPrevious(window.location.href);
    }, [setPrevious])
    
    return (
        <div id="home-container">
            <Header />
            <main id='main-home'>
                <section id="hero">
                    <article>
                        <h2>
                            Frontend<br />Developer
                        </h2>
                        <p className={"hero-text"}>
                            I'm Jethro a front-end developer from the Netherlands. I love learning new techniques so I can make my designs better.
                        </p>
                    </article>
                    <img src={cartoon} alt="" />
                </section>
                <section className="projects-container">
                    <section className="projects">
                        <h2>Recent Projects</h2>
                        {projectFiles.slice(0, 6).map((item) => {
                            return <Project 
                            link={item.link} 
                            imgURL={item.img} 
                            alt={item.alt}
                            projectTitle={item.title}
                            projectType={item.type}
                            />
                        })}
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}