# DEPLOYMENT STEPS

### SETUPING FIREBASE
<ul>
  <li>Navigate to https://console.firebase.google.com/ and sign in</li>
  <li>Click "create new project" button and fill in required fields </li>
  <li>After successfully creating project, it is necessary to continue navigating to "project settings" (next to the "overview" is an icon, look to the top left corner).
  <li>Afterwards, it is necessary to click on "service accounts" tab in navigation menu.</li>
  <li>In the tab is a button called "generate private key" which will generate credentials for the project.</li>
  <li>Then the user should automatically receive an option to download credentials in form of a JSON file. It is necessary to keep this JSON somewhere safe.</li>
  <li>Another option is navigating straight to the <strong>https://console.firebase.google.com/project/name_of_your_firebase_project/settings/serviceaccounts/adminsdk</strong>.
Be aware that user interface or link can change in future.</li>
  <li>Copy generated credentials(JSON file downloaded from firebase console) to conf/LocalizationManagerCredentials.json inside BACKEND application folder.
</li>
  <li>Continue by setting firebase.databaseUrl in conf/firebase.conf file to the url of firebase real-time database.
Again, this can be found in firebase console.
File located on github: https://github.com/Martinator112/prototype_localization_manager_api/blob/master/conf/firebase.conf .
</li>

</ul>

<h1> SETUPING OAUTH2 </h1>
In this step you can use guide provided by google on URL: https://developers.google.com/identity/sign-in/web/devconsole-project.
<ul>
  <li>
    Navigate to URL https://console.developers.google.com
  </li>
  
  <li>
    In the upper navigation menu there should be a project dropdown.
    Click on the dropdown and create new project by selecting "Create a new project".
  </li>
    
  <li>
    Select the appropriate name for project and continue by clicking the "OK" button.
  </li>
  <li>
  Continue by selecting "Credentials" in left sidebar.
  </li>

  <li>
  Next, click on the "OAuth consent screen" in the Credentials tab menu.
  </li>
  Choose your product(project) name and fill it into field "Product name shown to users" and save.
  <li>
  Continue by selecting "Credentials" tab. Next, click on the "Create credentials" button and select "OAuth client ID".
  </li>
  Continue by selecting "Web Application".
  <li>
  Afterwards, fill in frontend url into "Authorized JavaScript origins" section(e.g. https://myFrontEndServer.com).
  </li>
  <li>
  Continue by filling in backend url handling redirection (e.g. https://myBackendHost/auth/google/handler) into  "Authorized redirect URIs" section. The redirect URI need to be in this format: [scheme]://[host]/auth/google/handler.
  </li>
  <li>
  Do not forget to click "Create" button and check the fields. Also fill in this redirect URI into 
  "locale_manager.conf" inside <em>conf</em> folder in BACKEND application.
  </li>
  <li>
  You will be prompted with you client ID and client secret.
  You need to copy this into "conf/locale_manager.conf" file inside the back-end application folder.
  </li>
    
</ul>


<h1> CONFIGURING FRONTEND </h1>

<ul>
  <li>
    Locate "app.config.json" file inside <em>src</em> folder in the front-end application.
    Fill in the URL of backend application.
  </li>
</ul>

<h1> CONFIGURING BACKEND </h1>
<ul>
  <li>
    Continue by steps provided in the back-end application folder in README file.
  </li>
</ul>
