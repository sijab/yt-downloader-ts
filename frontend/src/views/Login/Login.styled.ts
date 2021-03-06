import styled from 'styled-components'
import { device } from '../../helper/deviceSize';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #16161d;
    display: flex;
    font-family: 'Roboto', sans-serif;

    @media only screen and (${device.laptop}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Column = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red;; */

    @media only screen and (${device.laptop}) {
        width: 90%;
    }
`;

export const LeftSideContainer = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Title = styled.div`
    color: white;
    font-size: 32px;
`;

export const Description = styled.div`
    color: white;
    font-size: 25px;
`;

export const RegisterLinkContainer = styled.span`
    color: orange;
    font-size: 20px;
    text-decoration: underline;
`;

export const RegisterLink = styled.span`
    cursor: pointer;
`;

export const LoginWindowContainer = styled.div`
    width: 400px;
    height: 300px;
    background: #101010;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #414141;
    overflow: hidden;

    @media only screen and (${device.laptop}) {
        width: 100%;
        height: 80%;
        margin-bottom: 150px;
    }
`;

export const InputContainer = styled.div`
    width: 90%;
    height: 70px;
`;

export const InputLabel = styled.div`
    height: 20px;
    color: white;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #313131;
    color: white;
    border: 1px solid orange;
    padding-left: 10px;
`;

export const Button = styled.button`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background: orange;

`;

export const ForgotPasswordContainer = styled.div`
    width: 100%;
    height: 100px;
    border-top: 1px solid #414141;
    position: relative;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ForgotPasswordLink = styled.div`
    text-decoration: underline;
    font-size: 15px;
    color: orange;
    cursor: pointer;
`;

export const Error = styled.span`
    color: red;
`;

export const ResetPasswordInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
`;

export const ResetPasswordInput = styled.input`
    height: 25px;
    width: 100%;
    border-radius: 5px;
    background: #313131;
    color: white;
    border: 1px solid orange;
    padding-left: 10px;
`;

export const ResetButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ResetPassword = styled.button`
    height: 25px;   
    width: 49%;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background: orange;
    margin-top: 3px;
    cursor: pointer;
`;

export const ResetPasswordInfo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #101010;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
`;
