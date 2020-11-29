---
description: 'TL;DR: OAuth 2'
---

# Authentication

The first step towards exercising data rights is ascertaining the identity of the user. The Open Data Rights API builds upon the foundations in authentication that are laid by OAuth 2.0.  

Typically in OAuth, an organisation has a process in which clients that are able to make use of the OAuth endpoint are checked and granted access. However, in the Open Data Rights API, **any third party is allowed to authenticate users for making data requests**. Hence, rather than each implementer of the API requesting a client, an organisation must create a \(hardcoded\) client that can solely be used to authenticate any Open Data Rights API endpoints. In the authentication flow, the organisations may refer to the Open Data Rights API in name, as well as use its logo in connection tot his public Client ID.

For authentication, organisations must use the `Authorization Code` flow with support for `Proof Key for Code Exchange (PKCE)`, as described in [RFC7636](https://tools.ietf.org/html/rfc7636). The endpoint for the URL and the Open Data Rights Client ID must be made public using the `/settings` endpoint. The OAuth scope that enables all Open Data Rights endpoints must be named `open-data-request-api`.

Organisations are free to establish seperate OAuth servers for Open Data Rights API purposes. Alternatively, they may re-use existing OAuth servers in connection to the Open Data Rights API. 

In case of seperate OAuth server, organisations specify a `oAuthUrl` that refers to the base endpoint for this OAuth server. Implementing software then appends the `/authorization` and `/oauth/token` endpoints to the base OAuth URL. 

In the latter case, organisations may specify a `oAuthUrl` that contains a metadata endpoint that specifies endpoints for the Open Data Rights API to use. This URL must refer to a [RFC8414](https://tools.ietf.org/html/rfc8414)-compliant metadata specification for OAuth. Do note that if you are implementing an extending service, the OAuth server must support the `Authorization Code (PKCE)` flow for the `open-data-request-api` scope.





