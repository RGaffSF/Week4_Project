let coll = document.getElementsByClassName("collapsible2");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("reveal");
    const inner = this.innerHTML;
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.innerHTML = " + " + inner.substring(3,inner.length)
    } else {
      content.style.display = "block";
      this.innerHTML = " - " + inner.substring(3,inner.length)
         
    }
  });
}


