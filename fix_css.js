function add_styles(styles_string) {
    let head = document.getElementsByTagName('head')[0];
    if (head) {
        const el_style = document.createElement('style');
        el_style.type = 'text/css';
        el_style.textContent = styles_string;
        head.appendChild(el_style);
    }
}

function fix_css() {
    console.group('fix_css:');

    let mystyles = (
        '#footer,' +
        '.navbar-fixed-top, .navbar-fixed-bottom {' +
        '    position: static;' +
        '    ' +
        '}' +
        '' +
        '#wrap {' +
        '    margin: 0;' +
        '}' +
        '' +
        '.container {' +
        '    margin: 0;' +
        '    padding: 0.5em;' +
        '    max-width: 100%;' +
        '}' +
        '' +
        'body {' +
        '    padding: 0;' +
        '}' +
        '' +
        '.radio, .checkbox {' +
        '    display: inline-block;' +
        '}' +
        '' +
        '' +
        '/* action button modifications */' +
        '' +
        '.container > table.hide_action_delete > tbody > tr > td >' +
        '    a[href*="projects/del/"] {' +
        '    display: none;' +
        '}' +
        '' +
        '.container > table.hide_action_accept > tbody > tr > td >' +
        '    form[action*="accept"] {' +
        '    display: none !important;' +
        '}' +
        '' +
        '.container .controls > label {' +
        '    margin-left: 1em;' +
        '    margin-right: 1em;' +
        '}' +
        '' +
        '/* show only unaccepted */' +
        '' +
        '.container > table.hide_entries_success > tbody > tr.success {' +
        '    display: none;' +
        '}' +
        '' +
        ''
    );

    add_styles(mystyles);

    console.groupEnd();
    console.log('');
}
