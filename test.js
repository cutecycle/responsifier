var useragent = require('useragent');
import UserAgent from 'user-agents';

var pageWidth = document.body.scrollWidth
var viewportWidth = window.innerWidth
var tooWide = (pagewidth > viewportWidth)

const mobileUserAgent = new UserAgent({ deviceCategory: 'mobile' })

const saveOffender = function(uri){

}
const makeitfit = function () { 
    chrome.runtime.sendMessage({
        type: 'setUA',
        ua: mobileUserAgent.
    });

	
	
  
}