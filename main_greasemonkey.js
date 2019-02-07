// ==UserScript==
// @name     SaBoT MOD
// @description fix some css things.. add some nice touches to UI
// @namespace   https://github.com/s-light
// @include     https://YOURURLTO_SaBoT/projects/*
// @version  1.11.0
// @require https://s-light.github.io/SaBoT_hacks/fix_css.js
// @require https://s-light.github.io/SaBoT_hacks/ui_mod.js
// @require https://s-light.github.io/SaBoT_hacks/hide_columns.js
//
// old / history:
// --- tablesorter update is landed in SaBot :-) not needed anymore!
// left here to test something else where option adjust is needed..
// require https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js
// require https://s-light.github.io/SaBoT_hacks/tablesorter/js/jquery.tablesorter.js
// require https://s-light.github.io/SaBoT_hacks/tablesorter/js/jquery.tablesorter.widgets.js
// require https://s-light.github.io/SaBoT_hacks/update_tablesorter.js
// export_mod not useful anymore - CSV export is gone :-(
// require https://s-light.github.io/SaBoT_hacks/export_mod.js
//
// https://wiki.greasespot.net/Metadata_Block#.40require
// ==/UserScript==

function start_script() {
    console.info('SaBoT MOD..');

    fix_css();
    ui_mod();
    start_hide_columns();

    // export_mod();
    // update_tablesorter();

    console.info('all user scripting done.');
}

// console.clear();
console.info('******************************************');
start_script();
