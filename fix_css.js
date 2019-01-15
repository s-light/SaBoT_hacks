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
    let table = document.querySelector('table');
    if (table) {
        const el_wrapper = document.createElement('div');
        el_wrapper.classList.add('table_wrapper');
        // move table as child to wrapper..
        table.parentElement.appendChild(el_wrapper);
        el_wrapper.appendChild(table);
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

    console.groupEnd();
    console.log('');
}
