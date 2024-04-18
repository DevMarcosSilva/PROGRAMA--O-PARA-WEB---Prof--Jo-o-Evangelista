var x = 0;
var cont = 0;
x = prompt('Digite um valor ');
while (cont < x) {
    if (cont % 2 == 0) {
document.write("<p style='background-color: red; text-align: center; display: inline;'> " + cont + "</p>");
    } else {
document.write("<p style='background-color: orange; text-align: center; display: inline;'> " + cont + "</p>");
    }
    cont++;
}