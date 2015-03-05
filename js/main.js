var toClick = document.getElementsByTagName("h1");

toClick[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "This is click number x";

    var theContainer = document.getElementsByTagName( "container" );
    theContainer.appendChild( newPara );
    }
