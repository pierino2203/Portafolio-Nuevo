import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from '../styles/Tecs.module.css'
export default function Tecs(props) {
    return (
        <>
            <div className={Style.tec}>
                <FontAwesomeIcon icon={props.icono} size="xl" style={{ color: "#ffffff", }} />
                <p>{props.nombre}</p>
            </div>
        </>
    )
}