# coffeeshop
Coffeeshop project has 2 modules. `coffeeshop/src` contains the backend module, developed in `Spring Boot` (with JPA\Hibernate MYSQL). `coffeeshop/webapp` contains the `Angular` front end code.

## Concepts Used
- JWT Authentication Technique used with Stateless session
- Angular AuthGaurd and Interceptors has been effectively used

## Pre Requisites
- Java 8 installed
- MySQL installed in local or a Docker container also suffice. 
- Please makesure that you create a DB named `coffeedb` in that MySQL instance
- Angular CLI latest version installed
- Latest Maven installed

## Steps for setup
- Clone the repository to your local
- Setup MySQL URL, Credentials in `Application.properties` file
- Navigate to `coffeeshop` folder and run following commands,
    - `mvn clean install`
    - `java -jar target/<generated-jarname>.jar`
 - In another cmd prompt, Navigate to `coffeeshop\webapp` folder and run following command
   - `ng serve`
 - Check the url `http://localhost`
 
 ## To be worked On(When time permits)
 - Develop a Docker Compose script for `openjdk` and `MySQL` containers and automate the aforementioned flows
 - Add more error validations in Forms and make it more User Friendly
 - Add Shofisticated Exception Handling and Logging to the Backend Module
 - Work on implementing more sofisticated Authentication fascilities viz.. `OAuth2.0`, `SAML`also why not `LDAP`
