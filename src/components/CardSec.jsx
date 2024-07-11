import React from "react";
import Style from '../styles/CardSec.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function CardSec({nombre,img,description,github,web}){
    return(
        <div className={Style.contenedor}>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3>{nombre}</h3>
                <p>{description}</p>
                <div>
                <a href={github} target="blank"><FontAwesomeIcon icon={faGithub} style={{ color: "rgba(69, 109, 211, 1)", }} /></a>
                <a href={deploy} target="blank"><FontAwesomeIcon icon={faGlobe} style={{ color: "rgba(69, 109, 211, 1)", }} /></a>
                </div>
            </div>
        </div>
    )
}