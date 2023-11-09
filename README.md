<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Path Findr" />

  &#xa0;

  <!-- <a href="https://pathfindr.netlify.app">Demo</a> -->
</div>

<h1 align="center">Path Findr</h1>

<p align="center">
  <!-- <img alt="Github top language" src="https://img.shields.io/github/languages/top/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8">

  <!-- <img alt="Github language count" src="https://img.shields.io/github/languages/count/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8"> -->

  <!-- <img alt="Repository size" src="https://img.shields.io/github/repo-size/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8"> -->

  <!-- <img alt="License" src="https://img.shields.io/github/license/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8"> --> 

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/path-findr?color=56BEB8" /> -->
</p>

<!-- Status -->
<h5 align center>
	# Entire Workflow

1. **Define Career Fields and Scoring System**:
    - First, define a list of career fields you want to recommend.
    - Assign a score to each career field, typically starting at 0 for all fields.
2. **Survey Questions**:
    - Create a set of survey questions, each with multiple-choice answers related to the career fields.
    - Each answer choice should be associated with one or more career fields, indicating which field(s) it corresponds to.
3. **Survey and User Authentication**:
    - Continue using 3ga’s Java components for the survey and user authentication.
    - Ensure that user data, including survey responses and user authentication details, is stored in the MySQL database.
4. **Node.js Application**:
    - Our Node.js application can serve as the front end for displaying personalized recommendations, mentor selection, and real-time chat.
5. **Communication Between Java and Node.js**:
    - To pass data between your Java application and Node.js application, we can expose RESTful API endpoints in our Node.js application.
    - Then our Java application can make HTTP requests to these endpoints to retrieve or send data.
    
    // Get personalized recommendations for a user
    app.get('/api/recommendations/:userId', recommendationsController.getRecommendations);
    
    // Get mentors for a recommended career field
    app.get('/api/mentors/:field', mentorsController.getMentorsByField);
    
6. **Personalized Recommendations**:
    - When a user logs in to the Node.js application, we can make an API call to the Java backend to retrieve the personalized career recommendations based on the user's survey responses. Display these recommendations to the user in the Node.js frontend.
7. **Mentor Selection**:
    - Retrieve mentor data from our MySQL database in 3ga’s Java application.
    - Expose an API endpoint in our Node.js application that allows the Java application to fetch mentors based on the recommended career field. Display this list in the Node.js frontend.
8. **Real-Time Chat**:
    - Implement the real-time chat functionality as described earlier in the Node.js application.
    - When a student selects a mentor to chat with, send a request to the Java backend to initiate the chat session. The Java backend can communicate with the Node.js application to set up the WebSocket connection.
9. **Testing and Deployment**:
    - Test the integrated system, ensuring that data is passed correctly between the Java and Node.js components.
    - Deploy the combined application to a hosting service.
10. **User Support and Feedback**:
    - Offer user support and gather feedback from students to enhance the recommendation and chat system.
</h5>
 <h4 align="center"> 
	🚧  Path Findr 🚀 Under construction...  🚧
</h4>  
<!-- git config --global user.email "you@example.com" -->
<!-- git config --global user.name "Your Name" -->

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Authors</a>
</p>

<br>

## :dart: About ##

Describe your project

## :sparkles: Features ##

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies ##

The following tools were used in this project:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/{{YOUR_GITHUB_USERNAME}}/path-findr

# Access
$ cd path-findr

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Team CT</a>

&#xa0;

<a href="#top">Back to top</a>
