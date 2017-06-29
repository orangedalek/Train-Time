// step 1: initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzVf-3aciDhu6TpkXWhF0Vzn4lYwnz8cY",
    authDomain: "im-on-a-train.firebaseapp.com",
    databaseURL: "https://im-on-a-train.firebaseio.com",
    projectId: "im-on-a-train",
    storageBucket: "im-on-a-train.appspot.com",
    messagingSenderId: "160154637367"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Step 2: Make submit button send train data to Firebase and
  	// -make a click function & prevent daefault
  	// -assign value to variables Train Name, destination, First train tome & frequency
  	// -make object of variable keys/values
  	// -push to firebase
  	// -alert user that train has been added
  	// -clear form

  // Step 3: when child is added, get info back from firebase
  	// -store into variables
  	// -format the time
  	// -calculate the next train arrival
  	// -calculate time between now & next train arrival
  	// -append data to train table