let coll = document.getElementsByClassName("collapsible2");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("reveal");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      return coll.getElementsByTagName("span") = " - "
    } else {
      content.style.display = "block";
    }
  });
}


// function minussign () {

// let test = document.getElementsByClassName("collapsible2").innertext
// console.log(test);
// let test = document.getElementsByClassName("collapsible2").span.innertext = " +  Django Unchained"
// console.log(test);
// }

