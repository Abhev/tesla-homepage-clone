import React from 'react'
import Section from "./Section"
import styled from "styled-components"
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home(){
    return(
    
       <Container>
           <Section
                title="Model 3"
                backgroundImg = "model-3.jpg"
                summary = "Order Online for Touchless Delivery"
                buttonleft = "Custom Order"
                buttonright = "View Inventory"
                

            />
            
            <Section
                title="Model Y"
                backgroundImg = "model-y.jpg"
                summary = "Order Online for Touchless Delivery"
                buttonleft = "Custom Order"
                buttonright = "View Inventory"

            />
            <Section
                title="Model S"
                backgroundImg = "model-s.jpg"
                summary = "Order Online for Touchless Delivery"
                buttonleft = "Custom Order"
                buttonright = "View Inventory"

            />
            <Section
                title="Model X"
                backgroundImg = "model-x.jpg"
                summary = "Order Online for Touchless Delivery"
                buttonleft = "Custom Order"
                buttonright = "View Inventory"

            />
            <Section
                title="Solar Panels"
                backgroundImg = "solar-panel.jpg"
                summary = "Lowest Cost Solar Panels across the world"
                buttonleft = "Order Now"
                buttonright = "Learn More"

            />
            <Section
                title="Solar Roof"
                backgroundImg = "solar-roof.jpg"
                summary = "Produce Clear Energy using Solar Roofs"
                buttonleft = "Order Now"
                buttonright = "Learn More"

            />
            
            <Section
                title="Accessories"
                backgroundImg = "accessories.jpg"
                summary = ""
                buttonleft = "Shop Now"
                // buttonright = "Learn More"

            />
       </Container>
        
    
    )
}

export default Home

const Container = styled.section`  

height: 100vh;
`;


    
