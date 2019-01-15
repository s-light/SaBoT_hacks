function add_css_file(url) {
    let head = document.getElementsByTagName('head')[0];
    if (head) {
        const el_link = document.createElement('link');
        el_link.type = 'text/css';
        el_link.rel = 'stylesheet';
        el_link.href = url;
        head.appendChild(el_link);
    }
}

// function add_styles(styles_string) {
//     let head = document.getElementsByTagName('head')[0];
//     if (head) {
//         const el_style = document.createElement('style');
//         el_style.type = 'text/css';
//         el_style.textContent = styles_string;
//         head.appendChild(el_style);
//     }
// }

function fix_css() {
    console.group('fix_css:');
    add_css_file(
        'https://s-light.github.io/SaBoT_hacks/fix_css.css'
    );
    add_css_file(
        'https://s-light.github.io/SaBoT_hacks/table_freeze.css'
    );
    console.groupEnd();
    console.log('');
}
