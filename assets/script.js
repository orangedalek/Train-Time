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
	$('#train-name').val("");
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
	//variables for calculating next train

	//start 1 year ago to make sure we don't miss the train!
	var trainTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
		console.log(trainTimeConverted);

	//find difference in time between now and the next train		
	var diffTime = moment().diff(moment(trainTimeConverted), "minutes");
	console.log("difference", diffTime);

	// -calculate time between now & next train arrival

	var timeToNextTrain = diffTime % frequency;
	console.log("next", timeToNextTrain);

	var minTilTrain = frequency - timeToNextTrain;
	console.log("minutes", minTilTrain)
	// -calculate the next train arrival
	var nextTrain = moment().add(minTilTrain, "minutes");
	console.log("min tin next", nextTrain);

	// -append data to train table
	$('#train-table').append('<tr><td>' + trainName + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + moment(nextTrain).format('HH:mm') + '</td><td>' + minTilTrain + '</td></tr>');

	});





