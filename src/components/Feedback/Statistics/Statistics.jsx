import React from "react";
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Statistics = ({ good, neutral, bad, total, posPer }) => {
    return (
        <Ul>
            <Li>
                <P>Good: <span>{good}</span></P>
            </Li>
            <Li>
                <P>Neutral: <span>{neutral}</span></P>
            </Li>
            <Li>
                <P>Bad: <span>{bad}</span></P>
            </Li>
            <Li>
                <b><P style={{
                    marginTop: 30,
                    marginBottom: 20
                }}>Total: <span>{total}</span></P></b>
            </Li>
            <Li>
                <b><P>Positive feedback: <span>{posPer + "%"}</span></P></b>
            </Li>
        </Ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    posPer: PropTypes.number.isRequired
}

const P = styled.p`
    font-size: 26px;
    color: #303030;
    margin: 8px;
`
const Li = styled.li`
    margin: 0px;
    list-style-type: none;
`
const Ul = styled.ul`
    margin: 0px;
    padding: 0px;
`

export default Statistics