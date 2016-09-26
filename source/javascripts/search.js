//= require lunr.min

var lunrIndex = null;
var lunrData  = null;

// Download index data
$.ajax({
  url: '/index.json',
  cache: true,
  method: 'GET',
  success: function(data) {
    lunrData = data;
  }
});

lunrIndex = lunrData[0];

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

console.log(lunrIndex.search($_GET['search']))
