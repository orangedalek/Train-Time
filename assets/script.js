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

  console.log("hello!");

  // Step 2: Make submit button send train data to Firebase and
	// -make a click function & prevent default

$('#submit-button').on('click', function(event) {
	event.preventDefault();
	console.log("hi!");
// -assign value to variables Train Name, destination, First train time & frequency
	var trainName = $('#train-name').val().trim();
	var destination = $('#destination').val().trim();
	var firstTrainTime = $('#first-train-time').val().trim();
	var frequency = $('#frequency').val().trim();
// -make object of variable keys/values
	var newTrain = {
		trainName: trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	};
// -push to firebase

	database.ref().push(newTrain);

	console.log(newTrain);
// -alert user that train has been added
	alert("Thank you for telling us of this wonderful new choo choo machine!");
// -clear form
	$('#trainName').val("");
	$('#destination').val("");
	$('#first-train-time').val("");
	$('#frequency').val("");
	console.log("clear!");
});

// Step 3: when child is added, get info back from firebase
	database.ref().on("child_added", function(childSnapshot, prevChildKey){
	// -store into variables
		var trainName = childSnapshot.val().trainName;
		var destination = childSnapshot.val().destination;
		var firstTrainTime = childSnapshot.val().firstTrainTime;
		var frequency = childSnapshot.val().frequency;

	// -format the time
	var currentTime = moment().format("HH:mm");
	// iterate over times the train will come
	

	// -calculate the next train arrival
	// -calculate time between now & next train arrival
	// -append data to train table
	})