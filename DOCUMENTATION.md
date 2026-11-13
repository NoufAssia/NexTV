# What i learned in this project:

# JavaScript Concepts

## 1. Functions and Array Methods

- Arrow functions

  A shorter syntax for writing functions.

- Callback function

  A function passed to another function to execute later, often when an event happens.

- forEach()

  Executes a callback function for every element in an array.

- map()

  Creates a new array by transforming every element of an existing array.

- filter()

  Creates a new array containing only elements that satisfy a condition.

- find()

  Returns the first array element that matches a condition.

- includes()

  Checks whether a string or array contains a particular value.

- Set

  Stores unique values, preventing duplicates.

- Spread operator

  Expands iterable values; used to convert a Set into an array.

- String()

  Converts a value into a string, allowing string methods to be used on it.

## 2. DOM Manipulation and Element Properties

- classList.toggle()

  Adds a class if absent or removes it if already present.

- classList.contains()

  Checks whether an element has a specific CSS class.

- setAttribute() / properties

  Changes element attributes or properties, such as image `src` and `alt`.

- dataset

  Accesses custom HTML attributes through JavaScript.

## 3. Events and Event Handling

- Event object

  Contains information about an event, such as the element that triggered it.

- event.target

  Identifies the deepest element where the event originally occurred.

- event.target.closest()

  Finds the nearest matching element, starting from the clicked element and moving up the DOM tree.

- event.stopPropagation()

  Prevents an event from continuing to propagate to parent elements.

- Event delegation

  Attaches one event listener to a parent instead of attaching separate listeners to every child.

## 4. Asynchronous JavaScript and API

- API

  An interface that allows your application to communicate with an external service and retrieve data.

- fetch()

  Sends an HTTP request to retrieve data from an API.

- Promise

  An object representing the eventual success or failure of an asynchronous operation.

- async

  Declares a function that always returns a Promise.

- await

  Pauses execution inside an async function until a Promise settles.

- HTTP response

  Contains information returned by the server, including status and response data.

- response.status

  Returns the HTTP status code, such as 200, 404, or 500.

- response.ok

  Returns `true` when the HTTP status is in the 200–299 range.

- response.json()

  Reads the response body and parses JSON into JavaScript data.

## 5. Error Handling and Debugging

- try / catch

  Handles errors that occur while executing code.

- throw new Error()

  Creates and throws a custom error with a descriptive message.

- Error object

  Represents an error and can contain a descriptive message.

- error.message

  Retrieves the descriptive message associated with an error.

- finally

  Executes code after `try` and `catch`, regardless of success or failure.

- Error handling

  Prevents unexpected failures from stopping the application without a meaningful response.

- Error propagation

  Allows an error to travel from one function to another until it is handled.

- console.log()

  Helps inspect variables, values, and the execution flow.

- console.error()

  Helps identify and inspect errors during development.

- HTTP status codes

  Indicate the result of an HTTP request, such as success (200), not found (404), or server error (500).

## 6. JavaScript Modules and Code Organization

- ES Modules

  Allow JavaScript code to be separated into different files to organize the project.

- export

  Makes a function or variable available to other JavaScript files.

- import

  Allows one JavaScript file to use functions or variables exported by another file.

- Named exports

  Export specific functions or variables using their names.

- Module scope

  Variables declared inside a module are not automatically accessible from other modules.

- Separation of concerns

  Organizes the application into files, each responsible for a specific task.

## 7. JSON and Data Exchange

- JSON

  A text-based format used to exchange structured data between applications.

- JSON parsing

  Converts JSON text into JavaScript values, such as objects and arrays.

## 8. Date and Time

- Date

  JavaScript object used to work with dates and times.

- new Date()

  Creates a Date object representing the current date and time.

- toLocaleTimeString()

  Converts a date's time into a readable format based on a specified locale.

- toLocaleDateString()

  Converts a date into a readable date format based on a specified locale.

- Options object

  An object passed to a method to customize its behavior, such as choosing the hour and minute format.

- setInterval()

  Repeatedly executes a function after a specified time interval, measured in milliseconds.

## 9. Browser and Window Objects

- window

  Represents the browser window and provides access to browser-related functionality.

- window\.location

  Provides information about the current page URL and navigation.

- window\.location.reload()

  Reloads the current page, allowing the application to restart its initialization process.

- setInterval()

  Browser timing function used to execute code repeatedly without manually calling it.