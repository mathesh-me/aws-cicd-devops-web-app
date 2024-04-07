## Clean Up

Once you have verified the application, you can clean up the resources to avoid incurring any additional charges. Follow the steps below to clean up the resources:

1. **Delete the Elastic Beanstalk Environment:**

    - Open the [Elastic Beanstalk console](https://console.aws.amazon.com/elasticbeanstalk/home).
    - Select the application you created.
    - Click on the environment name.
    - Click on the **Actions** dropdown.
    - Click on **Terminate Environment**.
    - Enter the environment name and click on **Terminate**.

2. **Delete the Pipeline:**
    
        - Open the [CodePipeline console](https://console.aws.amazon.com/codesuite/codepipeline/pipelines).
        - Select the pipeline you created.
        - Click on the **Actions** dropdown.
        - Click on **Delete**.
        - Click on **Delete** to confirm.

3. **Delete the CodeBuild Project:**
    
        - Open the [CodeBuild console](https://console.aws.amazon.com/codesuite/codebuild/projects).
        - Select the project you created.
        - Click on the **Actions** dropdown.
        - Click on **Delete**.
        - Click on **Delete** to confirm.