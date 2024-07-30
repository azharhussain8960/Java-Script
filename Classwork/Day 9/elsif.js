let day = prompt("Enter Day Here");
let today = "";

if(day == "monday"){
    today = "The First Day Of Week"
}else if (day == "tuesday") {
    today = "The Second Day Of Week"
}else if (day == "wednsday") {
    today = "The Third Day Of Week"
}else if (day == "thirdsday") {
    today = "The Fourth Day Of Week"
}else if (day == "friday") {
    today = "The Fifth Day Of Week"
}else if (day == "saterday") {
    today = "The Sixth Day Of Week"
}else if (day == "sunday") {
    today = "The Seventh Day Of Week"
}else{
    today = "Wrong Input"
}




document.write(`<h1>${today}</h1>`)
