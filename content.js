// has access to current page, not to all Chrome APIs

// converts page when user clicks on 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
     	convert_page();
    }
  }
);

function convert_page() {
	// yes this works!! with ChromeVox screen reader
	// I don't understand how to test with VoiceOver but will keep trying
	$("h1").prepend("<p>testing</p>");
}