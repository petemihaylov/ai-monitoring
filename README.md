# Job application case

Good luck with your job application!

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

Create a simple HTML page with a few buttons:

* [GET ALL LOGS] => Creates a table of all the predictions (with all data) ordered from most recent to most old.
* [GET LOGS FOR ID] => Input an ID and create a table with all predictions for that model ID ordered from most recent to most old.
* [GET STATUS] => Creates a table with each unique model and the status ID and average responseTime

> Don’t focus on making it look pretty

**Send in your answer by creating a PR in the repo**

## Bonus

What other opportunities do you see with the data you have? Implement them if you have time left.
