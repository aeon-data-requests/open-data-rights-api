import styled from 'styled-components';
import { MenuItem, RedocStandalone } from 'redoc';
import spec from '../../../spec/openapi.json';

const StyledRedoc = styled.div`
    font-size: inherit;

    .menu-content {
        input[type="text"] {
            margin-top: 25px;
            font-weight: normal;
            font-size: inherit;
        }

        label.-depth2 {
            align-items: center;
            flex-direction: row-reverse;
        }

        .operation-type {
            font-family: "Inter";
            font-size: 0.8em;
            width: auto;
            display: block;
            padding: 13px 10px;
            border-radius: 4px;
            display: flex;
            font-weight: 700;
            align-items: center;
            margin-right: 0;
            margin-left: 10px;
        }
    }

    .api-content {
        h1 {
            color: inherit;
            font-size: 2em;
            letter-spacing: -0.8px;
        }

        span.http-verb {
            border-radius: 4px;
            font-weight: 700;
        }

        .react-tabs__tab-panel {
            background-color: #eee;
        }

        .react-tabs__tab-list {
            margin: 0;

            > li {
                border-radius: 0;
                border: 0;
                margin: 0;
                color: #666;
                background-color: transparent;

                &.react-tabs__tab--selected {
                    background-color: #eee;
                    color: black;
                }
            }
        }

        & > div::after {
            border: 0;
        }

        table {
            td {
                border-color: #ddd;
                /* background-image: none; */

                & > span:first-child {
                    &::before {
                        background-color: #ddd;
                    }
                    &::after {
                        display: none;
                    }
                }
            }
        }

    }

    a {
        border-bottom: none;
    }
`;

export default function ApiDocs() {
    return (
        <StyledRedoc>
            <RedocStandalone
                spec={spec}
                options={{
                    // scrollYOffset: 20,
                    theme: {
                        colors: {
                            primary: {
                                main: "#0000FF",
                            },
                            success: {
                                main: "#0000FF"
                            },
                            warning: {
                                main: "#e5b620"
                            },
                            error: {
                                main: "#e8321f"
                            },
                            text: {
                                primary: "#000000"
                            },    
                            http: {
                                get: '#0000FF',
                                post: '#4000a4',
                                delete: '#e8321f',
                                // put: '#95507c',
                                // options: '#947014',
                                // patch: '#bf581d',
                                // basic: '#707070',
                                // link: '#07818F',
                                // head: '#A23DAD',
                            },
                        },
                        typography: {
                            fontFamily: 'IBM Plex Sans',
                            headings: {
                                fontFamily: 'Inter',
                                fontWeight: '600',
                            },
                            code: {
                                fontFamily: 'IBM Plex Mono',
                                color: "#333",
                            },
                        },
                        sidebar: {
                            backgroundColor: "#fbfbfb",
                            textColor: "#000000",
                        },
                        rightPanel: {
                            backgroundColor: "#f6f6f6",
                            textColor: "#000000"
                        }
                    }
                }}
            />
        </StyledRedoc>
    );
}