var toClick = document.getElementsByTagName("h1");

var clickCount = 1;

toClick[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "This is click number " + clickCount;

    clickCount = clickCount + 1;

    var theContainer = document.body;
    theContainer.appendChild( newPara );
    }
);
