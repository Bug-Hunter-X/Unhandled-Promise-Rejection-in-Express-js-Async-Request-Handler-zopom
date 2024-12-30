# Unhandled Promise Rejection in Express.js Async Request Handler

This repository demonstrates a common error in Express.js applications where asynchronous operations within request handlers throw errors that are not properly caught, leading to unhandled promise rejections.

## Bug Description
The `bug.js` file contains an Express.js server with an asynchronous request handler.  This handler performs an asynchronous operation (`doSomethingAsync`) that simulates a failure by throwing an error. The error handling within the `.catch()` block only logs the error but fails to properly end the response cycle, resulting in an unhandled promise rejection.

## Solution
The `bugSolution.js` file provides a corrected version of the server. The solution ensures that the response is properly handled, even if an error occurs within the asynchronous operation, preventing unhandled promise rejections.

## How to Reproduce the Bug
1.  Clone this repository.
2.  Run `node bug.js`.
3.  Send a request to `http://localhost:3000/`.
4. Observe the error message in the console.  The server might crash or become unresponsive.

## How to Run the Solution
1.  Run `node bugSolution.js`.
2.  Send a request to `http://localhost:3000/`. 
3.  Observe that the server responds with a 500 error code and an appropriate error message.