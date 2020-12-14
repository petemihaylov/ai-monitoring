# Job application case

Please read this complete assignment thoroughly before starting. Good luck with your job application!

## Case description

The current state of the product involves a front-end written in Angular and a back-end consisting of 9 microservices. These 9 microservices form the back-end and together support the deployment, logging, monitoring and several other important functionalities. However, the product owner has decided that its time to start developing a new functionality, namely extensive monitoring of the current machine learning models in production. The plan is to set-up a new microservice with the following functionalities:

1. Retrieving a list of all the logs.
2. Retrieving a list of all the logs for a specific model.
3. Retrieving a list of the unique models and their corresponding status
   1. If all the status codes for a unique model are 200, the status is ‘OK’.
   2. If any one of the status codes for a unique model is NOT 200, the status is ‘ERROR’

## Data

A json with all a list of logs for a bunch of models, containing the following properties:

```
[
{
"predictionId": 1,
"modelId": 1,
"status": 200,
“timestamp”: 849274928,
"responseTime": 47
},
…
]
```

## Exercise

Pull the repository

Create an Angular application for the following functionalities:

1. Navigation bar with two links: Predictions and Performance
2. Create routes and components for the PredictionsComponent and PerformanceComponent
3. Create the PredictionsComponent with the follow functionalities:
   * [GET ALL LOGS] => Creates a `MaterialDataTable` of all the predictions (with all data) ordered from most recent to most old.
   * [GET LOGS FOR ID] => Use a MaterialField and FormGroup to enable to filter for a modelId. The table should then only show predictions for that modelId (ordered from most recent to most old).
4. Create the PerformanceComponent with the following functionality:
   * Calculate the average response time per model.
   * Create a `MaterialDataTable` with the modelId and average responseTime as columns. 

*Tip: make use of the Angular Material documentation: https://material.angular.io/components/categories*


**Send in your answer by creating a PR in the repo**

## Bonus

What other opportunities do you see with the data you have? Implement them if you have time left.
