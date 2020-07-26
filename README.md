# [Open Trailer](https://open-trailer.herokuapp.com/)

An open database for movie trailers, built with Flask.

!["Responsive Representation"](static/images/responsive-representation.png "Responsive Representation")

## Table of Contents
1. [**UX**](#ux)
    - [**User Goals**](#user-goals)
    - [**Developer Goals**](#developer-goals)
    - [**User Stories**](#user-stories)
    - [**Design Choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Tested Devices**](#tested-devices)
    - [**Simulated Devices**](#simulated-devices)
    - [**Manual Testing**](#manual-testing)
    - [**Validation Services**](#validation-services)
    - [**Bugs Discovered**](#bugs-discovered)

### 

6. [**Deployment**](#deployment)
    - [**How to run this project locally**](#how-to-run-this-project-locally)
    - [**Heroku Deployment**](#heroku-deployment)

7. [**Credits**](#credits)
    - [**Code**](#code)
    - [**Media**](#media)
    - [**Acknowledgments**](#acknowledgments)

8. [**Disclaimer**](#disclaimer)

## UX

### User Goals

The main target audience for Open Trailer are English speaking people with a passion for movies.

User goals are:

- Find new movies to watch.
- Create new trailers of my favorite movies.
- Update trailers already present in the database by adding a quote or choosing a higher quality video.
- Eliminate incorrect or offensive content.
- Intuitively understand how to use the site.
- Use the site from my smartphone as well as my tablet and my laptop.

Open Trailer meets these needs by:

- Allowing the user to easily browse the database, by searching for a movie title or simply scrolling down the page.
- Being easy to use, as the operations of creating, modifying, and eliminating are all handled in a very similar way so that the user has to learn how to do it only once.
- Having a clear and elegant user interface that allows a smooth navigation flow.
- Being fully responsive.

### Developer Goals

- Improve the ability to create responsive design websites through the mobile-first approach.  
- Improve the ability to make a website interactive using JavaScript and jQuery.  
- Learn how to create and handle NoSQL databases.
- Learn how to connect a database to websites using Python and Flask.  
- Add a functional and visually attractive website to the developer portfolio.

### User Stories  

As a visitor to Open Trailer, I want to:

1. Look for the site when I'm undecided about which movie to watch tonight.
2. By browsing the site, rediscover a movie that I had forgotten.
3. Share a movie that I consider underrated with people with my same passion.
4. Share a movie quote that inspired me.
5. Returning to the site to find new content uploaded by other users.

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

### Wireframes  
  
The wireframes were created using [Figma](https://www.figma.com/) and can be found [here](https://www.figma.com/file/Zy7VgngJfOWds4nafWafJI/Third-Milestone-Project?node-id=0%3A1).

## Features

### Existing Features  

#### Navbar
- _Website Logo_: If clicked, it takes the user back to the home page.
- _Search Bar_: Allows the user to search the database using movie titles as search keys.  
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
- _Movie Title_: All the words of the inserted text are capitalized by the `string.capwords()` python method, returning an appropriate format for a movie title. This field can contain a maximum of 85 characters, and a message warns the user if the maximum number of characters has been reached.
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

### Features Left to Implement

#### Multiplatform Support
At present it is only possible to upload videos from Youtube, the next step is to add support to the other 2 major video hosting platforms: Vimeo and Dailymotion.

##### Category Search
Give the user the ability to add the movie genre to the trailer files in order to make the search by category possible.

## Technologies Used
  
#### Languages  
- [HTML5](https://devdocs.io/html/)
- [CSS3](https://devdocs.io/css/) 
- [JavaScript](https://devdocs.io/javascript/)
- [Python](https://www.python.org/)

#### Libraries
- [JQuery](https://jquery.com) to simplify DOM manipulation.  
- [Jinja](https://palletsprojects.com/p/jinja/) to transfer data from the back-end to the front-end of the project.
- [PyMongo](https://api.mongodb.com/python/current/tutorial.html) to allow Python to communicate with MongoDB.
- [Google Fonts](https://fonts.google.com/) to import the fonts used on the website.  
- [Feather Icons](https://feathericons.com/) to import the icons used on the website.  

#### Frameworks  
- [Flask](https://flask.palletsprojects.com/en/1.1.x/) to construct and render pages.
- [Bootstrap](https://getbootstrap.com/) to create the responsive design, in particular the grid and the modals.  

#### Services
- [GitPod](https://www.gitpod.io/) was the main IDE in which the project was developed.  
- [Git](https://git-scm.com/) for version control during the development process.  
- [GitHub](https://github.com/) to host the project in a remote repository.  
- [Heroku](https://dashboard.heroku.com/apps) to deploy the project.  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) hosts the database used in this project.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) to test responsiveness and quickly debug code.  
- [HTML Validator](https://validator.w3.org/) to test the HTML code.  
- [CSS Validator](https://jigsaw.w3.org/css-validator/) to test the CSS code.  
- [JSHint](https://jshint.com/) to test the JavaScript code.  
- [Python syntax checker](https://extendsclass.com/python-tester.html) to test the Python code.
- [Autoprefixer](https://autoprefixer.github.io/) to add prefixes in the CSS for cross-browser support.  
- [Figma](https://www.figma.com/) for wireframing.
- [Favicon](https://favicon.io/) to create the favicon.
- [BrowserStack](https://www.browserstack.com/) to test multiple devices and browsers.
- [Am I Responsive?](http://ami.responsivedesign.is/) to take the [screenshot](#open-trailer) placed at the beginning of this document. 

#### Software
- [Paint.net](https://www.getpaint.net/) to create the 404 Image.
- [Gif Screen Recorder](http://gifrecorder.com/) to create the how-to-url.gif.
- [Visual Studio Code](https://code.visualstudio.com/) for testing snippet of JS code.
- [Spyder](https://www.spyder-ide.org/) for testing snippet of Python code.  

## Testing

### Tested Devices

The website has been successfully tested with the following devices: 
  
```  
| -----------|---------------------------- |------------------------------|  
| Type       | Device                      | Browsers                     |  
| -----------|---------------------------- |------------------------------|  
| Laptop     | Asus FX753VD                | Chrome, Firefox, Edge, Opera |  
| Smartphone | Lenovo Moto G5S Plus        | Chrome, Firefox              |  
| Laptop     | Thinkpad E450               | Firefox                      |  
| Smartphone | Samsung Galaxy A50          | Firefox Focus                |  
| Laptop     | Acer Aspire E15             | Chrome                       |  
| Smartphone | Asus ZenFone 4 Max          | Chrome                       |  
| -----------|---------------------------- |------------------------------|  
```  

### Simulated Devices

[BrowserStack](https://www.browserstack.com/): was used to test the website on the following simulated devices:

```  
| -----------|---------------------------- |----------|  
| Type       | Device                      | Browsers |       
| -----------|---------------------------- |----------|  
| Smartphone | Galaxy Note 9               | Chrome   |  
| Tablet     | Galaxy Tab S6               | Chrome   |  
| Smartphone | iPhone 11                   | Safari   |  
| Tablet     | iPad Pro 11                 | Safari   |  
| Tablet     | iPad Air 2                  | Safari   |  
| -----------|---------------------------- |----------|  
```  

### Manual Testing  

1. **Navbar**
- Hover on each button, confirm the hover effect works as expected. 
- Click the site logo, confirm it takes the user to the home page.
- Click the _Add-Trailer button_, confirm it show the _Add-Trailer_ modal.


1.1 **Search Bar**
- Type one or more words and press enter, confirm that the search results are consistent with the input entered.
- Type one or more words and click the _Magnifying glass button_, confirm that the search results are consistent with the input entered.
- Repeat the previous steps with different character combinations.


2. **Site Description**
- Hover the _Youtube URL_, confirm the hover effect works as expected. 
- Click the _Youtube URL_, confirm it open the gif image in a new tab.

 
3. **Trailer Cards**
- Hover on each button, confirm the hover effect works as expected. 
- Confirm that the trailer cards are arranged in columns of 1 to 3, depending on the size of the window.
- Confirm that the trailer cards are displayed in order from newest to oldest.
- Confirm that none of the 3 elements of the card (title, video and quote) overflow from it.
- Click the _Edit-Trailer button_, confirm it shows the _Edit-Trailer_ modal.
- Click the _Delete-Trailer button_, confirm it shows the _Delete-Trailer_ modal.
	

4. **Add-Trailer Modal**
- Hover on each button, confirm the hover effect works as expected. 
- Confirm that the background of the site does not resize by opening and closing the modal.
- Confirm that the modal header show "Add a new Trailer"
- Confirm that the inputs are empty and show the appropriate placeholders.
- Repeat the previous 2 steps after editing a trailer.
- Type one or more words in the _Movie Title_ input field, confirm that the first letter of each word is capitalized.
- Try to type more than 85 characters in the _Movie Title_ input field, confirm that a message is displayed warning that the maximum number of characters has been reached.
- Enter a valid Youtube URL in the _Youtube URL_ field, save the trailer and reopen it with the _Edit-Trailer Modal_, confirm that the URL has been converted to embedded.
- Enter an invalid Youtube URL in the _Youtube URL_ field and click the _Save button_, confirm that it is rejected.
- Try to type more than 170 characters in the _Movie Quote_ input field, confirm that a message is displayed warning that the maximum number of characters has been reached.
- Click the _Save button_ without filling in the _Movie Title_ or the _Youtube URL_ fields, confirm that those fields cannot be left empty.
- Click the _Save button_ with all mandatory fields filled in, confirm that a new trailer is being created.

4. **Edit-Trailer Modal**
- Hover on each button, confirm the hover effect works as expected. 
- Confirm that the background of the site does not resize by opening and closing the modal.
- Confirm that the modal header show "Modify <movie title>"
- Confirm that the inputs are empty and show the appropriate texts.
- Repeat the previous 2 steps after creating a new trailer.
- Add one or more words in the _Movie Title_ input field, confirm that the first letter of each word is capitalized.
- Try to type more than 85 characters in the _Movie Title_ input field, confirm that a message is displayed warning that the maximum number of characters has been reached.
- Replace the URL in the _Youtube URL_ field with another valid Youtube URL, save the trailer and reopen the modal, confirm that the new URL has been converted to embedded.
- Replace the URL in the _Youtube URL_ field with an invalid Youtube URL and click the _Save button_, confirm that it is rejected.
- Try to type more than 170 characters in the _Movie Quote_ input field, confirm that a message is displayed warning that the maximum number of characters has been reached.
- Click the _Save button_ without filling in the _Movie Title_ or the _Youtube URL_ fields, confirm that those fields cannot be left empty.
- Click the _Save button_ with all mandatory fields filled in, confirm that the changes made are saved.
	

5. **Delete-Trailer Modal**
- Hover on each button, confirm the hover effect works as expected. 
- Confirm that the background of the site does not resize by opening and closing the modal.
- Click the _Delete Button_, confirm that the trailer is actually deleted.

6. **Return-to-top Button**
- Confirm that the _to-top button_ is not visible when the user is at the top of the page. 
- Confirm that the button appears when the user scrolls down the page.
- Confirm that as the user scrolls the button remains in the same place on the screen. 
- Click the button, confirm the user is taken smoothly back up to the top of the page. 
- Confirm that when back up at the top of the page, the button disappears. 
	
7. **Load-more Button**
- Click the button, confirm that 12 (or less) trailers are loaded.
- Confirm that the _Load-more Button_ is not visible when all trailers have been loaded.

8. **404 Page**
- Enter a deliberately incorrect URL in the address bar, confirm it takes the user to page 404.
- Verify that message 404 and the _Return Home_ button are displayed correctly.
- Hover on the _Return Home_ button, confirm the hover effect works as expected.
- Click the _Return Home_ button, confirm it takes the user to the home page.

### Validation Services  
The following validation services were used to check the validity of the website code.  
- [HTML Validator](https://validator.w3.org/) was used to test the HTML code.  
- [CSS Validator](https://jigsaw.w3.org/css-validator/) was used to test the CSS code.  
- [JSHint](https://jshint.com/) was used to test the JavaScript code.  
- [Python syntax checker](https://extendsclass.com/python-tester.html) was used to test the Python code.

### Bugs Discovered

#### Problem with Ad blocker
If an Ad blocker is active on the browser, the console throws multiple errors and the site loading is slower.

#### Problem with unusual Youtube URLs (fixed)


## Deployment

### How to run this project locally

In case you want to pull the code from my Github repository:  
1. Log in to Github,  

2. Follow [this](https://github.com/Dom-888/Third-Milestone-Project) link to the project repository.  

3. In the repository page, click **Clone or download ▼**.  

4. To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click **Use SSH**, then click the clipboard icon.  

5. Open Git Bash.  

6. Change the current working directory to the location where you want the cloned directory to be made.  

7. Type `git clone`, and then paste the URL you copied in Step 3.  

8. Install all required modules with the command:
```
pip -r requirements.txt.
```

9. Create your own database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or MongoDB running locally on your machine. Call the database "openTrailers", with a collection called "trailers". I also suggest creating a few documents for testing purposes.

10. Now you need the MONGO_URI to connect the repository to the database, to find the it on [Atlas](https://www.mongodb.com/cloud/atlas) click on "Cluster" -> "Connect" -> "Connect your application"; Here chose the lastest version of Python, you will get a string like the following:

```
mongodb+srv://my_username:<password>@my_cluster-1hvju.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Replace <password> with your Atlas password and <dbname> with "openTrailer".

11. Create a file called `env.py`.

12. Inside the env.py file import os, create a "conection_string" variable and assign it to the MONGO_URI.
The final content of your env.py should look like this:

```
import os

os.environ["connection_string"] = "mongodb+srv://my_username:<password>@my_cluster-1hvju.mongodb.net/<dbname>?retryWrites=true&w=majority" 
````

13. You can now run the application with the command:
```
python app.py
```

14. You can visit the website at `http://127.0.0.1:5000`

## Heroku Deployment

To deploy the project on heroku, take the following steps:

1. If not already present, create a requirements.txt file using the command:

```
pip freeze > requirements.txt
```

2. If not already present, create a `Procfile` with the command:

```
echo web: python app.py > Procfile
```

3. Push the the project to GitHub.

4. Create a new app on the [Heroku website](https://dashboard.heroku.com/apps) by clicking the "New" button in your dashboard. Give it a name and set the region to the one closest to you, then click the "Create app" button.

5. From the heroku dashboard of your newly created application, click on "Settings" -> "Reveal Config Vars" and set the following config variabless:

```
|---------------------------------|
| Key               | Value       |
|------------------ |-------------|
| connection_string | <MONGO_URI> |
| DEBUG             | FALSE       |
| IP                | 0.0.0.0     |
| PORT              | 5000        |
|---------------------------------|
```

To get the MONGO_URI read the step 10 of the [**previous section**](#how-to-run-this-project-locally).

6. Click on "Deploy" -> "Deployment method" and select GitHub. Select the correct repository and click "Connect".

7. In the "Manual Deployment" section of this page, make sure the master branch is selected and then click "Deploy Branch".

8. The site is now successfully deployed, click the "Open app" button to visit it.

## Credits
### Code

- To make Youtube videos responsive is from [Css-Trick](https://css-tricks.com/fluid-width-video/).   
- To create the Return-to-top Button is from [W3Schools](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp).  
- To create the Load-more Button is from [StackOverflow](https://stackoverflow.com/questions/17736786/jquery-load-first-3-elements-click-load-more-to-display-next-5-elements).  

### Media

- The small background image was downloaded from [this article](https://www.denofgeek.com/movies/the-issue-with-movie-theater-lights-coming-up-early/).  
- The large background image was downloaded from [this article](https://www.inlander.com/spokane/tv-streaming-pandemic-movie-theaters-meet-their-next-big-challenge/Content?oid=19342016).  
- The 404 image was created by the author starting from [this icon](https://thenounproject.com/term/film-reel/16712/).  

### Acknowledgments

- I received assistance, feedback and encouragement from my mentor [Seun Owonikoko](https://github.com/seunkoko).  
- I received help and suggestions from [Code Institute](https://codeinstitute.net/) tutors.  
- The project code has been reviewed by the [Code Institute](https://codeinstitute.net/) Slack community.  
- This project takes inspiration from [IMDb](https://www.imdb.com/).

## Disclaimer

The content of this website is provided for educational purposes only.
