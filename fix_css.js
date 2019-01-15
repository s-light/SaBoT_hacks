function add_css_file(url) {
    let head = document.querySelector('head');
    if (head) {
        const el_link = document.createElement('link');
        el_link.type = 'text/css';
        el_link.rel = 'stylesheet';
        el_link.href = url;
        head.appendChild(el_link);
    }
}

// function add_styles(styles_string) {
//     let head = document.querySelector('head');
//     if (head) {
//         const el_style = document.createElement('style');
//         el_style.type = 'text/css';
//         el_style.textContent = styles_string;
//         head.appendChild(el_style);
//     }
// }


function add_table_wrapper() {
    console.log('add_table_wrapper...');
    const table = document.querySelector('table');
    if (table) {
        const el_wrapper = document.createElement('div');
        el_wrapper.classList.add('table_wrapper');
        // move table as child to wrapper..
        table.parentElement.appendChild(el_wrapper);
        el_wrapper.appendChild(table);
    }
}

function apply_folding_footer() {
    console.log('apply_folding_footer...');
    const footer = document.querySelector('#footer');
    if (footer) {
        const el_details = document.createElement('details');
        el_details.classList.add('footer');
        const el_sum = document.createElement('summary');
        el_sum.appendChild(document.createTextNode('info footer'));
        el_details.appendChild(el_sum);

        // move footer as child to details..
        footer.parentElement.appendChild(el_details);
        el_details.appendChild(footer);
    }
}

function apply_folding_header() {
    console.log('apply_folding_header...');
    const header = document.querySelector('nav.navbar-fixed-top');
    if (header) {
        const el_details = document.createElement('details');
        el_details.classList.add('header');
        const el_sum = document.createElement('summary');
        el_sum.appendChild(document.createTextNode('header'));
        el_details.appendChild(el_sum);

        // move header as child to details..
        header.parentElement.appendChild(el_details);
        el_details.appendChild(header);
    }
}

function fix_css() {
    console.group('fix_css:');
    add_css_file(
        'https://s-light.github.io/SaBoT_hacks/fix_css.css'
    );
    add_css_file(
        'https://s-light.github.io/SaBoT_hacks/table_freeze.css'
    );

    add_table_wrapper();

    apply_folding_footer();
    apply_folding_header();

    console.groupEnd();
    console.log('');
}
