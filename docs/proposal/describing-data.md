# Describing Data

A large aspect of both GDPR compliance and user understanding of data being processed comes down to the question what _data types_ are being processed. With this being a central part, the Open Data Rights API needs to define semantics describing data types as well. Fortunately, major strides have already been made in the department of data semantics in the form of [schema.org](https://schema.org/) and [JSON-LD](https://json-ld.org/). The Open Data Rights API adopts both for the purposes of providing data semantics.

These semantics are broken up between how data processing is described, as well as how the eventual data is described in a data archive.

### Describing data processing

Data is processing is described as part of the `/data` and `/data/me` endpoints. The former endpoint describes the data processing practices for the organisation at large. Both endpoints are described in detail in the [API documentation](https://api.open-data-rights.org/#endpoint-data).

For the organisational practices, all possibly processed data types must be listed. For each data type, organisations must indicate the following:

* What schema.org / custom context the type is based on
* The processing ground for this type of information
* Whether the data may be erased by the user
* Whether the data may be rectified by the user
* A human-readable description for the data type.

Lastly, the `/data/me` endpoint constitutes an array of all context-based data types that are being \(possibly\) being processed in connection with the authenticated user.

### Describing data in archives

When data is eventually exported using the API,  the data must be made available in a particular format. In the case of the Open Data Rights API, this data is formatted using `JSON-LD` and `schema.org` definitions. Organisations may create many files containing data, as long as data is always formatted using `JSON-LD`. Additional file types, such as images, videos and other non-structured media, must be included as well. Any included non-JSON-LD files must be referenced from at least a single JSON-LD file. The archive must be ZIP file. 

The archive may follow a self-defined internal structure, except for a a folder at the root level with the `open-data-rights-api` name. This folder contains another folder called `schemas`, in which each JSON-LD `@context` property that is used is archived as well. In this folder, each schema is contained in a seperate JSON file, of which the content exhaustively describes the schema. Also, two files called `data.json` and `data-me.json` describe the output for the respective endpoints at the time of archive creation.

### 

