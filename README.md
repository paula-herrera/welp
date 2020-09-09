# welp
Welp! Can't decide :/


Frustrated from your group of friends  couldn't decide on a place to eat? 
Well, introducing Welp! for those moments where you let a random algorithm decide your meal.

To get started: clone down a version of this application using the top right clone/copy git clone button.

once into Terminal, make sure you have npm and git accessible.
run ```javascript npm install ``` in one terminal, and npm run build in another

On success: you should be able to see the following message: "successfully connected to Welp! on http://localhost:3000/"

Navigate to your browser and enter the URL http://localhost:3000/


For Review use purpose:

# express-review

### Setup
- npm install
- npm run build
- npm start
- npm run dev [OPTIONAL]

## Step 1
- Create an express server that will listen on port 1738
- Direct all requests after the url '/api'

## Step 2
- Create a get route to return all choices 
- Create a get route to return a specific restaurant
- Create a get route to submit a post request with just "restaurant" as body
- Test via Postman

## Step 3
- Create a delete route to remove a restaurant
- Create a delete route to remove ALL restaurants
- Test via Postman

## Step 4
- Serve your client to the port you're listening on using your express server

## Step 5
- Create a function on your client that will make a get request to your server to get all restaurants
- Create a function on your client that will make a post request to your server to add a restaurant
- Create a function on your client that will make a delete request to your server to delete a restaurant
- Create a function on your client that will make a delete request to your server to delete ALL restaurants

## EXTRA CREDIT
- Refactor your server to connect to your database instead of using the data from restaurants.json
- Add an update route 
- Add an additional endpoint to your server
