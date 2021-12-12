import React from "react";
import { Link } from 'react-router-dom';

const Pages = props =>
    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}></i> {props.page}
    </Link>;

export default Pages;