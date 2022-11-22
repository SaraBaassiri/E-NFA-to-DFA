function states() {
    var firstState = document.getElementById("firstState").value;
    console.log(firstState);
    document.getElementById("startState").innerHTML = firstState;

    var finalStates = document.getElementById("finalStates").value;
    console.log(finalStates);
    document.getElementById("endStates").innerHTML = finalStates;
    const states = finalStates.split(" ");

    
}