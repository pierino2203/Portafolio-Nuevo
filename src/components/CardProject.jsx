import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Style from '../styles/CardProject.module.css'

export function CardProject({ nombre, img, descripcion, github, deploy }) {
    return (
        <div className={Style.card__project}>
            <div>
                <img src={img} alt="Imagen de Aplicacion" />
            </div>
            <div className={Style.contenido}>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <div className={Style.iconos}>
                    <a href={github} target="blank"><FontAwesomeIcon icon={faGithub} style={{ color: "rgba(69, 109, 211, 1)", }} /></a>
                    <a href={deploy} target="blank"><FontAwesomeIcon icon={faGlobe} style={{ color: "rgba(69, 109, 211, 1)", }} /></a>
                </div>
            </div>
        </div>
    )
}