import React from "react";
import styled from "styled-components";

export default function GoodThing() {
	return(
		<Background>
			<h1>good things</h1>
		</Background>
	);
}

const Background = styled.div`
    width: 80vw;
    height: 18rem;
    background-color: #4AC959;
    border-radius: 0.625rem;
    margin: 3rem auto;
    padding-left: 2rem;
    padding-top: 3rem;

    h1{
        color: #FFF;
        font-size: 2.2rem;
        font-weight: 700;
    }

    @media(min-width: 768px) {
        width: 70vw;
        padding-left: 5rem;
        padding-top: 5rem;
    }
`;