import styled from "styled-components";

interface BoxProps {
    color?: string;
}

interface ElementProps {
    top?: string;
    display?: string;
}

export const ListBox = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: 20vh;
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    border-top: 1rem solid;
    border-color: ${(props) => props.color === "todo" ? "#E88D39" : "#4AC959"};
    margin-bottom: 1rem;
    padding-top: 1.5rem;

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    }

    @media(min-width: 768px) {
        border-width: 1.25rem;
        margin-bottom: 0;
        max-width: 30vw;
    }

    @media(min-width: 1024px) {
        max-width: 25vw;
    }
`;

export const BgElement = styled.img<ElementProps>`
    display: none;
    height: 30rem;
    position: absolute;
    top: ${(props) => props.top === "back" ? "45rem" : "43.6rem"};

    @media(min-width: 768px) {
        display: block;
    }

    @media(max-width: 1024px) {
        height: 22rem;
    }
`;