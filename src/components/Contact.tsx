import React from "react";
import styled from "styled-components";

import photo from "../assets/tatiana.jpg";
import icon from "../assets/letter.svg";

export default function Contact() {
	return(
		<Content>
			<div>
				<Background />
				<img src={photo} alt="Tatiana" />
			</div>
			<Info>
				<IconBg>
					<img src={icon} alt="letter" />
				</IconBg>
				<Text>
					<h1>GET IN</h1>
					<h2>TOUCH</h2>
				</Text>
			</Info>
		</Content>
	);
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;

    div{
        position: relative;
    }

    img{
        height: 8.5rem;
        border-radius: 50%;
    }

    @media (min-width: 768px){
        padding: 0 7rem;

        img{
            height: 11rem;
        }
    }

    @media (min-width: 1024px){
        padding: 0 10rem;
    }
`;

const Background = styled.div`
    width: 8rem;
    height: 1rem;
    background-color: #4AC959;
    position: absolute;
    top: 4.8rem;
    right: 30%;
    z-index: -1;
    
    @media (min-width: 768px){
        height: 1.5rem;
        top: 6.5rem;
    }
`;

const Info = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
`;

const IconBg = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #4AC959;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 1.8rem;
    }

    @media (min-width: 768px){
        width: 3.75rem;
        height: 3.75rem;

        img{
            width: 2rem;
        }
    }
`;

const Text = styled.div`
    margin-left: 0.7rem;

    h1{
        font-size: 1rem;
        font-weight: 500;
    }

    h2{
        font-size: 1rem;
        font-weight: 700;
    }

    @media (min-width: 768px){
        margin-left: 1.1rem;

        h1{
            font-size: 1.5rem;
            font-weight: 500;
        }

        h2{
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
`;