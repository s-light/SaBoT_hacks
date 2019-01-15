// ==UserScript==
// @name     SaBoT MOD
// @description fix some css things.. add some nice touches to UI
// @namespace   https://github.com/s-light/
// @include     https://YOURURLTO_SaBoT/projects/*
// @version  1.5.0
// @require https://s-light.github.io/SaBoT_hacks/fix_css.js
// @require https://s-light.github.io/SaBoT_hacks/ui_mod.js
// @require https://s-light.github.io/SaBoT_hacks/export_mod.js
// ==/UserScript==
// https://wiki.greasespot.net/Metadata_Block#.40require

function start_script() {
    console.info('SaBoT MOD..');

    fix_css();
    ui_mod();
    export_mod();

    console.info('all user scripting done.');
}

// console.clear();
console.info('******************************************');
start_script();
