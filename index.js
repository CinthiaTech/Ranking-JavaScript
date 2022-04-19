function position(firstPlace, secondPlace, lastPlace) {
    let array = [firstPlace, secondPlace, lastPlace]

    if ("Daniel" === lastPlace) {
        return "1º Colocado " + firstPlace + " 2º Colocado " + lastPlace + " 3º Colocado " + secondPlace;
    } else if ("Daniel" === secondPlace) {
        return "1º Colocado " + secondPlace + " 2 º Colocado " + firstPlace + " 3 º Colocado " + lastPlace;
    }
    return "1º Colocado  " + firstPlace + " 2º Colocado  " + secondPlace + " 3º Colocado " + lastPlace;
}
console.log(position("Rafael", "Manoel", "Daniel"))