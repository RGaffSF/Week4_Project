document.getElementById('Top10Lookup').addEventListener('click', function (event) {
    event.preventDefault();

    let movieGenre = document.getElementById('PickedGenre').value
    window.open('https://www.imdb.com/search/title/?genres=' + movieGenre + '&sort=user_rating&title_type=feature&num_votes=25000,');
   
    
})
    
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}    
