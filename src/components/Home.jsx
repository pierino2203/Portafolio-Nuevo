import React from "react";
import pier1 from '../img/pier.png'
import pier2 from '../img/pier2.jpeg'
import Style from '../styles/Home.module.css'


export default function Home() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.container_main}>
                    <img src={pier1} alt="" />
                    <h1>Pierino Juncos</h1>
                    <h2>Full Stack Developer</h2>
                    <div>
                        <button>Descargar CV</button>
                        <button>Contactame!</button>
                    </div>
                </div>
            </div>
            <div className={Style.container_about}>
                <div className={Style.about_card}>
                    <img src={pier2} alt="" />
                    <div className={Style.about_text}>
                        <h1>Sobre mí</h1>
                        <p>Soy Pierino,estudiante del 4 año de Ingenieria en Sistemas de Informacion, complete un curso intensivo de Full Stack Developer donde realice proyectos y simule un ambiente de trabajo en equipo.
                        </p>
                        <p> Soy muy apasionado por aprender cosas nuevas y me encantan los desafios.</p>
                    </div>
                </div>
                <div className={Style.tecno_container}>
                    <h1>Tecnologías </h1>
                    <div className={Style.cards_tecno}>
                        <div className={Style.card_tecno}>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}