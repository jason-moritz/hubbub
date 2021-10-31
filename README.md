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

- Mobile Landing

![Mobile Homepage](https://www.figma.com/file/ji0NXEE6NgiOgYCkHKjSij/hubbub?node-id=14%3A581 "Mobile homepage")

- Mobile Sign Up

[Mobile Signup](https://www.figma.com/file/ji0NXEE6NgiOgYCkHKjSij/hubbub?node-id=14%3A320)


![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
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
