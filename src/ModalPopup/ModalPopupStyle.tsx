import styled from "styled-components";

const ModalContainer = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    padding: 2.5rem;
    width: 28rem;
`;

export const Header = styled.h3`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.3rem 0 0.625rem;
    text-align: center;
`;