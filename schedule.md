# ng_photo_gallery
Photo gallery app using angular

- [x] Set up file tree: no database for starters.
- [x] Download some photos to images folder.
- [x] Structure for index.html: 
    Within each <span>: Img <div>. Description <div>. Button below images with <div>.
    'Likes' <div> for text (counter of number of people who 'liked' photo).
- [x] CSS file to look approximately correct.

Client side logic:
- [x] When img div clicked, hide img, show description. Vice versa.
- [x] When button clicked, update 'likes' field.

Hard mode:
- [x] Make comment section. POST req to new /comments route.
- [x] Style. 

Weekend Challenge 4
We're switching up our client-side this weekend with Angular! Our focus will be on getting comfortable with what Angular can do for us, so most of our effort will be on client-side JavaScript and, hopefully, experimenting with CSS.
The Gallery of My Life
This weekend's application will be a gallery of 6 or more pictures of significance to you. When someone clicks on a picture, they should see a brief synopsis of why you chose to display that photo. Users can also heart/thumbs up/favorite your photo as many times as they want; you'll need to keep track of how many times it was clicked.
When you're done, host this on Heroku!
Technologies
	•	Node/Express - to serve your files
	•	Angular - client-side logic
	•	CSS - flex your style muscles
	•	Heroku - to make your site available to the world (Pro Mode)
Wireframes
On the github readme!
Hints
	•	Explore built-in Angular functionality like ng-click, ng-src, ng-show, ng-hide, ng-if.
	•	Use arrays and objects to store your data on the server.
Hard Mode
Create a form that will take comments for each of your photos. Display the comments when a "Show Comments" button is clicked.
Pro Mode
Use Angular's $http service to store new data on the server. Try and deploy your site to Heroku. This is new, follow this guide for some tips.