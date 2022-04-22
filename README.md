# Reekon Take Home Challenge

[Deployed link](http://ec2-54-208-34-110.compute-1.amazonaws.com)

# Challenge:
The intent of this project is to develop an MVP version of a hypothetical product: an application to manage a squadron of Robotic Assistants to help construction workers. </br>
The general targets are having the ability to do the following: </br>
-Create an account and associate it with an organization </br>
-A dashboard screen that shows the location of all current active robots. </br>
-An error report screen of all errors Robots encountered, with filter options. </br>
-Command screen to manage robot actions </br>
-A summary Screen of percentage of task completion (bonus) </br>

# Mockups
Figma was used to create the mockups, keeping Reekon's color palatte of black/yellow/white. The logo is not the official logo as shown on the companys website.

Home Screen </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/LandingPage.png" width="800"> </br>
The Home Screen will allow users to sign up or log in if they already have an account. Clicking login will attempt to log them in and reroute them to the Main Menu.

Sign Up Page </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/SignUpPage.png" width="800"> </br>
If sign up is clicked on the Home screen, it will show additional fields to fill out to sign up as shown. Clicking sign up after filling out the additional fields will create a new user and log them in.

Main Menu </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/MainMenu.png" width="800"> </br>
The Main menu will show different options a user can take to view different bits of information regards their robotos.

Active Robots Screen </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/activeRobots.png" width="800"> </br>
The active robot screen shows the location of all active robots, their task, and completion status. The robot location is assumed to have some way of sending its current location to the VPC where the VPC sends it to the client. The VPC also has a floor plan of the job site, assumed to be received by a customer. The positioning of the robot is then merged with the layout and the VPC sends the layout and the current location. A connection would be kept open for the current location for live tracking. A user may tap on the Reekon Logo on the upper left corner to navigate to the main menu.

Manage Robots </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/manage_robots.png" width="800"> </br>
The manage robot screen allows you to view all available robots on the job site, their battery %, and status (green = available, red = unavailable low battery, orange = unavailable, task in operation). A user can drag and drop a task to an available robot to begin a task. to cancel/stop a task, a user can tap on the robot with an orange status, a pop up will confirm cancellation, upon clicking yes, it will cancel the current task. (changed implementation in conclusion)

Filterable Error Reports </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/errorReports.png" width="800"> </br>
The error reports page shows errors with robot id, error type, date/time of error, and task it was doing before faulting. Each column can be filtered by tapping on the up or down arrows. Tapping the up arrow on robot ids will show the most occuring robot id's first (e.g. [10,10, 6, 5, 1] robot 10 error'ed twice so it is first on the list, tapping the down arrow will sort it in reverse. Tapping up on Error Type, will sort the most common occuring error type, [mobility, mobility, battery] mobility occured twice out of 3 errors so it is first on the list; tapping the down arrow will do the reverse. Up arrow on time -> most recent, down arrow, least recent. Up arrow on task will sort by most occuring task where a robot errors out (e.g. [assemble, assemble, repair]) assemble occurs the most and gets put first. Down arrow on task will do the reverse.

Summary </br>
<img src="https://github.com/ErnestoOrtegaHernandez/RobotApp/blob/main/UI_wireframes/Summary.png" width="800"> </br>
Summary shows a scrollview with list of robots on the job site, what their current task is, their completion, and the amount of times an error has occured over a given time frame.

Note: all pages with Reekon in the upper left corner will have the ability to click on it to navigate to the main menu.

# Implementation - Tools used: React native, Node.js, Express, AWS EC2
The first thing you may notice is that the login authentication doesn't work as authentication should, that is correct. I intentionally left the authentication logic out due to various reasons, mainly this was a mockup. I mimicked data by having json data exist in the server directory, this would serve to mimick CRUD operations. The json files represent data from either the Reekon VPC or the robot api that gets combined and sent the front end. The active robots page is static for now but I did have a few ideas of mocking up that data that time didn't allow for; namely, having and open connection to another server that mimicks coordinates around a set area. this set area would be used to define a room on the floor plan and the red marker would move around in conjunction to those coordinates. The manage robots list was reduced to single list, instead of dragging and dropping a task, a user can tap on a robot that has a minimum of 25% battery life or more and assign/cancel a task via a Modal. The error reports are sorting as intended by clicking the up and down arrows. The summary page correctly reflects when a task is changed/canceled. I didn't have the opportuniy to unit/integration test, but this would have been the next step but I decided to atleast have something live by eod 4/22. If you've read this far I want to thank you for your time and an opportunity to present this mockup.

# Run locally
To run locall you will need to clone this repo, in the RobotApp/ directory, npm install and also create an api.js file with a link to local host as such:
const url = {url:'http://localhost'} export default url; </br> you will also need to install expo-cli globally, to run the backend, switch the RobotApp/server/ directory, then npm install. run usingng 'node app.js'. The RobotApp is now ready to be run in the RobotApp/ directory using expo start --web.
