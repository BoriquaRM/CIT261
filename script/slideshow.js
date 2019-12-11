var slides = 0;
slideshow();

function slideshow() {
	var y;
	var x = document.getElementsByClassName("mySlides");
	for (y = 0; y < x.length; y++) {
		x[y].style.display = "none";  
	}
	slides++;
	if (slides > x.length) 
	{slides = 1}    
	x[slides-1].style.display = "block";  
	setTimeout(slideshow, 9000);    
}