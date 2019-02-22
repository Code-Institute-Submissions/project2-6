```
  **

## FARM SHOP

**

```

**

## Objective of the site:

**

The objective of this project was to create a mockup website. I originally created this website for my first project but have incorporated it into my second project.

I chose to create a website for a fictitious farm shop.

**

## About THE SITE:

**

UX: The site contains a description of the farm shop and its owners, the products that they sell and a pair of join me and login modals. As yet, these modals are not operational and are purely aesthetic.

For the second project I'm adding a fully functional contact us section as well as a maps function that will contain a store locator.

For the maps section it was necessary to set up a google account and get an API key to allow me use google maps.

## **FEATURES:**

The contact us facility allows the site owner to be contacted through a 3rd party(emailjs.com) by potential clients. It supplies a portal for the client to register a query via a message while also leaving their contact details(name, phone number and email address).

The maps function provides a store locator that enables the clients to find the nearest farm shop to them. It also gives them details of the opening times for each particular shop.

The bulk of the code for the map facility is in the maps.js file in the js folder(assets/js/maps.js). It deals with the location of the map window(ie country/area displayed in the maps portal) by way of lattitude and longitude as well as the zoom level of the maps portal. It also creates markers and sets each of their positions with regard to each store location. This provides the user with the location and opening times of each store in a text box below the map when each marker is clicked.

The code for the layout of the contact me function is in both the about.html and sendEmail.js files. The about.html file covers the layout and number of text boxes involved while the sendEmail.js file covers the level of functionality.

**

## Technologies Used:

**

This site was created using HTML, CSS and JavaScript code. Various libraries were used including jQuery which is a JavaScript library that is small and feature rich and more impotantly QUICK...which reduces/eliminates latency or lagging while browsing the site. Another prominent tool used in this project was Bootstrap. This is a front-end framework for designing websites and contains HTML and CSS templates that provide a quick method for producing interface components like forms and buttons. I also made use of google fonts.

**

## Testing:

**

I ran into some problems while building this site. Positioning the map and contact section took an amount of adjustment before I was happy with the layout. I also had to make adjustments with regard to how the site functions over various devices and using different browsers.

The contact form: The contact form works great. It allows for all required data to be entered and transmitted to the site owners email address via a third party platform.

The input fields(name,email address and text box) all display error messages if they are blank when the user attempts to submit them. The email address input field must also somewhat resemble a genuine email address as it must contain an @ symbol. Otherwise it is invalid and displays an error message.

The map function: The map function took some adjustments to get it to function correctly. The longitude, lattitude and zoom needed to be tweaked in order to get the map to display as required. I also had to adjust the HTML to get it to display correctly on various sizes of screen/devices.

I added markers to the map. This was done to display the locations of other farmshops around the country. When clicked upon the locations and opening hours are displayed in a textbox below the map.

Deployment: I have hosted my project on my github page. Link:  [https://github.com/tom1mol/project2](https://github.com/tom1mol/project2)  I used the command line in cloud9 to push my project to github.

The process involved in hosting the project on github is as follows:

-   Set up new repository on github
-   create empty Git repository (git init)
-   Add files to repository (git add .)
-   Saved changes to local repository (git commit -m"")
-   linked the local repository to git (git remote add origin "insert git url here")
-   I pushed the contents of the local repository to git (git push -u origin master)

**

## Credits:

**

Content: This site was my own idea. All text is my own.

Pictures: The background picture and other associated pictures were obtained on google.

Acknowledgements: I recieved pointers and guidance from my mentor Nishant. Thanks for your time and patience.