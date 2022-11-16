import React from "react";
import styled from "styled-components";

export default function GoodThing() {
	return(
		<Content>
			<Background>
				<h1>good things</h1>
			</Background>
		</Content>
	);
}

const Content = styled.div`
    padding: 0 2rem;

    @media (min-width: 768px){
        padding: 0 7rem;
    }

    @media (min-width: 1024px){
        padding: 0 10rem;
    }
`;

const Background = styled.div`
    height: 18rem;
    background-color: #4AC959;
    border-radius: 0.625rem;
    margin: 3rem auto;
    padding-top: 3rem;

    h1{
        color: #FFF;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 1.375rem;
        padding-left: 2rem;
    }

    @media(min-width: 768px) {
        padding-top: 5rem;

        h1{
            padding-left: 5rem;
        }
    }
`;