let day = prompt("Enter Day Here");
let today = "";
switch (day){
    case("monday"):
    today = "The First Day Of Week"
    break
    case("tuesday"):
    today = "The Second Day Of Week"
    break
    case("wednesday"):
    today = "The Tird Day Of Week"
    break
    case("thirsdday"):
    today = "The Fourth Day Of Week"
    break
    case("friday"):
    today = "The Fifht Day Of Week"
    break
    case("saterday"):
    today = "The Sixth Day Of Week"
    break
    case("sunday"):
    today = "The Seventh Day Of Week"
    break
   default:
    today = "Worong input"
}
document.write(`<h1>${today}</h1>`)
