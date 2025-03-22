

     /*Ctrl+F*/
     var currentIndex = 0;
     var originalContent = document.getElementById("content").innerHTML;

     document.getElementById("search-form").addEventListener("submit", function (event) {
         event.preventDefault(); // prevent the form from submitting
         findText();
     });

     function findText() {
         var searchText = document.getElementById("search-input").value.toLowerCase();
         var content = originalContent.toLowerCase();
         var index = content.indexOf(searchText, currentIndex);
         if (index != -1) {
             // highlight the found text
             var newText = originalContent.substring(0, index) + "<span id='highlight'>" + originalContent.substring(index, index + searchText.length) + "</span>" + originalContent.substring(index + searchText.length);
             document.getElementById("content").innerHTML = newText;
             var highlightedElement = document.getElementById("highlight");
             highlightedElement.scrollIntoView(true); // scroll to the highlighted element
             highlightedElement.focus(); // focus on the highlighted element
             currentIndex = index + searchText.length; // update current index
         } else {
             alert("¡Llego al final del documento. Puede volver a intentarlo desde el principio!");
             currentIndex = 0; // reset index
         }
     }

     document.getElementById("search-input").addEventListener("keyup", function(event) {
        if (this.value.length > 0 && event.event.key !== 'Enter') { // Agregué event.keyCode !== 13
          currentIndex = 0;
        }
      });