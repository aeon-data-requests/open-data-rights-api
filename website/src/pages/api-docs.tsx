import styled from 'styled-components';
import { MenuItem, RedocStandalone } from 'redoc';
import spec from '../../../spec/openapi.json';

const StyledRedoc = styled.div`
    font-size: inherit;

    .menu-content {
        input[type="text"] {
            font-weight: normal;
            font-size: inherit;
            border: 0;
            background-color: #eee;
            border-radius: 4px;
            padding: 10px 15px 10px 30px;
            margin: 0;
            width: 100%;
        }

        div[role="search"] {
            margin: 25px 10px 0 10px;

            svg.search-icon {
                margin-top: 6px;
                left: 20px;   

                path {
                    fill: #aaa;
                }
            }

            i {
                right: 16px;
                margin-top: 6px;
            }
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
                font-weight: normal;
                font-size: 1em;
                padding: 10px 15px;

                &:hover:not(.react-tabs__tab--selected) {
                    background-color: #e6e6e6;
                }

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

        .security-details {
            tr {
                background-color: transparent;
                border-top: 0;

                &:first-child {
                    border-bottom: 1px solid #eee;

                }
            }

            td,th {
                border: 0;
                padding: 13px 13px 13px 0;
            }
        }

        h5 {
            text-transform: capitalize;
        }

        .redoc-json {
            .property.token.string {
                color: black;
            }
            .token.boolean {
                color: #0000FF;
            }
            .token.string {
                color: #4000a4;
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
                            border: {
                                light: "#f6f6f6",
                                dark: "#eee",
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