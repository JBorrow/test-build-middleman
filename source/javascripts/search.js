//= require lunr.min

var searchIndexUrl = './index.json';

jQuery(function($) {
    var index,
        store,
        data = $.getJSON(searchIndexUrl);

    data.then(function(data){
        store = data.docs,
        // create index
        index = lunr.Index.load(data.index)
    });

    $('#search-field').keyup(function() {
        var query = $(this).val();
        if(query === ''){
            jQuery('#search-results').empty();
        }
        else {
            // perform search
            var results = index.search(query);
            data.then(function(data) {
                $('#search-results').empty().append(
                    results.length ?
                    results.map(function(result){
						ourinfo = store[result.ref];
						console.log(ourinfo);
                        var el = $('<p>')
                            .append($('<a>')
                                .attr('href', ourinfo.url)
                                .text(ourinfo.title)
                            );
						return el;
                    }) : $('<p><strong>No results found</strong></p>')
                );
            }); 
        }
    }); 
});
