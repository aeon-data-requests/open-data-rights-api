import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    background-color: #eee;
    flex: 0 0 60px;
    padding-left: 15px;

    a:not(.image) {
        border-bottom: 0;
        display: flex;
        align-items: center;
        padding: 0 15px;
        height: 100%;
        text-decoration: none;
        color: black;
        transition: border-color 0.2s ease;
        border-bottom: 2px solid transparent;
        background-color: transparent;
        font-size: 14px;
        cursor: pointer;

        &.active {
            background-color: #fbfbfb;
        }

        &:not(.active) {
            &:hover {
                border-color: black;
            }
        }
        
    }

    a.image {
        display: flex;
        align-items: center;
        border: 0;
        margin-left: 5px;
        margin-right: 30px;
    }
`;

const ContentContainer = styled.div`
    overflow: auto;
`;

const Image = styled.img`
    height: 30px;
`;

export default function Menu({ children }: PropsWithChildren<{}>) {
    return (
        <MenuContainer>
            <Container>
                <Link href="/">
                    <a className="image"><Image src="/logo.svg" alt="Open Data Request API Logo" /></a>
                </Link>
                <Link href="/whitepaper">
                    <a className="active">Whitepaper</a>
                </Link>
                <Link href="/api-docs">
                    <a>API Docs</a>
                </Link>
            </Container>
            <ContentContainer>
                {children}
            </ContentContainer>
        </MenuContainer>
    );
}