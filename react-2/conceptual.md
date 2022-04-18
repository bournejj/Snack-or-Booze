### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

Client-side routing handles mapping between URL bar and page user sees via browser rather than via server.

- What is a single page application?

Sites that exclusively use client-side routing are single-page applications.

- What are some differences between client side and server side routing?

Client-side Routing

Potentially improved UI/UX
More modern architecture
Potentially worse SEO

Server-side Routing

Page reload with every URL change
More traditional architecture
Potentially better SEO

- What are two ways of handling redirects with React Router? When would you use each?

In React Router, there are two ways to redirect:
Using the <Redirect> component
Useful for “you shouldn’t have gotten here, go here instead”
Calling .push method on the history object
Useful for “you finished this, now go here”


- What are two different ways to handle page-not-found user experiences using React Router? 

 redirect inside of a switch component 
 make a singular route for a 404

- How do you grab URL parameters from within a component using React Router?

with the useParams method

- What is context in React? When would you use it?

Universal data across your application
Data accessible across all components

Why is it useful?
Prop drilling / tunneling
Less repetition
Useful for global themes, shared data


- Describe some differences between class-based components and function
  components in React.

  A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components

- What are some of the problems that hooks were designed to solve?

the use of 
Functional Components
class componenets
to create reuseable code that can be used across you app easily
