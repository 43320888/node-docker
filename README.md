# GitHub Action CI/CD pipeline with Docker containers
[NodeJS-specific guide](https://docs.docker.com/language/nodejs/configure-ci-cd/)
## our flows
### Flow for our pull requests:
- Change how the image is tagged. Edit line 44 of the file before prototyping this *.github/workflows/github_registry.yml* in new pipelines
### Flow for our changes to master: 
- Change how the image is tagged. Edit line 42 of the file before prototyping this *.github/workflows/main.yml* in new pipelines