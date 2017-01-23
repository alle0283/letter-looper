var letter = prompt("Enter a letter please.");

while (letter === "") {
    letter;
}

var i;
var k;

//Write to HTML
for (i=0; i<10; i++) {
    for(k=0; k<=i; k++) {
        document.write(letter);
    }
    document.write("<br>");
}

//Print to Console Log
for (i=0; i<10; i++) {
    for(k=0; k<=i; k++) {
        console.log(letter);
    }
    console.log("\n");
}
