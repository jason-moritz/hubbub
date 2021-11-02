# Hubbub README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Hubbub** is a blog app where users can post their thoughts on life and the world and interact with one another. Users are able to comment and give their thoughts on other users' posts, as well as like, upvote, and downvote posts._


<br>

## MVP

_Users are able to sign up/sign in for an account and receive a JWT. Once signed in, they will be able to read, create, edit, and delete their own posts, and comment on other users' posts._

<br>

### Goals

- _Create models, routes, and controllers for users, posts, and comments using Ruby on Rails_
- _Authentication for users and JWT creation_
- _Connect to a React front-end that displays user info, posts, and comments_
- _Style using Material UI_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| Create React App | _Used to create front-end of app_          |
| React Router Dom | _Route, Link, useParams, useHistory_       |
|      Axios       | _Used to make and send front-end requests to Rails back-end_ |
|   Material-UI    | _Used styled components and library to style front-end_ |
|  Ruby on Rails   | _Used to create back-end logic and database_ |
|       Cors       | _Used to connect front-end requests to back-end server logic_ |
|      Bcrypt      | _Security measure to hash passwords and encode/decode JWT payloads_ |
|       JWT        | _Used to create JSON web tokens for authenticated users_ |
|      Faker       | _Used to create seed data during development_ |
|       Pry        | _Used to create a cleaner display in rails console during development_ |

<br>

### Client (Front End)

#### Wireframes

[Wireframe Link](https://www.figma.com/file/ji0NXEE6NgiOgYCkHKjSij/hubbub?node-id=14%3A581 "wireframe link")

- Mobile - Home Screen

![Mobile Home](assets/wireframe/Mobile_Home.png?raw=true)

- Mobile - Sign Up

![Mobile SignUp](assets/wireframe/Mobile_SignUp.png?raw=true)

- Mobile - View Posts

![Mobile Posts](assets/wireframe/Mobile_Posts.png?raw=true)

- Mobile - View Post With Comments

![Mobile Post](assets/wireframe/Mobile_Post.png?raw=true)

- Mobile - Create Post

![Mobile Create Post](assets/wireframe/Mobile_CreatePost.png?raw=true)

- Mobile - Create Comment

![Mobile Create Comment](assets/wireframe/Mobile_CreateComment.png?raw=true)

#### Component Tree

[Component Tree Link](https://whimsical.com/hubbub-component-hierarchy-BZsJ6GimeVKv5PrkmAwgax "Component Tree Link")

![Component Tree](assets/component_hierarchy/Component_Hierarchy.png?raw=true)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ helper/
      |__ sort.js
      |__ search.js
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ PostCard.jsx
      |__ CommentCard.jsx
      |__ TrendingCard.jsx
|__ services/
      |__ api-config.js
      |__ users.js
      |__ posts.js
|__ layout/
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ SignUp.jsx
      |__ SignIn.jsx
      |__ Posts.jsx
      |__ PostDetail.jsx
      |__ PostCreate.jsx
      |__ PostEdit.jsx
      |__ CommentCreate.jsx
      |__ CommentEdit.jsx
|__ containers/
      |__ PostsContainer.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Define models       |    H     |     1 hr      |     2 hrs     |    3 hrs    |
| Define controllers  |    H     |     2 hr      |     1 hrs     |     TBD     |
| Define routes       |    H     |     1 hr      |     2 hrs     |    3 hrs    |
| Define screens logic|    H     |     6 hrs      |     1 hrs     |     TBD     |
| Define component logic    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Define services logic |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Define container logic    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Define layout logic |    H     |     1 hr      |     1 hrs     |     TBD     |
| Base CSS with MUI   |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Define helper logic |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Define 'friend' logic    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Advanced styling    |    H     |     20 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     47 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD](assets/erd/erd.png)
<br>

***

## Post-MVP

- _Add likes, upvotes, and downvotes for comments and posts_
- _Allow users to send friend requests and accept friend requests_
- _Allow users to upload profile pics from local directories_
- _Add search bar that filters posts_
- _Add sort options to search posts by category_

<br>
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
