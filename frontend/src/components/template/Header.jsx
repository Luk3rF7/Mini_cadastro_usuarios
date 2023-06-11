import './Header.css'
import React from 'react'

export default props => 
    <header  /* confg bootstrap class */  /* d-nome => deixa reponsivo header */
    /* d-sm-flex  /* d-sm-flex deixa flex caso dispositivo se medium/grande */
   className="header d-none d-sm-flex " >
       <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
       <p className="lead text-muted">{props.subtitle}</p>
       </h1>
    </header>
