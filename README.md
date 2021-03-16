# Calculator (Milestone 2)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step Completed


### Prepare the directory structure

- Create a components directory in the src folder.

- Create four files in there, each one representing one React component. For instance, the App component should be placed in src/components/App.js.

- Components folder containing a folder for every component including js and css file for that specific component

### Implement the App component

- App should render the Display and ButtonPanel component. HINT: at this moment App component is a stateless component as it is not fully implemented yet. In order to avoid linter errors remember to make it a functional component..

- REMEMBER! JSX will not compile unless your function returns a single element. Wrap the children components with React.Fragment as this let you group the children components without adding extra nodes to the DOM.


### Implement the Display component

- It should accept the result of the calculation as an incoming prop.

- The result prop should be a String.

- The default value of the result prop should be 0.


### Implement the Button component

- It should accept a button name as a prop.

- The button name prop should be a String.


### Implement the ButtonPanel component

- It should render the calculator panel with all the buttons in the following groups: (use divs to divide buttons into groups)

- Group 1: AC, +/-, %, ÷

- Group 2: 7, 8, 9, X

- Group 3: 4, 5, 6, -

- Group 4: 1, 2, 3, +

- Group 5: 0, ., =