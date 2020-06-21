import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components';
import bg from '../assets/background.jpeg'

const Styles = styled.div`
    .jumbo{
        background: url(${bg}) no-repeat fixed bottom;
        background-size:cover;
        color:#fff;
        height:200px;
        position:relative;
        z-index:-2
    }

    .overlay{
        background-color:#000;
        position:absolute;
        opacity: 0.4;
        top:0px;
        left:0px;
        bottom:0px;
        right:0px;
        z-index:-1;
    }

`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">

            </div>
            <Container>
                 <h1>Welcome</h1>
            </Container>
        </Jumbo>
    </Styles>

)