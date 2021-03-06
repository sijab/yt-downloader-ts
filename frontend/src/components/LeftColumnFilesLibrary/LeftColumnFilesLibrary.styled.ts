import styled, { css } from 'styled-components';
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap'
import { device } from '../../helper/deviceSize';

export const Container = styled.div<{visible: boolean}>`
    position: fixed;
    top: 0;
    left: ${props => props.visible ? '0%' : '-40%'};
    width: 30%;
    height: 100%;
    background: #1E1E1E;
    z-index: 10;
    overflow: auto;
    transition: all 1s ease;

    @media only screen and (${device.laptop}) {
        width: 85%;
        left: ${props => props.visible ? '0%' : '-85%'};
    }
`;

export const ArrowIconContainer = styled.div<{visible: boolean}>`
    position: fixed;
    left: ${props => props.visible ? '30%' : '0%'};
    width: 50px;
    height: 50px;
    background: #1E1E1E;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: 5%;
    transform: translate(0, -50%);
    transition: all .5s ease;
    cursor: pointer;
`;

const iconStyle = css`
    width: 30px;
    height: 30px;
    color: white;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`${iconStyle}`;
export const ArrowRightIcon = styled(ArrowRight)`${iconStyle}`;

export const ItemContainer = styled.div`
    width: 100%;
    height: 300vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
