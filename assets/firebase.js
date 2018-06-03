

// Create a variable to reference the database
var database = firebase.database();
var trainList = database.ref("train_list")
// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var train = "";
var destination = "";
var frequency = "";

// Click Button changes what is stored in firebase
$("#new-train-btn").on("click", function (event) {
    console.log("click")
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    train = $("#train-name-input").val().trim();
    destination = $("#train-destination-input").val().trim();
    startTime = $("#train-time-input").val().trim();
    frequency = $("#train-frequency-input").val().trim();

    // add to firebase
    trainList.push({
        train: train,
        destination: destination,
        startTime: startTime,
        frequency: frequency,
    });
    // clear the inputs
    $("#train-name-input").val("");
    $("#train-destination-input").val("");
    $("#train-time-input").val("");
    $("#train-frequency-input").val("");

});

// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
trainList.on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainStartTime = childSnapshot.val().startTime;
    var trainFrequency = childSnapshot.val().frequency;


    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStartTime);
    console.log(trainFrequency);

    // // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

    // // Calculate the months worked using hardcore math
    // // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");
    // console.log(empMonths);

    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);

    // // Add each train's data into the table
    // $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
    //     empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");


});
