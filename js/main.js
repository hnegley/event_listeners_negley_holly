var fillOut = document.getElementsByTagName("submit");

fillOut[0].addEventListener( "click", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "What a beautiful site!";

    var theContainer = document.getElementsByTagName( "container" );
    theContainer.appendChild( newPara );
    }
);
