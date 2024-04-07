## Create a Pipeline to Deploy Node.js Application

In this step, we will create a pipeline to deploy the Node.js web application to an Elastic Beanstalk environment. We will use AWS CodePipeline to create a pipeline that automates the deployment process.

### Steps to Create a Pipeline to Deploy Node.js Application:

**Navigate to Pipeline Console**

![step-2 1](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/886b1de4-4653-4a21-b252-f814f74bf598)

![step-2 2](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/dae3deb6-e94a-4f61-b9d3-c283573548d7)

![step-2 3](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/d135c736-9cdc-454e-8060-7cb5eed4edc9)

![step-2 4](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/df79501a-9d97-43dd-b906-04a4a684ec17)

**Choose the repository where your Application code**

![step-2 5](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/8eb2c1cb-9f94-4af6-a048-c9c262782388)

![step-2 6](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/673b5179-19da-475f-b4e1-a7a70889a447)

![step-2 7](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/ddc3ed98-04e9-4b99-9d3a-1486614f31c6)

![step-2 8](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/2f461c2a-48fa-4155-84f1-06fd8f0e5c83)

![step-2 9](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/635f478a-6243-4fa1-86b2-20cf3bc25554)

![step-2 10](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/45ed9276-69d7-4e63-bf52-62d32354aee7)

![step-2 11](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/a185d433-4f8a-4a09-825d-01ed9ce116af)

![step-2 12](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/7a11f1d6-9169-4aad-8d01-24d3f825915a)

![step-2 13](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/c053e9b7-a5ef-4714-9e89-afd068c95544)

![step-2 14](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/91224dbb-8edc-4ab5-8b78-d788c981d498)

![step-2 15](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/095c8ff0-5ee8-4c89-9b52-0c84c1ea0da1)

![step-2 16](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/35f88bcc-d633-4371-8178-5a80b0998eb7)

![step-2 17](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/9f6b6339-91ef-49f8-9748-1d4d37890289)

![step-2 18](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/104774d2-cf66-46f5-9f99-41aa206fe25a)

![step-2 19](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/b4d08073-2693-474a-a97f-482e0b2376ed)

![step-2 20](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/867077c2-fb3e-4eb4-9783-91da76a61ce5)

**After Click on `Create Pipleline`, Your Pipeline will be triggered automatically. But we need to modify one setting to run Pipeline Successfully. Since we are not building any Binaries or Docker Images we are not using BuildArtifacts Option. So we also need to update that setting in Deploy Stage**

![step-2 21](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/609fb01d-3d53-4cb0-abd2-b5157a624b02)

![step-2 22](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/497883cb-ecad-4bad-a4cd-84c2aafd750f)

![step-2 23](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/0513ae70-7029-46ae-8af0-816475b7d990)

![step-2 24](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/9114c97a-dfe0-408c-8c28-d4ff1db3bf7c)

![step-2 25](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/e9ae3bcf-9b88-4a82-9de6-98be6c9a0e91)

![step-2 26](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/c58d6a82-a419-4566-9e2d-4c09db8dc964)

![step-2 27](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/4be05b1a-28b7-47ca-b6ba-dc191653be05)

**If You are not changed the BuildArtifact to SourceArtifact you'll get the below Error**

![step-2 28](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/7e77dd6e-220c-4e5d-9e46-428e80b00e71)

![step-2 29](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/ca85b29d-2cb5-4c39-bdc7-800be200548a)

**So makesure to Edit the SourceArtifact Option. There may be a Chance your Pipeline will not run successfully at First, Because the Pipeline triggered automatically after you Click on `Create Pipleine`. We can't edit the SourceArtifact Option in Pipeline Configuration, We only have option to manually edit after Pipeline Creation**<br>
**Now trigger the Pipeline by making a Changes in Respository**


![step-2 30](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/d8292195-65f3-4848-a7dc-d4e91e63ddfc)

![step-2 31](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/a7ea9cd5-1eca-4ca2-9bc2-fc48ec67edfc)

![step-2 32](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/ffdbeeed-3d54-4499-a3fd-266bc06034ba)

![step-2 33](https://github.com/mathesh-me/aws-cicd-devops-web-app/assets/144098846/e76c51fd-3240-470b-b574-62ddc8d414fe)
