import React from "react";
import pier1 from '../img/pier.png'
import pier2 from '../img/pier2.jpeg'
import Style from '../styles/Home.module.css'
import Tecs from "./Tecs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faJs, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CardProject } from "./CardProject";
import imgProject1 from '../img/Captura de pantalla 2024-05-16 a la(s) 1.07.55 p. m 2.png'



export default function Home() {
    return (
        <>

            <div className={Style.container}>
                <div className={Style.redes}>
                    <a href="https://github.com/pierino2203" target="blank"><FontAwesomeIcon icon={faGithub} style={{ color: "rgba(69, 109, 211, 1)", heigh: "30px", width: "30px" }} /></a>
                    <a href="https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "rgba(69, 109, 211, 1)", heigh: "30px", width: "30px" }} /></a>
                    <a href="mailto:pierinoe@gmail.com?subject=Asunto%20del%20Correo&body=Mensaje%20del%20Correo" target="blank"><FontAwesomeIcon icon={faEnvelope} style={{ color: "rgba(69, 109, 211, 1)", heigh: "30px", width: "30px" }} /></a>
                </div>
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
                        <h2>Sobre mí</h2>
                        <p>Soy Pierino,estudiante del 4 año de Ingenieria en Sistemas de Informacion, complete un curso intensivo de Full Stack Developer donde realice proyectos y simule un ambiente de trabajo en equipo.
                        </p>
                        <p> Soy muy apasionado por aprender cosas nuevas y me encantan los desafios.</p>
                    </div>
                </div>
                <div className={Style.tecno_container}>
                    <h2>Tecnologías </h2>
                    <div className={Style.cards_tecno}>
                        <div className={Style.card_tecno}>
                            <h3>Front-End</h3>
                            <div className={Style.cartita}>
                                <Tecs icono={faHtml5} nombre='HTML' />
                                <Tecs icono={faCss3Alt} nombre='CSS' />
                                <Tecs icono={faReact} nombre='React' />
                                <Tecs icono={faJs} nombre='JavaScript' />
                                <Tecs icono={faJs} nombre='TypeScript' />
                                <Tecs icono={faBootstrap} nombre='Bootstrap' />
                                <Tecs icono={faHtml5} nombre='Redux' />
                            </div>
                        </div>
                        <div className={Style.card_tecno}>
                            <h3>Back-End</h3>
                            <div className={Style.cartita}>
                                <Tecs icono={faHtml5} nombre='HTML' />
                                <Tecs icono={faCss3Alt} nombre='CSS' />
                                <Tecs icono={faReact} nombre='React' />
                                <Tecs icono={faJs} nombre='JavaScript' />
                                <Tecs icono={faJs} nombre='TypeScript' />
                                <Tecs icono={faBootstrap} nombre='Bootstrap' />
                                <Tecs icono={faHtml5} nombre='Redux' />
                            </div>
                        </div>
                        <div className={Style.card_tecno}>
                            <h3>Tools</h3>
                            <div className={Style.cartita}>
                                <Tecs icono={faHtml5} nombre='HTML' />
                                <Tecs icono={faCss3Alt} nombre='CSS' />
                                <Tecs icono={faReact} nombre='React' />
                                <Tecs icono={faJs} nombre='JavaScript' />
                                <Tecs icono={faJs} nombre='TypeScript' />
                                <Tecs icono={faBootstrap} nombre='Bootstrap' />
                                <Tecs icono={faHtml5} nombre='Redux' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className={Style.container__projects}>
                <div className={Style.proyectos}>
                    <h2>Proyectos Principales</h2>
                    <CardProject
                        img={imgProject1}
                        nombre="Dogs App"
                        descripcion="Esta app contiene varias razas de perros y contiene filtros, se puede buscar ver el detalle de cada perro y se puede agregar un perro"
                        github="https://github.com/pierino2203/Deply-Dog"
                        deploy="https://deply-d.vercel.app/"
                    />
                    <CardProject
                        img={imgProject1}
                        nombre="Dogs App"
                        descripcion="Esta app contiene varias razas de perros y contiene filtros, se puede buscar ver el detalle de cada perro y se puede agregar un perro"
                        github="https://github.com/pierino2203/Deply-Dog"
                        deploy="https://deply-d.vercel.app/"
                    />
                    <CardProject
                        img={imgProject1}
                        nombre="Dogs App"
                        descripcion="Esta app contiene varias razas de perros y contiene filtros, se puede buscar ver el detalle de cada perro y se puede agregar un perro"
                        github="https://github.com/pierino2203/Deply-Dog"
                        deploy="https://deply-d.vercel.app/"
                    />
                    <CardProject
                        img={imgProject1}
                        nombre="Dogs App"
                        descripcion="Esta app contiene varias razas de perros y contiene filtros, se puede buscar ver el detalle de cada perro y se puede agregar un perro"
                        github="https://github.com/pierino2203/Deply-Dog"
                        deploy="https://deply-d.vercel.app/"
                    />
                </div>
                <div className={Style.porject__Sec}>
                    <h2>
                        Otros Proyectos
                    </h2>
                </div>
            </div>
        </>
    )
}