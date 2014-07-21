function appendVal(id){
    var val = document.getElementById(id).value;
    document.getElementById("calc_input").value += val;
}

function getresult(){
    var val = eval(document.getElementById("calc_input").value);
    document.getElementById("calc_input").value = val;
}

function clearme(){
    document.getElementById("calc_input").value = "";
}
