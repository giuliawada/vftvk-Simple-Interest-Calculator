function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("sliderRange").value;
    var y = document.getElementById("years").value;
    var future = 2021 + parseInt(y);

    if (p < 1) {
        alert("Please enter a positive number");
    } else {
        document.getElementById("result").innerHTML = "<br />If you deposit <mark>" + p + "</mark> <br />" + 
        "at an interest rate of <mark>" + r + "%</mark>." + "<br />" +
        "You will receive an amout of <mark>" + p*r*y/100 + "</mark>," + "<br />" +
        "in the year of <mark>" + future + "</mark>";
    }
}

var rangeslider = document.getElementById("sliderRange");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
}

function showCount() {
    var count = document.getElementById("sliderRange").value;
    document.getElementById("counter").innerHTML = count + "%";
}