import styled, { css } from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media(max-width: 1200px) {
        padding: 0 12px;
    }
`;

export const TwoPanel = styled.div<{ inverse?: boolean, alignLeft?: boolean }>`
    display: flex;
    margin: 144px 0;
    flex-direction: ${props => props.inverse ? 'row-reverse' : 'row'};
    & > * {
        flex: 1 1 0;
        margin: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        ${props => !props.alignLeft && css`
            &:last-child {
                justify-self: flex-end;
                text-align: right;
            }
        `}
    }
    h1, p, strong {
        width: 100%;
    }
    @media(max-width: 800px) {
        flex-direction: column-reverse;
        & > * {
            flex: 1;
        }
        & > :last-child {
            align-self: flex-start;
            text-align: left;
        }
    }
`;

export default Container;