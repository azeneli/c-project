# Canoe Project

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
git clone git@github.com:azeneli/c-project.git
```

```bash
npm i or npm install
```

## Usage

To Run Both Tests 
```
npm test   
```
To Run Tests Separetely

```
npm run vueDemo   
```

```
npm run markJsConfig   
```

To Run Tests in Docker

- Requirements: Need to have [Docker](https://www.docker.com/products/docker-desktop) installed
- Start Docker after installation
- This will run both test suites by default

Note that you do not have to name it sel-chrome -> it can be a name of your choice

```
docker build --tag sel-chrome .   
```

```
docker run sel-chrome .   
```

To Run Tests with Docker Command:

```
docker run sel-chrome npm run vueDemo  
```

```
docker run sel-chrome npm run markJsConfig  
```

To run separate test suites inside the container:

```
docker run -it --entrypoint /bin/bash sel-chrom
```
Once inside the container run either command: 

```
npm run vueDemo

```
```
npm run markJsConfig   
```

## Troubleshooting
-run node -v and make sure your node version is 13.x.x or greater
-Need to have Chrome Browser Version 86

- If not able to run tests afer 'npm test' then run: node_modules/.bin/webdriver-manager update
- Then try to run 'npm test' again

## Some Observations

When working on setting up the Docker image there was an [issue](https://bugs.chromium.org/p/chromedriver/issues/detail?id=2473#c6) that I kept running into. This potential bug was not allowing me run the tests inside the node docker container. At least I'm assuming that it was this bug.

In order to run the tests in the Docker container I had to run them headless

If you would like to see the Browser UI in action you will need to go to conf.js and remove these configurations: 
				"--no-sandbox",
                "--disable-dev-shm-usage",
                "--headless",
There you can see the browser UI in action. 


