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

#### Fonts  
All fonts are from [Google Fonts](https://fonts.google.com/).  
- _Roboto_: Site main font, it was chosen for its clear and straight design.  
- _Piedra_: Used to create the logo, it was chosen for its uniqueness.

#### Icons  
All icons are from [Feather Icons](https://feathericons.com/).  
- _CRUD Operations_: Icons are used to manage database operations, with easily recognizable images often used on sites of this type. For example the magnifying glass for "search" and the trash can for "delete".
- _Navigations Buttons_: Icons have also been added to navigation buttons as visual clues to facilitate site navigation.
  
#### Colors  
Since the site is a collection of trailers, it mainly uses dull colors in order to emphasize the trailer previews. 
- _Off-Black (#2B2D2F)_: Used as background color for the trailer cards.
- _Off-White (#f5f5f5)_: Used as main text color.
- _LIght gray (#999)_: Used for input placeholders and icons.
- _Bright Orange (#D35400)_: The only bright color, is used to highlight key elements such as the logo and the buttons when the user hovers them with the mouse.  

## Features

### Existing Features  

#### Navbar
- _Website Logo_: If clicked, it takes the user back to the home page.
- _Search Bar_: Allows the user to search the database using movie titles as a search key.  
- _Add-trailer Button_: Manage the "Create" operation by loading the appropriate modal, The button text disappears if the user accesses the site from a smartphone in order to leave more space for the search bar.

#### Site Description
- _Introduction_: Briefly explain how the site works, the introduction text is slightly longer if the user accesses the site from a laptop or desktop in order to take advantage of the larger screen space.
- _How-to-url.gif_: For the less tech-savvy users, the most complex part of creating a trailer is to copy and paste the Youtube URL. This gif shows how to do it in a few simple steps.
  
#### Trailer Cards
The content of the database is shown to the user through a list of cards contained in a bootstrap grid, each card has the following content:
- _Movie Title_: In bold, in the card header.
- _Card Buttons_: Manage the "Update" and "Delete" operations by loading the respective modals.
- _Youtube Video_: Are responsive and automatically adapt to the screen size.
- _Movie Quote_: In italics, in the card footer

#### Add/Edit-Trailer Modal
The "Create" and "Update" operations are managed by the same modal whose attributes are modified by JS functions each time the user clicks on the appropriate button. This has 2 advantages:
- _Fast updating_: Adding or modifying a feature to the modals is a one-time operation, saving time and reducing the risk of making mistakes.
- _Consistency_: Since the two modals are almost identical, the user only needs to learn once to manage both operations (Create and Update).

The input fields present in the modal are the following:
- _Movie Title_: All the words of the inserted text are capitalized by the string.capwords() python method, returning an appropriate format for a movie title. This field can contain a maximum of 85 characters, and a message warns the user if the maximum number of characters has been reached.
- _Youtube URL_: The text entered in this field is validated to check that it has the structure of a youtube URL (non-Youtube URL are rejected). It's also automatically converted into its "embedded" version by a custom python function in order to be ready to be played on the trailer card.
- _Movie Quote_: The only field that can be left empty. It can contain a maximum of 170 characters, as for the title field, a message warns the user if the maximum number of characters has been reached.

#### Delete-Trailer Modal
    This modal is intended to prevent accidental deletion of trailers by asking the user for confirmation before proceeding.

#### Navigation Buttons
- _Load-more-trailer Button_: Only 12 trailers are loaded when the user lands on the page, each time the user clicks on this button another 12 are loaded. This solution was preferred to pagination to make interaction with the site easier and make the interface cleaner.
- _Return-to-top Button_: Appears as soon as the user starts to scroll down. Clicking this button return the user at the the top of the page. This feature has been added to quickly access the navbar, which is not fixed at the top of the page and consequently is hidden when the user scrolls down.
	
#### 404 Page
- _Customized 404 Message_: The '0' in 404 is replaced with a film reel image, in keeping with the rest of the site.
- _Return-to-home Button_: The only interactive element of this page.