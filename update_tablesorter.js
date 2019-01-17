
function add_search_fields() {
    // mod original search field
    const search_input = document.querySelector('input.search');
    search_input.type = 'search';
    search_input.placeholder = 'search any column';
    search_input.classList.remove('search');
    search_input.classList.add('search2');
    search_input.setAttribute('data-column', 'all');

    // add second one.
    const search_contact = document.createElement('input');
    search_contact.type = 'search';
    search_contact.placeholder = 'filter contact';
    search_contact.classList.add('form-control');
    search_contact.classList.add('search2');
    search_contact.setAttribute('data-column', '6');

    const search_contact_wrapper = document.createElement('div');
    search_contact_wrapper.classList.add('form-group');
    search_contact_wrapper.classList.add('pull-right');
    search_contact_wrapper.appendChild(search_contact);

    search_input.parentElement.parentElement.insertBefore(
        search_contact_wrapper,
        search_input.parentElement
    );
}

function init_tablesorter() {
    // init tablesorter
    $('.tablesorter').tablesorter({
        theme: 'blue',
        widgets: ['zebra', 'resizable', 'filter'],
        widgetOptions : {
            // https://mottie.github.io/tablesorter/docs/example-widget-filter-any-match.html
            // Set to use a jQuery selector (or jQuery object) pointing to the
            // external filter (column specific or any match)
            filter_external : '.search2',
            // add a default type search to the first name column
            filter_defaultFilter: { 6 : '~{query}' },
            // include column filters
            filter_columnFilters: false,
            // filter_placeholder: { search : 'Search...' },
            filter_saveFilters : true,
            // filter_reset: '.reset',
            resizable: true,
        },
    });
}

function update_tablesorter() {
    console.info('update_tablesorter()');

    add_search_fields();
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
