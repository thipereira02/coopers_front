import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/bitmap.jpg";
import img2 from "../assets/bitmap (1).jpg";
import img3 from "../assets/bitmap (2).jpg";

export default function GoodThing() {
	const card = [
		{
			id: 1,
			title: "function",
			description: "Organize your daily job enhance your life performance",
			action: "read more",
			image: img1
		},
		{
			id: 2,
			title: "function",
			description: "Mark one activity as done makes your brain understands the power of doing.",
			action: "read more",
			image: img2
		},
		{
			id: 3,
			title: "function",
			description: "Careful with missunderstanding the difference between a list of things and a list of desires.",
			action: "read more",
			image: img3
		}
	];

	return(
		<Content>
			<Background>
				<h1>good things</h1>
				<Carousel 
					showArrows={false} 
					showThumbs={false}
					showStatus={false}
					autoPlay={true}
					infiniteLoop={true}
					interval={6000}
					transitionTime={1000}
				>
					{card.map((item) => (                     
						<Card key={item.id}>
							<img src={item.image} alt={item.description} />
							<Text>
								<Title>{item.title}</Title>
								<Description>{item.description}</Description>
								<Button>{item.action}</Button>
							</Text>
						</Card>
					))}
				</Carousel>
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
        height: 25rem;

        h1{
            padding-left: 5rem;
        }
    }

    @media(min-width: 1024px) {
        height: 32.5rem;
    }
`;

const Card = styled.div`
    width: 60%;
    margin: 0 auto;

    img{
        border-radius: 1rem 1rem 0 0;
    }

    @media(min-width: 768px) {
        width: 40%;
        max-height: 50rem;
    }
`;

const Text = styled.div`
    background-color: #FFF;
    padding: 1.2rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 8px 16px rgba(6, 21, 43, 0.08);

    @media(min-width: 1024px) {
        padding: 1.875rem;
    }
`;

const Title = styled.div`
    font-size: 0.8rem;
    border: 1px solid #9499B3;;
    border-radius: 1rem;
    color: #9499B3;
    padding: 0.5rem;
    margin-bottom: 1rem;

    @media(min-width: 1024px) {
        font-size: 1rem;
    }
`;

const Description = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: 3rem;

    @media(min-width: 1024px) {
        font-size: 1.2rem;
        margin-bottom: 5rem;
    }
`;

const Button = styled.h2`
    font-size: 0.8rem;
    font-weight: 700;
    color: #4AC959;
    cursor: pointer;

    @media(min-width: 1024px) {
        font-size: 1rem;
    }
`;