# FIND HOLIDAY

Application allow user to explore different option for holiday around the world or choose one of the many pre-set option for 1 of the 6 continents and find the best cities from continent and discover the best attraction to visit or best hotel or the best restaurants from single drop down menu  
[Find Holiday](https://rokambol.github.io/Find-holiday/)

## UX
 
User Stories
* As visitor I want to have simple welcome page explain why the project exist.
* As visitor I want to have easy to find link to functional page of the application.
* As visitor I want to have nice overview of the map of the all continent.
* As visitor I want to able easily to find main functionality on the application.
* As visitor I want when I choose continent from the menu map to show me the continent.
* As visitor I want to find the best cities to visit on each continent. 
* As visitor I want when city is chosen map to show the city with marker where I can click and see quick fact about the city.
* As visitor I want to have option to chose the best attraction or hotel and restaurants in chosen city.
* As visitor I want when list of attraction/hotels or restaurants appear on the page to click on the name and visit its home page/ social media so I can receive more information or buy ticket/book a room or book a table directly.
* As visitor I want if I decide to able to search for my own PLACE OF INTEREST.

## Features

1. The home page welcomes the visitor, gives a visitor quick overview of the story behind the application and what it is purpose. 

2. Under welcome text user could found button with text "let's go" which redirect them to functional page of the application. 

3. On functional page have navigation top with welcome text and search bar. 

4. Under navigation user can find map container holding [Google](https://developers.google.com/maps/documentation/javascript/tutorial) powered map on right and three drop down menu on the left.

5. The top of the drop down menu contains six name of the continents which user can choose from on each chosen continent map move it's center marker to the middle to the continent. 

6. Middle drop down menu contains six cities names in chosen continent, when city is chose map show the city with  marker on which if user click give quick overview of the city with quick info label. 

7. Bottom drop down load option with 5 of the best attraction/hotels or restaurants depend on the chosen option in chosen city.

8. When user click on name on each option from the bottom drop down menu the application open the link on home page on chosen attraction/hotel or restaurant.



## Technologies Used

As this project was build as simple application for interactive Frontend Development Milestone project , Javascript was used to create the bulk of the code: all the logic that makes this project work was written in javascript.

Other technologies used in this project are:

- HTML, the most basic building block of the Web for writing the basic front-end content.

- CSS, a stylesheet language for styling the page.

- [Javascript](https://www.javascript.com/) used to written logic of the application.

- [JQuery](https://jquery.com/) for allowing the Javascript functionality in Bootstrap and my custom script to work.

- [JSON](https://www.json.org/) is use to write external .json file for easy organize information.

- [Bootstrap](https://getbootstrap.com/), a front-end framework for general responsiveness. For components used such as the navbar with burger icon which makes the app easy to use on mobile.

- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) help map to load on the application.


## Testing

No custom automated testing has been done on this project.

All custom js file are checked through [https://jshint.com/](https://jshint.com/) with error found.

All html and css are checked through [https://validator.w3.org](https://validator.w3.org/#validate_by_uri) with no major mistake found.

For the user stories, the manual testing process is as follows:

- welcome page/home page will have under welcome text have button with text "Let's go" which when press it must redirect user to functional page of the application where user can see the map.


 - When user land on functional page maps must show the world and a side must contain 3 drop down menus.
    
 - The top drop down menu when is chose must contain 6 options named with continents names, when option is chosen , map must show continent with marker on the middle of it.


- When any option from top drop down menu is chosen middle drop down menu become active with 6 options named of the city in chosen continents.

- if the top drop down menu is not have chosen option middle drop down menu should remain empty.
  
 - When city from the middle drop down menu is chosen map should show the city the marker.
 
 - When marker on the city is chosen should open marker box where picture of the city appear and under the picture have quick information for the city.
 
     
- When city from the middle drop down menu is chosen bottom drop down menu option became active and if chosen show list of 5 attractions/hotels or restaurants depends of the chosen option from bottom drop down menu.

- when clicked of any of the attraction/ hotel or restaurant application should open new browser page with home page of the chosen attraction/ hotel or restaurant.

- If no option chosen from drop down menu top and middle all option from the bottom drop down menu still could be chosen but will not show anything under the menu.

- In the top left corner application contain search bar powered by [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) where user able to choose place which should appear on the map. 

  

## Deployment and Security

Development version on the application are develop on
the local editor for whole project [cloud9](https://c9.io) and [AWS Cloud9](https://aws.amazon.com/console/).

Deployment:

Hosting and deployment of the project [here](https://github.com/rokambol/Find-holiday) clone repository and run it to to your own editor. No special requirements unless editor maintain HTML,CSS and Javascpipt.
Link to project link [here](https://rokambol.github.io/Find-holiday/)

Api key are restricted to be use only on this web application. if repository are copied another api keys must be obtain from [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) to could map to be load on the page and be functional.

Have fun!

## Credits
I would like to thank my fellow students for their encouragement, tips and bug reporting along the way. 

Many thanks to my mentor Guido Cecilio Garcia Bernal  for his help and tips.

### Content

The photo of marker used in this site was obtained from [google.com](https://google.com/).
