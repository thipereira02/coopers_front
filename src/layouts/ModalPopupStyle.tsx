import styled from "styled-components";

const ModalContainer = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 768px) {
        width: 100%;
    }
`;

export const DesktopModalContainer = styled(ModalContainer)`
    padding: 1.4375rem;

    p{
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        align-self: flex-end;
        margin-bottom: 0.75rem;
    }

    @media (min-width: 768px) {
        p{
            font-size: 1.25rem;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    margin: 0 auto;

    img{
        height: 8rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        h1{
            color: #000;
            font-size: 2.5rem;
            font-weight: 700;
            margin: 0.3rem 0 0.625rem;
            text-align: center;
        }
    
        h2{
            color: #4AC959;
            font-size: 1.5rem;
            font-weight: 400;
        }
    }

    @media (min-width: 768px) {
        img{
            height: 10rem;
        }

        div{
            h1{
                font-size: 3rem;
            }

            h2{
                font-size: 2rem;
            }
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 1rem;

    label{
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
        font-size: 1rem;
    }

    input{
        border: 1px solid #959595;
        border-radius: 10px;
        height: 2.5rem;
        padding: 0 0.5rem;
    }

    button{
        background-color: #4AC959;
        border: none;
        color: #FFF;
        font-size: 1rem;
        font-weight: 700;
        height: 3rem;
        margin-top: 2rem;
        margin-bottom: 0.5625rem;
        width: 80%;
        align-self: center;
    }

    @media (min-width: 768px) {
        width: 55%;

        label{
            font-size: 1.5rem;
            margin-top: 1rem;
        }

        input{
            height: 3rem;
            font-size: 1.2rem;
        }

        button{
            font-size: 1.5rem;
            height: 3.5rem;
        }
    }
`;

export const StyledLink = styled.div`
    p{
        font-size: 1rem;
        text-align: center;

        :hover{
            opacity: 0.7;
        }
    }

    @media (min-width: 768px) {
        p{
            font-size: 1.2rem;
        }
    }
`;