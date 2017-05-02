## Environment requirements
- Have node(preferably v6.10.2 or higher) and npm(preferably 3.10.10 or higher) installed

## Configuring application
- Run `npm install`
- Locate "app.config.json" file inside src folder. Fill in the URL of the deployed backend application.
- Run `npm run build`
- `git add . && git commit -m "Compiling src folder to dist for deployment"`

## Deployment to HEROKU
- Create account on heroku
- Install heroku locally - tutorial is here https://devcenter.heroku.com/articles/heroku-cli
- Enter `heroku login` from the command line and enter credentials
- In the root folder enter `heroku create` (and save the url of deployed application, it will be printed out to standard output -e.g. terminal, or you can later find it on their website in the dashboard section)
- Then proceed with the step configuring application
- Then make sure everything is added to git -> `run git add . && git commit -m "Heroku deployment"`
- `git push heroku master`
- Application should be deployed :)

