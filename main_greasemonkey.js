// ==UserScript==
// @name     SaBoT MOD
// @description fix some css things.. add some nice touches to UI
// @namespace   https://github.com/s-light/
// @include     https://YOURURLTO_SaBoT/projects/*
// @version  1.6.0
// @require https://s-light.github.io/SaBoT_hacks/fix_css.js
// @require https://s-light.github.io/SaBoT_hacks/ui_mod.js
// @require https://s-light.github.io/SaBoT_hacks/tablesorter/jquery.tablesorter.js
// @require https://s-light.github.io/SaBoT_hacks/tablesorter/jquery.tablesorter.widgets.js
// @require https://s-light.github.io/SaBoT_hacks/update_tablesorter.js
// export_mod not useful anymore - CSV export is gone :-(
// require https://s-light.github.io/SaBoT_hacks/export_mod.js
// https://wiki.greasespot.net/Metadata_Block#.40require
// ==/UserScript==

function start_script() {
    console.info('SaBoT MOD..');

    fix_css();
    ui_mod();
    // export_mod();

    console.info('all user scripting done.');
}

// console.clear();
console.info('******************************************');
start_script();
