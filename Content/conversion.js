function states() {
    var firstState = document.getElementById("firstState").value;
    console.log(firstState);
    document.getElementById("startState").innerHTML = firstState;

    var finalStates = document.getElementById("finalStates").value;
    console.log(finalStates);
    document.getElementById("endStates").innerHTML = finalStates;
    const states = finalStates.split(" ");


    var Transitions = [];

    Transitions.push(firstState);
    Transitions.push(finalStates);
    console.log(Transitions);

    // var transition = document.createElement("p");
    // var text = document.createTextNode(Transitions);
    // transition.appendChild(text);
    // var element = document.getElementById("transitions");
    // element.appendChild(transition);

    // //displaying the transitions
    // var transitions = document.getElementById("transitions").innerHTML;
    // console.log(transitions);

    //loop to display the transitions
    
    for (var i = 0; i < Transitions.length; i++) {
        var transition = document.createElement("p");
        var text = document.createTextNode(Transitions[i]);
        transition.appendChild(text);
        var element = document.getElementById("transitions");
        element.appendChild(transition);
    }
}