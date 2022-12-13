## multi-docker2
This repo updates multi-docker1 repo to use GitHub actions instead of TravisCI


## Guide to Build a Multi-container App, test and Deploy Application in AWS EBS with AWS ElastiCache and AWS RDS using Github Actions

This project pushes a multi-container application to a GitHub Repo where it is tested then the images are pushed to Docker Hub. A docker-compose file is then used to deploy the application on AWS Elastic Beanstalk service making use of AWS RDS as a database and AWS ElastiCache as an In-Memory Cache.

# Boilerplate React App
This application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Application Details
Simple React Application created using create-react-app


Steps To Deployment
1. Build react app and Dockerise it then push to GitHub Repo
2. Create a Github Actions workflow which is triggered on push to main branch       
3. The Workflow creates a linux hosted runner which
    - The runner builds the docker images based on the Dockerfile.dev
    - The runner runs and tests the just built Docker images
    - The built images are then pushed to Docker Hub
4. The workflow then creates an artifact from step 3 above. A zip file for deployment to EBS
5. The artifact is then copied to an existing S3 bucket using AWS CLI or a new bucket could be created
6. Create an ElasticBeanStalk Application using the AWS CLI
7. Configure all the environment variables :
    ```
          EB_APPLICATION_NAME: "YOUR_EBS_APPLICATION_NAME" created in #6
          EB_APP_ENV_NAME: "YOUR_EBS_APPLICATION_ENVIRONMENT NAME" created in #6
          DEPLOY_PACKAGE_NAME: "YOUR_APPLICATIO_NAME-${{ github.sha }}.zip" // using github.sha makes sure you have a different package name for each deployment
          AWS_REGION_NAME: "YOUR_AWS_REGION" where all aws components are created 
          AWS_BUCKET_NAME: "YOUR_BUCKET_NAME" from #5
     ```
8. The zip file contains a docker-compose.yml file which ElasticBeanStalk uses to download the images from Docker Hub and run them.
9. An AWS ElastiCache instance and an AWS RDS instance are already running in AWS
10. The environment variables in ElasticBeanStalk are also configured manually in AWS
     
 - `Note: Ensure all the AWS components are created in same region`

 - `Note: Consider automating the process of deploying the AWS RDS instance and AWS ElastiCache instance either using Terraform or the AWS CLI`