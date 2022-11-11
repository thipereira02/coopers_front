import React from "react";
import styled from "styled-components";

import background from "../assets/BG_footer.jpg";
import element from "../assets/BG_footer2.png";

export default function Footer() {
	return(
		<Content>
			<img src={background} alt="background" />
			<h1>Need help?</h1>
			<h2>coopers@coopers.pro</h2>
			<h3>© 2021 Coopers. All rights reserved.</h3>
			<Element src={element} alt="element" />
		</Content>
	);
}

const Content = styled.div`    
    display: inline-block;
    position: relative;
    width: 100vw;
    color: #FFF;
    font-size: 1.3rem;
    font-weight: 600;
    background-color: #000;
    margin-top: 3rem;

    h1{
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 1.7rem;
    }

    h3{
        font-size: 0.625rem;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 3.4rem;
    }

    @media (min-width: 768px){
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 5rem;
    }
`;

const Element = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    @media (max-width: 768px){
        width: 60%;
    }
`;