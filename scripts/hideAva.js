var hideAva = document.querySelectorAll(".leftNavBorder");
for (var i = 0; i < hideAva.length; i++) {
   if ( $(hideAva[i]).find('.facetName').text() === "Availability") {
      $(hideAva[i]).css("display", "none");
   }
}