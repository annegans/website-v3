window.addEventListener("load", function(){
  var thumbnails = document.querySelectorAll(".carousel li");
  var description = document.querySelectorAll(".carousel-description li");
  for(i = 0; i  < thumbnails.length; i++) {
    (function () {
      var index = i;
      thumbnails[i].addEventListener("click", function() {
        for(j = 0; j < thumbnails.length; j++) {
          thumbnails[j].className = "";
          description[j].className = "";
        }
        thumbnails[index].className = "active";

        console.log(index);
        if (index > 0 && index < 2) {
          thumbnails[index - 1].className = "prev";
          thumbnails[index + 1].className = "next";
        } else if(index == 0) {
          thumbnails[2].className = "prev";
          thumbnails[index + 1].className = "next";
        } else if(index == 2) {
          thumbnails[0].className = "next";
          thumbnails[index - 1].className = "prev";
        }

        description[index].className = "active";
      });
    }());
  }
});