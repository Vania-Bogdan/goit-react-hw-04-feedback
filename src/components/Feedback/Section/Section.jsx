import React from "react";
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Section = ({ title, children }) => {
    return (
        <Container>
            <H2>{title}</H2>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}

const Container = styled.div`
    border: 5px solid black;
    border-radius: 20px;
    padding: 15px;
    font-size: 20px;
`
const H2 = styled.h2`
margin: 10px;
margin-bottom: 20px;
`

export default Section