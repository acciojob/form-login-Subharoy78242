function getFormvalue() {
    // Prevent form from submitting
    event.preventDefault();

    // Get the values from the form inputs
    const firstName = document.getElementsByName('fname')[0].value;
    const lastName = document.getElementsByName('lname')[0].value;

    // Display the values in an alert
    alert(firstName + " " + lastName);
}