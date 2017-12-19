function checkPrime(number) {
    if (number % 1 !== 0 || number <= 0) {
        return "not prime";
    }

    for (i = 2; i <= (number) / 2; i++) {
        if (number % i == 0) {
            return "not prime";
        }

    }
    return "prime";
}
function timesTable(number) {
    var rows = number;
    var cells = number;
    document.write("<table>");
    for (i = 1; i <= rows; i++) {
        document.write("<tr>");
        for (j = 1; j <= cells; j++) {
            document.write("<td>", i * j, "</td>");
        }
        document.write("</tr>");
    }
    return ("</table>");
}

