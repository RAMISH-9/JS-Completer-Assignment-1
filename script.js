
document.getElementById("alertString").onclick = function () {
    alert("Muhammad Ramish Azam")
document.getElementById("statement").innerHTML = 'alert("Muhammad Ramish Azam")';
}

document.getElementById("clearset").onclick = function () {
    document.getElementById("statement").innerHTML= '';
}

// Alert-Number 

document.getElementById("alertNumber").onclick = function () {
    alert("WMA-185479")
document.getElementById("statement").innerHTML = 'alert("123")';
}

// Varible Names

document.getElementById("variableNames").onclick = function () {
    let html = "<ul><li>A varible name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs and underscores.</li><li>Through a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code> and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty. </li></ul>";
    document.getElementById("output").innerHTML = html;
}
document.getElementById("clearop").onclick = function () {
    document.getElementById("output").innerHTML= '';
}
// camelCase 

document.getElementById("camleCaseExamples").onclick = function () {
    let html1 = "<ul><h3>For Exmaple</h3><li>user</li><li>userResponse</li><li>userResponeTime</li><li>userResponeTimeLimit</li></ul>";
    document.getElementById("output").innerHTML = html1;
}

// sum2Numbers

document.getElementById("sum2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + sum + "</p>";
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 + num2;";
    document.getElementById("statement").innerHTML = statement;
}

// subtract2Numbers

document.getElementById("subtract2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let subtract = num1 - num2;
    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + subtract + "</p>";
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 - num2;";
    document.getElementById("statement").innerHTML = statement;
}

// mutliply2Numbers

document.getElementById("mutliply2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let multiply = num1 * num2;
    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + multiply + "</p>";
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let multiply = num1 * num2;";
    document.getElementById("statement").innerHTML = statement;
}

// divide2Numbers

document.getElementById("divide2Numbers").onclick = function () {
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + divide + "</p>";
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let multiply = num1 / num2;";
    document.getElementById("statement").innerHTML = statement;
}

// calculateSomeNumbers

document.getElementById("calculateSomeNumbers").onclick = function () {
    let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    document.getElementById("statement").innerHTML = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);";
    document.getElementById("output").innerHTML = "<p class = 'text-center'>" + someCalculation + "</p>";
}

// Clearing Butoon

document.getElementById("clearop").onclick = function () {
    document.getElementById("output").innerHTML= '';
}

document.getElementById("clearset").onclick = function () {
    document.getElementById("statement").innerHTML= '';
}