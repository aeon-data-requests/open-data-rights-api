# API Extensions

At this point in time, the API is built around information transparency and data access rights. Yet, the GDPR is broader and there are more data rights. Notwithstanding any changes in scope, or incorporation of other aspects \(such as a front-end or UX\), there are a number of areas which are ripe for consideration in the current structure of the Open Data Rights API. 

### Requests for erasure and rectification

Next to right of access, citizens enjoy other data rights. Most importantly, when citizens have inspected their data, they have the right to have some \(or all\) of it erased. Additionally, when their informatino is incorrect or incomplete, they have the right to rectify that information. While the current API design includes indication for whether this right can be exercised for specific types of data, it offers no infrastructure for carrying out those changes.

One could imagine a set of endpoints that build upon `/requests`, that incorporate requests concerning these rights as well. Building these on top of the current infrastructure that describes data semantics is relatively trivial. 

Meanwhile, operating a one-way organisation-wide infrastructure that give users access to all their information is one thing, making that system able to exercise control over that data is another altogether. Organisational practices must be well-considered when incorporating these rights into the Open Data Rights API. A wide range of implementations is viable concerning this right. 

### Restriction of Processing

In addition to erasure, citizens may demand a restriction of the processing of some of their data, based on a number of grounds. While these are similarly easy to implement at face value, the particular gorunds on which they rest are more intricate. This process should be well-considered from a legal standpoint to ensure feasibility and operatability for both citizens and organisations alike.

### Third Party Transfer

[The GDPR contains a full chapter](https://gdpr-info.eu/chapter-5/) addressing transfers of data to third parties or across international borders. Many provisions and conditions apply to this practice, which should be available and accountable to citizens as well. The Open Data Rights API should facilitate and standardise how this practice can be shared with end-users.

Moreover, the current landscape of data processors and controllers can be quite intricate when organisations reach a large scale. Standardisation could be helpful to make practices between controllers and data processors more easy, all the while making data more accessible for citizens.



