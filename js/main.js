var theForm = document.getElementById("myForm");

theForm[0].addEventListener( "submit", function() {
    var newPara = document.createElement( "p" );
    newPara.innerHTML = "What a beautiful site!";

    var theContainer = document.getElementsByTagName( "container" );
    theContainer.appendChild( newPara );
    }
);
