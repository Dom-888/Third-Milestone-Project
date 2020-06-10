# [Open Trailer](https://open-trailer.herokuapp.com/)

An open database for movie trailers.

# --> Image here <--

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User Goals**](#user-goals)
    - [**Developer Goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design Choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)
    - [**Removed Features**](#removed-features)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Tested Devices**](#tested-devices)
    - [**Laptop Testing**](#laptop-testing)
    - [**Smartphone Testing**](#smartphone-testing)
    - [**Validation Services**](#validation-services)
    - [**Bugs Discovered**](#bugs-discovered)

6. [**Deployment**](#deployment)
    - [**How to run this project locally**](#how-to-run-this-project-locally)

7. [**Credits**](#credits)
    - [**Code**](#code)
    - [**Media**](#media)
    - [**Acknowledgments**](#acknowledgments)

8. [**Disclaimer**](#disclaimer)

## UX

### User Goals

The main target audience for Open Trailer are english speaking people with a passion for movies.

User goals are:

- Find a new movie to watch.
- Rediscover a movie that I had forgotten.
- Share my favorite movies with people with my same passion.
- Update trailers already present in the database by adding a quote or choosing a higher quality video.
- Eliminate incorrect or offensive content.

Open Trailer meets these needs by:

- Allowing the user to easily browse the database, by searching for a movie title or simply scrolling down the page.
- Being easy to use, as the operations of creating, modifying, and eliminating are all handled in a very similar way so that the user has to learn how to do it only once.
- Having a clear and elegant user interface that allows a smooth navigation flow.

### Developer Goals

- Improve the ability to create responsive design websites through the mobile-first approach.  
- Improve the ability to make a website interactive using JavaScript and jQuery.  
- Learn how to create and handle NoSQL databases.
- Learn how to connect a database to websites using Python and Flask.  
- Add a functional and visually attractive website to the developer portfolio.

### User Stories  

### Design Choices  

- **Fonts**  
All fonts are from [Google Fonts](https://fonts.google.com/).  
    - _Roboto_: Site main font, it was chosen for its clear and straight design.  
    - _Piedra_: Used to create the logo, it was chosen for its uniqueness.

- **Icons**  
All icons are from [Feather Icons](https://feathericons.com/).  
    - _CRUD Operations_: Icons are used to manage database operations with easily recognizable images often used on sites of this type. For example the magnifying glass for "search" and the trash can for "delete".
	- _Navigations Buttons_: Icons have also been added to navigation buttons as a visual clue to facilitate site navigation.
  
- **Colors**  
Since the site is a collection of trailers, it mainly uses dull colors in order to emphasize the trailer previews. 
    - _Off-Black (#2B2D2F)_: Used as the background color for the trailer cards.
    - _Off-White (#f5f5f5)_: Used as the main text color.
	-_LIght Gray (#999)_: Used for input placeholders and icons.
    -_Bright Orange (#D35400)_: The only bright color, is used to highlight key elements such as the logo and the buttons when the user hovers them with the mouse.  