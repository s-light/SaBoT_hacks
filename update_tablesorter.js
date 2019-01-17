
function init_tablesorter() {
    // init tablesorter
    $('.tablesorter').tablesorter({
        // theme: 'blue',
        // widgets: ['filter'],
        widgets: ['zebra', 'resizable', 'filter'],
        widgetOptions : {
            // https://mottie.github.io/tablesorter/docs/example-widget-filter-any-match.html
            // Set to use a jQuery selector (or jQuery object) pointing to the
            // external filter (column specific or any match)
            filter_external : '.search',
            // add a default type search to the first name column
            filter_defaultFilter: { 6 : '~{query}' },
            // include column filters
            filter_columnFilters: true,
            // filter_placeholder: { search : 'Search...' },
            filter_saveFilters : true,
            // filter_reset: '.reset',
        },
    });
}

function update_tablesorter() {
    console.info('update_tablesorter()');

    init_tablesorter();

    console.info('update_tablesorter done.');
}


// console.clear();
// console.info('******************************************');

// document.addEventListener('DOMContentLoaded', function(event) {
//     console.info('DOM fully loaded and parsed.', event);
//     // ui_mod();
// });
// document.addEventListener('load', function(event) {
//     console.info('All resources finished loading!', event);
// }, false);
