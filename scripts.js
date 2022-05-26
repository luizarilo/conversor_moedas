let dolarValue = 4.82;
let euroValue = 5.14;



function teste() {
    let chosenOption1 = document.getElementById("firstChoice");
    let chosenOption2 = document.getElementById("secondChoice");
    var valueToConvert = document.getElementById("valueToConvert").value;
    console.log(chosenOption1.selectedIndex);
    console.log(chosenOption2.selectedIndex);
    console.log(valueToConvert);

    if (chosenOption1.selectedIndex == 1 && chosenOption2.selectedIndex == 2) { //Convertendo Dólar para Real
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert * dolarValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de dolar para real fica: R$" + convertionRounded);
    } else if (chosenOption1.selectedIndex == 3 && chosenOption2.selectedIndex == 2) { // Convertendo Euro para Real
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert * euroValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de euro para real fica: R$" + convertionRounded);
    } else if (chosenOption1.selectedIndex == 2 && chosenOption2.selectedIndex == 1) { //Convertendo de Real para dólar
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert / dolarValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de real para dólar fica: US$" + convertionRounded);
    } else if (chosenOption1.selectedIndex == 2 && chosenOption2.selectedIndex == 3) { //Convertendo de Real para Euro
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert / euroValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de real para euro fica: €" + convertionRounded);
    } else if (chosenOption1.selectedIndex == 1 && chosenOption2.selectedIndex == 3) { //Convertendo de Dólar para Euro
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert * dolarValue / euroValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de dólar para euro fica: €" + convertionRounded);
    } else if (chosenOption1.selectedIndex == 3 && chosenOption2.selectedIndex == 1) { //Convertendo de Euro para Dólar
        let convertionBrToDo = 0;
        convertionBrToDo = valueToConvert * euroValue / dolarValue;
        let convertionRounded = parseFloat(convertionBrToDo.toFixed(2));
        document.getElementById("myText").innerHTML = ("A conversão de euro para para fica: US$" + convertionRounded);
    }else{
        document.getElementById("myText").innerHTML = ("Escolha uma opção de conversão válida!");
    }

}