# Evolv-Backend

## Live API
I've hosted this code on Heroku and made all APIs live available at https://evolv-fit-backend.herokuapp.com/api/v1/

## Level 1 - Schema Design
All the schema models mentioned in the task is available in the folder Models

## Level 2 - APIs
### POST API for FoodItems
POST https://evolv-fit-backend.herokuapp.com/api/v1/fooditems/save
#### Body Parameters
name - String (required)  
calories - Number  
protein - Number  
carb - Number  
fat - Number  
accepetedUnits - enum of String ['g','kg','ml','l','item']  
itemWeight - Number (required)  
### GET API for FoodItems
GET https://evolv-fit-backend.herokuapp.com/api/v1/fooditems/get (open link in browser or use postman)  
##### I've added 20 FoodItems in Database using the POST API mentioned above.
### POST API for Meals
POST https://evolv-fit-backend.herokuapp.com/api/v1/meals/save
#### Body Parameters
name - String (required)  
category - enum of String ['breakfast', 'lunch', 'dinner', 'snack'] (required)  
foodItems - Array of name of foodItems to be referenced 
example - 
[ 
  { 
    "name":"Banana" 
  } 
]
### GET API for Meals
GET https://evolv-fit-backend.herokuapp.com/api/v1/meals/get (open link in browser or use postman)  
##### I've added 5 Meals in Database by referencing foodItems using the POST API mentioned above.
### POST API to Create User
POST https://evolv-fit-backend.herokuapp.com/api/v1/users/save
#### Body Parameteres
name - String (required)  
calorieRequirement - Number (required)  
mealPlan - Array of Date (in String) and array of Meals reference (optional parameter. Meals can be added to mealPlan using name of meals later). 
### GET API for User
GET https://evolv-fit-backend.herokuapp.com/api/v1/users/get (open link in browser or use postman)  
##### I've created a dummy User named Himanshu whose calorieRequirement is 2500 and mealPlan for 2 dates by referencing meals using the POST API mentioned above.
### POST API to Append Meals in MealPlan of User
POST https://evolv-fit-backend.herokuapp.com/api/v1/users/addmeal
#### Body Parameters
name - String (name of User)  
meals - Array of Name of Meals  
date - Date in String Format (example - "03/02/22") 
### Patch API for updating Meals
PATCH https://evolv-fit-backend.herokuapp.com/api/v1/meals/update/:id  
Body contains the parameters to be updated for given document ID.
### Patch API for Updating User Meals
PATCH https://evolv-fit-backend.herokuapp.com/api/v1/users/update/:id  
Body contains the parameters to be updated for given document ID.
## Level 3 - Algorithm
I've created a POST API to get List of Food Items for a given calorie.  
POST https://evolv-fit-backend.herokuapp.com/api/v1/algorithm/select
#### Body Parameters
calories - Number (required) 

Example -   
{ "calories":2000 }

The API will return the response with Food Items quantity for given calories in range of ±100 of given amount. Prioritizing whole numbers than fractions of 0.25, 0.5, 0.75 and quantity of different items lies between 2-5. (Satisfying all constraints).
