// has access to current page, not to all Chrome APIs

// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
     	convert_page();
    }
  }
);

function convert_page() {
	// yes this works!! with a screen reader
	$("h1").prepend("<p>testing</p>");
}