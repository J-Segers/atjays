import React from 'react';
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import cartoon from "../../assets/atjays_cartoon.png";

function Home() {
    return (
        <div id="home-container">
            <Header />
            <main>
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
                <section className="projects">
                    &nbsp;
                </section>
            </main>
            <Footer />
        </div>
    );
}
export default Home;