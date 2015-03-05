var toClick = document.getElementsByTagName("button");

toClick[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "Thanks for clicking me!";

    var theContainer = document.getElementsByTagName( "whoa" );
    theContainer.appendChild( newPara );
});

    //My event listerner is listening for a click of the button. When it gets the click, it spits out a line of text in the paragraph tag that says "Thanks for clicking me!"//

var toClick = document.getElementsByTagName("h2");

toClick[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "This is the start of my second paragraph";

    var theContainer = document.getElementsByTagName( "yeah" );
    theContainer.appendChild( newPara );
});

    //This event listener is listening for a click of the the words in the h2 tag. When they are clicked, it spits out text that says "This is the start of my second paragraph"//

 var toClick = document.getElementsByTagName("p");

toClick[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "Really? Okay.";

    var theContainer = document.getElementsByTagName( "okay" );
    theContainer.appendChild( newPara );
});

    //This event listener is listening for a click of the the words in the p tag with the id of okay. When they are clicked, it spits out text that says "Really? Okay."//
