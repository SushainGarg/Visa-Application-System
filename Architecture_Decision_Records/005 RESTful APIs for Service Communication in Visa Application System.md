---
status: "accepted"
date: {2024-01-06}
deciders: {Sushain Garg}
---
# RESTful APIs for Service Communication in Visa Application System

## Context and Problem Statement

The Visa Application System, built using a microservices architecture, requires a standardized and efficient approach for communication between its independent services and the frontend application. The chosen communication mechanism should promote interoperability, ease of integration, and maintainability.

## Decision Drivers

* Standardization: Adopt a widely-used and well-understood communication protocol to ensure compatibility and interoperability between services and the frontend.
* Simplicity: Simplify the integration process for developers and reduce the learning curve for new team members.
* Flexibility: Support various data exchange formats (JSON, XML) and allow for future extensions or modifications to the API endpoints.
* Performance: Provide efficient data transfer mechanisms for optimal system responsiveness.
* Security: Implement robust security measures to protect sensitive data during communication.

## Considered Options

* RESTful APIs
* GraphQL
* Messaging queues (RabbitMQ, Kafka)

## Decision Outcome

Chosen option: "RESTful APIs", because
RESTful APIs offer a mature, standardized, and widely-adopted approach for service communication, aligning with the project's emphasis on interoperability, ease of integration, and maintainability, while also providing adequate performance and security capabilities for the system's needs.

### Consequences

## Good

* Widely adopted standards for interoperability and developer familiarity.
* Clear separation of concerns between client and server.
* Leverages HTTP for transport, authentication, and caching mechanisms.
* Supports various data formats and content negotiation.
* Ease of testing and debugging individual services.

## Bad

* Need for careful API design to avoid over-fetching or under-fetching of data.
* Potential performance overhead for chatty interactions or large payloads.
* May not be ideal for real-time updates or complex data relationships.


### Confirmation

Compliance with this ADR will be confirmed through API documentation reviews, network traffic analysis, and code reviews to ensure adherence to RESTful API principles and best practices.
