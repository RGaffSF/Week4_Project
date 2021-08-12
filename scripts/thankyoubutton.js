let tyButton = document.getElementById('thankYou')
let addGif = document.getElementById('addGif')

tyButton.addEventListener('click', function () {
    let div = document.createElement("div")

    div.setAttribute("class","tenor-gif-embed")
    div.setAttribute("data-postid","9487479" )
    div.setAttribute("data-share-method","host")
    div.setAttribute("data-aspect-ratio","2.32")
    div.setAttribute("data-width","100%")
    addGif.appendChild(div);
    
    let img1 = document.createElement("img")
    img1.setAttribute("id","addGif")
    img1.setAttribute("src","https://c.tenor.com/n7V9rNUNEfkAAAAC/john-travolta-kiss.gif")

    addGif.appendChild(img1)
   
   
   //(<div class="tenor-gif-embed" data-postid="9487479" data-share-method="host" data-aspect-ratio="2.32" data-width="100%">
   //<a href="https://tenor.com/view/john-travolta-kiss-kisses-pulp-fiction-flirt-gif-9487479"></a>from <a href="https://tenor.com/search/john+travolta-gifs">John Travolta GIFs</a></div>) 
})



