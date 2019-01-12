// ==UserScript==
// @name     Make Munich MOD
// @description fix some css things.. add some nice touches to UI
// @namespace   https://github.com/s-light/
// @include     https://projects.make-munich.de/projects/*
// @version  1.4.0
// @require https://gist.githubusercontent.com/s-light/7860b4a8c72eeb1e8e5e5d3bd03cf048/raw/worker_regex_gm_mini.js
// @require https://gist.githubusercontent.com/s-light/7860b4a8c72eeb1e8e5e5d3bd03cf048/raw/fix_css.js
// @require https://gist.githubusercontent.com/s-light/7860b4a8c72eeb1e8e5e5d3bd03cf048/raw/ui_mod.js
// ==/UserScript==
// https://wiki.greasespot.net/Metadata_Block#.40require


function add_script(url, onload_function=undefined) {
    const script_el = document.createElement('script');
    script_el.addEventListener('load', function(event) {
        // console.info('script_el finished loading!', event);
        if (onload_function) {
            onload_function();
            // console.info('onload_function fired.!');
        }
    }, false);
    script_el.src = url;
    script_el.type = 'text/javascript';
    document.body.appendChild(script_el);
}


function start_script() {
    console.info('Make Munich MOD..');

    fix_css();
    ui_mod();

    console.info('all user scripting done.');
}

// console.clear();
console.info('******************************************');
start_script();

//console.info('Jamendo_FLAC_Down-loader is waiting for DOMContentLoaded');
document.addEventListener('DOMContentLoaded', function(event) {
    console.info('DOM fully loaded and parsed.', event);
});
document.addEventListener('load', function(event) {
    console.info('All resources finished loading!', event);
}, false);
