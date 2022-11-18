import styled from "styled-components";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
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
    box-shadow: 0px 4px 12px rgba(66, 66, 66, 0.198454);
    border-top: 1rem solid;
    border-color: ${(props) => props.color === "todo" ? "#E88D39" : "#4AC959"};
    margin-bottom: 1rem;
    padding: 1.5rem 1rem;

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 600;
    }

    h2{
        text-align: center;
        font-size: 1.25rem;
        margin-top: 0.5rem;
        line-height: 1.5rem;
    }

    h3{
        font-size: 1.25rem;
        font-weight: 700;
        text-align: center;
        line-height: 1.5rem;
    }

    @media(min-width: 768px) {
        border-width: 1.25rem;
        margin-bottom: 0;
        max-width: 30vw;
    }

    @media(min-width: 1024px) {
        max-width: 25vw;

        h1{
            font-size: 2.5rem;
        }

        h2{
            font-size: 1.5rem;
            line-height: 1.875rem;
        }

        h3{
            font-size: 1.5rem;
            line-height: 1.875rem;
        }
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

export const Button = styled.button`
    width: 5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #000;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 3;

    @media(min-width: 768px){
        width: 7.5rem;
    }
`;

export const Tasks = styled.div`
    margin-top: 1.7rem;

    div{
        display: grid;
        grid-template-columns: 1fr 6.5fr 1fr;
        margin-bottom: 0.5rem;
        align-items: center;

        p{
        font-size: 1rem;
        line-height: 1.2rem;
    }

        a{
            color: #999999;
            font-size: 0.75rem;
            text-align: right;
            align-self: center;
            cursor: pointer;
        }
    }

    @media(min-width: 1024px) {
        div{
            grid-template-columns: 1fr 7fr 1fr;
            margin-bottom: 0.7rem;

            p{
                font-size: 1.2rem;
                line-height: 1.5rem;
            }
        }
    }
`;

export const Task = styled.div`
    display: grid;
    grid-template-columns: 1fr 6.5fr 1fr;
    margin-bottom: 0.5rem;
    align-items: center;

    p{
        font-size: 1rem;
        line-height: 1.2rem;
    }

    a{
        color: #999999;
        font-size: 0.75rem;
        text-align: right;
        align-self: center;
        cursor: pointer;
    }

    @media(min-width: 1024px) {
        grid-template-columns: 1fr 6fr 1fr;
        margin-bottom: 0.7rem;

        p{
            font-size: 1.2rem;
            line-height: 1.5rem;
        }
    }
`;

export const EmptyCircle = styled(BsCircle)`
    color:#E88D39;
    font-size: 1rem;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const CircleFill = styled(BsCheckCircleFill)`
    color:#4AC959;
    font-size: 1rem;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;