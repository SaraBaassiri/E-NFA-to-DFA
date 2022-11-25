function states() {
    var firstState = document.getElementById("firstState").value;
    console.log(firstState);
    document.getElementById("startState").innerHTML = firstState;

    var finalStates = document.getElementById("finalStates").value;
    console.log(finalStates);
    document.getElementById("endStates").innerHTML = finalStates;
    const states = finalStates.split(" ");

    var transitions = document.getElementById("transitions").value;
    console.log(transitions);
    document
        .getElementById("transitionTable")  
        .innerHTML = transitions;

    var input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("inputString").innerHTML = input;

    var inputArray = input.split("");
    console.log(inputArray);

    var transitionArray = transitions.split(" ");
    console.log(transitionArray);

    var transitionTable = [];
    for (var i = 0; i < transitionArray.length; i++) {
        transitionTable.push(transitionArray[i].split(","));
    }
    console.log(transitionTable);
}