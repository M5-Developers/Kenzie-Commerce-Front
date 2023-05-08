import { styled } from "styled-components";

const MainHeader = styled.header`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #2853d4;
    color: white;
    padding: 5px 0px;

    button{
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
        background-color: blue;
        color: white;
        font-weight: bold;
    }
    
`;

export default MainHeader;