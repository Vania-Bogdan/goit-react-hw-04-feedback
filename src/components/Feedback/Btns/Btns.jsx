import React from "react";
import PropTypes from 'prop-types';
import styleBtns from "./Btns.module.css";

const Btns = ({ names, voting }) => {
    
    return (
        <ul className={styleBtns.ul}>
            {names ? names.map(name => {
                return (
                    <li key={name} className={styleBtns.li}>
                        <button className={styleBtns.btn} type="button" onClick={voting}>{name}</button>
                    </li>
                );
            }) : []}
        </ul>
    )
}

Btns.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string.isRequired),
    voting: PropTypes.func.isRequired
}

export default Btns