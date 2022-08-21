import React from 'react'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import "./home.css"
import Fade from 'react-reveal/Fade'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from "styled-components"
import Button from "@mui/material/Button"

//import { ButtonGroup } from '@mui/material';
function Section({ title, summary,buttonleft, buttonright, backgroundImg}) {
    return (

        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
            <ItemText><h1 class = "name"> {title}</h1>  <p>

            </p>
                <p class = "body">{summary}</p></ItemText> </Fade> <Buttons> <Fade bottom>
            <ButtonGroup><Button variant="contained" id = "button1">{buttonleft }</Button>
            { buttonright && 
                <Button variant="fab" color="primary" id = "button2">
                {buttonright }
                </Button>
            }
            </ButtonGroup> </Fade>
            <KeyboardArrowDownIcon class = "arrowodwn" /> </Buttons>
        </Wrap>



    )
}

export default Section

const Wrap = styled.section`
    width:100%;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.section`
    padding-top:15vh;
    align-items: center;
`

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const ButtonGroup = styled.div`
    
    display:flex;
    margin-bottom: 30px;
    @media(max-width: 769px) {
    flex-direction: column;
    }
    
`

const Buttons = styled.div`
`