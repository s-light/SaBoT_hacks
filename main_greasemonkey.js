// ==UserScript==
// @name     Make Munich MOD
// @description fix some css things.. add some nice touches to UI
// @namespace   https://github.com/s-light/
// @include     https://projects.make-munich.de/projects/*
// @version  1.4.0
// @require https://raw.githubusercontent.com/s-light/SaBoT_hacks/master/fix_css.js
// @require https://raw.githubusercontent.com/s-light/SaBoT_hacks/master/ui_mod.js
// require https://raw.githubusercontent.com/s-light/SaBoT_hacks/master/worker_regex_gm_mini.js
// require https://raw.githubusercontent.com/s-light/SaBoT_hacks/master/export_mod.js
// ==/UserScript==
// https://wiki.greasespot.net/Metadata_Block#.40require

function start_script() {
    console.info('Make Munich MOD..');

    fix_css();
    ui_mod();
    // export_mod();

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
