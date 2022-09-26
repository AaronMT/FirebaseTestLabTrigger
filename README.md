# FirebaseTestLabTrigger

1. Clone or download this repo and open the `FirebaseTestLabTrigger`
   directory.
2. You must have the Firebase CLI installed. If you don't have it install it
   with `npm install -g firebase-tools` and then configure it with
   `firebase login`.
3. Configure the CLI locally by using `firebase use --add` and select your
   project in the list.
4. Install Cloud Functions dependencies locally by running:
   `cd functions; npm install; cd -`

## Deploy and test

1.  Deploy your function using `firebase deploy --only functions`
2.  Navigate to the
    [Test Lab](https://console.firebase.google.com/u/0/project/_/testlab/histories)
    section of the Firebase Console and start a test.
1.  Once the test finishes running,
    [view the functions logs](https://console.firebase.google.com/u/0/project/_/functions/logs?severity=DEBUG)
    for your project, and check that the test run status was logged.