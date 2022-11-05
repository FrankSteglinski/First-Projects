//20221104
//Predict the output for the following code snippets

function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
displayContactInfo();
//Predicted Output: "Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345"
//Actual Output: ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345"]

function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}
displayGrocerylist();
//Predicted Output: ["broccoli", "ice cream", "hashbrowns"]
//Actual Output: ["broccoli", "ice cream", "hashbrowns"]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
//["Bambi", "E.T.", "Toy Story", "Zoro"];
movieLibrary[1] = "Beetlejuice";
//["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
console.log(movieLibrary);
//Predicted Output: ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
//Actual Output: [ 'Bambi', 'Beetlejuice', 'Toy Story', 'Zoro' ]