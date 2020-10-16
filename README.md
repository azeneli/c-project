# Canoe Project

Trial Project 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
git clone git@github.com:azeneli/c-project.git
```

```bash
npm i
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

```
docker build --tag sel-chrome .   
```

```
docker run sel-chrome .   
```

Note that you do not have to name it sel-chrome -> it can be a name of your choice

## Troubleshooting
-run node -v and make sure your node version is 8.x.x or greater
-Need to have Chrome Browser Version 86

- If not able to run tests afer 'npm test' then run: node_modules/.bin/webdriver-manager update
- Then try to run 'npm test' again

## Some Observations

When working on setting up the Docker image there was an [issue](https://bugs.chromium.org/p/chromedriver/issues/detail?id=2473#c6) that I kept running into. This potential bug was not allowing me run the tests inside the docker container. At least I'm assuming that it was this bug and not my code. 

In order to run the tests in the Docker container I had to run them headless

If you would like to see the Browser UI in action you will need to go to conf.js and remove these configurations: 
				"--no-sandbox",
                "--disable-dev-shm-usage",
                "--headless",
There you can see the browser UI in action. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
