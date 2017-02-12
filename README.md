# Timestamp microservice
```
User stories:
1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2) If it does, it returns both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns null for those properties.
```

### Example usage:

```
https://microservice-timestampz.herokuapp.com/api/v1/December%2015,%202015
https://microservice-timestampz.herokuapp.com/api/v1/1450137600
```

### Example output:

```
{ "status": "OK", "unix": 1450137600, "natural": "December 15, 2015" }
```

# How to install
 - Install NodeJS and NPM
 
  [https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)
  
- Clone the project

  ```
  git clone https://github.com/melzareix/timestamp-microservice.git timestamp-ms
  ```
- Install Dependencies

  ```
  cd timestamp-ms
  npm install
  ```
- Run the project

  ```
    npm start
  ```
