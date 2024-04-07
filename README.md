# End-to-End CI/CD Pipeline for Node.js Web Application using AWS CI/CD Services 🚀

Build a CI/CD pipeline for a Node.js web application using AWS CI/CD services (**CodeBuild, CodeDeploy, CodePipeline**).

## Architecture Description 📝

The architecture of the CI/CD pipeline is as follows:
Users start by pushing a new commit to the GitHub repository. This triggers the pipeline, which consists of three stages: **Source, Build, and Deploy**. The Source stage pulls the source code from the GitHub repository. The Build stage uses AWS CodeBuild to Test the Node.js web application. The Deploy stage uses AWS CodeDeploy to deploy the Node.js web application to an Elaastic Beanstalk environment.
**Note:** The build stage in this project is used to test the Node.js web application. In a real-world scenario, you would also include the build process in this stage.

## Architecture Diagram 📌
![aws-cicd-with-eb](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/f430491c-f767-4e2e-a7f6-2ba9f7e20ca5)

## Prerequisites 📋

- An AWS account with the necessary permissions to create the required resources.
- GitHub account

## Steps 📝

| Step No | Document Link |
| ------ | ------ |
| 1 | [Create a Instance role Elastic Beanstalk][Step-1] |
| 2 | [Configure Elastic Beanstalk Environment][Step-2] |
| 3 | [Create a Pipeline to Deploy Node.js Application][Step-3] |
| 4 | [View the Application][Step-4] |
| 5 | [Clean Up][Step-5] |


   [Step-1]: <./Steps/step1.md>
   [Step-2]: <./Steps/step2.md>   
   [Step-3]: <./Steps/step3.md>
   [Step-4]: <./Steps/step4.md>
   [Step-5]: <./Steps/step5.md>

## Usage 🛠️

1. Clone or download the repository.
```sh
git clone https://github.com/mathesh-me/aws-cicd-devops-web-app
```
2. Follow the steps mentioned in the [Steps](#steps-) section.
3. Clean up the resources by following the [Clean Up](./Steps/step5.md) steps.

## Contributing 🖇️

Pull requests are welcome for any changes.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Author 🙋‍♂

- [Mathesh M](https://www.linkedin.com/in/mathesh-me/) on LinkedIn.
- You Can also check out my [Medium](https://medium.com/@mathesh-me) for articles on DevOps Tools and Technologies.️
