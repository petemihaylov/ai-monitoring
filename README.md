## Case description

The current state of our product involves a front-end written in Angular and a back-end consisting of multiple microservices written in TypeScript ([NestJS](https://nestjs.com/)). These microservices together support the deployment, logging, monitoring and several other important functionalities. However, the product owner has decided that its time to start developing a new functionality, namely extensive monitoring of the current machine learning models in production. The plan is to set-up a new microservice with the following functionalities:

1. Retrieving a list of all the logs.
2. Retrieving a list of all the logs for a specific model.
3. Show a graph of errors that occur over time

### Data

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

### Exercise

Pull the repository

Create an Angular application with the following functionalities:
> **important**: use your creative freedom to show us your streghts in the assignment. There are no good or false answers. You can use the steps below as a guideline for the development of our monitoring feature.

1. Navigation bar with two links: Predictions and Monitoring
2. Create routes and components for the PredictionsComponent and MonitoringComponent
3. Create the PredictionsComponent with the follow functionalities:
   * Create a table of all the predictions (with all data) ordered from most recent to most old.
   * Create a filter for a modelId. The table should then only show predictions for that modelId (ordered from most recent to most old).
4. Create the MonitoringComponent with the following functionality:
   * Create a graph that shows the errors over time (i.e. status != 200)
   * Create a time filter to show only specific time

> Tip: To speed things up you can use Angular Material: [documentation](https://material.angular.io/components/categories*)

### Bonus

Make a list or planning on additional tasks you want to perform to complete this feature for final review.
