# STREET ART LOCATIONS

An embedded screenshot of the app


Explanations of the technologies used
-----------------------------------

The aplications utilizes a node back end and React front end. 

The node back end handles the post and gets from the database to store and display the data users add to the application.

The React front end contains a form that passes its content to the back end. It also contains the Google maps API which pulls data and diplays pins on the map according to each location saved to the database. 

The application uses a PSQL database to store all post by users on street art including picture, artist name, address, latitude and longitute, and miscelanious info on the work of art. 


A couple paragraphs about the general approach you took
-----------------------------------

First I created a post form modal that will pass user provided info into the database.

Then I implemented google maps API to the page and linked it to info from the data base to display pins for each location saved. 

Then I created a React compnent modal that will pop up on each pin click and will display the info for the specific pin that was clicked. 


Installation instructions for any dependencies
-----------------------------------



Link to your user stories – who are your users, what do they want, and why?
-----------------------------------

The user is anyone interested in any street art and is curious about what street are os currently arounf them or wants to share artwork that is around them. 

As a user they can log into my app and be shown a map of exact locations of street art around them.

Link to your wireframes – sketches of major views / interfaces in your application

Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture

Descriptions of any unsolved problems or major hurdles you had to overcome