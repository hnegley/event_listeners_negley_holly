var theForm = document.getElementById("myForm");

theForm.addEventListener( "submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById( "firstname" ).value;
    var lastName = document.getElementById( "lastname" ).value;
    var email = document.getElementById( "email" ).value;
    var message = document.getElementById( "message" ).value;

    console.log( 'The first name is: ' + firstName );
    console.log( 'The last name is: ' + lastName );
    console.log( 'The email is: ' + email );
    console.log( 'The message is: ' + message );
});
