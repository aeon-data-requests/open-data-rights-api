# API Formatting

This page describes the structure of the public API that must be exposed by a Open Data Rights-compliant API. The API endpoint is described in the [Open API 3 standard in the GitHub repository](https://github.com/aeon-data-requests/open-data-rights-api/blob/main/spec/openapi.json). Please find a detailed overview of responses, parameters and endpoint in the [API Endpoint Documentation](https://bump.sh/doc/open-data-rights-api).

The API consists is REST-based, and can be operated language-agnostically. All responses are either in `application/json` , `text/plain` or `application/zip` for specialised endpoints. Any POST parameters must always be supplied in a `application/json` request body. Requests which require authentication must follow OAuth standards, with use of a `Bearer`-token on the `Authorization` header.

### Authentication

Authentication for this API is OAuth based, and are described more intricately on the _Authentication page:_

{% page-ref page="authentication.md" %}

### [Data Endpoint](https://bump.sh/doc/open-data-rights-api#endpoint-data)

This endpoint describes the data practices of the organisation, as well as how those practices impact the user. The inner workings of the data endpoint are documented on the _Describing Data_ page:

{% page-ref page="describing-data.md" %}

### [Settings Endpoint](https://bump.sh/doc/open-data-rights-api#endpoint-settings)

The settings endpoint describes the operation criteria for the specific instance of the Open Data Rights API. The available parameters, along with implementation instructions are available as part of the API Endpoint documentation.

### [Requests Endpoint](https://bump.sh/doc/open-data-rights-api#endpoint-requests)

This endpoint describes currently ongoing requests, how to request a new archive, archive status and archive download when the request is complete. As part of a new request a third party may supply a JSON array with all `context`-types that are requested from the organisation for the user. If no request body is supply, all processed data types are requested for the authenticated user.



