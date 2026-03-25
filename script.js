alert("JS connected!");
function analyzeText(){
    let text = document.getElementById("inputText").Value;

    if(text.trim() == ""){
        document.getElementById("result").innerHTML = "Please enter some text";
        return;
    }

    let charCount = text.length;

    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    let reversedText = text.split("").reverse().joint("");

    document.getElementById("result").innerHTML = 
    "<h3>Analysis Result:</h3>"+
    "<p><b>Total Characters:</b> ${charCount}</p>"+
    "<p><b>Total Words:</b> ${wordCount}</p>"+
    "<p><b>Reversed Text:</b> ${reversedText}</p>"
;


}