import React from 'react';
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import cartoon from "../../assets/atjays_cartoon.png";
import Project from '../../components/project/Project';

function Home() {
    return (
        <div id="home-container">
            <Header />
            <main id='main-home'>
                <section id="hero">
                    <article>
                        <h2>
                            Fullstack<br />Developer
                        </h2>
                        <p className={"hero-text"}>
                            I'm Jethro a fullstack developer from the Netherlands. I love learning new techniques so I can make better and more expressive websites.
                        </p>
                    </article>
                    <img src={cartoon} alt="" />
                </section>
                <section className="projects-container">
                    <section className="projects">
                        <h2>Recent Projects</h2>
                        <Project 
                            link={"https://j-segers.github.io/teashop/"} 
                            url={"https://cdn.shopify.com/s/files/1/0533/6743/9558/articles/header-Tea-Culture-Around-The-World.jpg?v=1648730059"} 
                            alt={"tea"}
                            projectTitle={"Teashop"}
                            projectType={"practice"}
                        />
                        
                        <Project 
                            link={"https://j-segers.github.io/teashop/"} 
                            url={"https://cdn.shopify.com/s/files/1/0533/6743/9558/articles/header-Tea-Culture-Around-The-World.jpg?v=1648730059"} 
                            alt={"tea"}
                            projectTitle={"Teashop"}
                            projectType={"practice"}
                        />
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default Home;