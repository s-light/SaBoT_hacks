
function load_content(url, onload_function) {
    console.log('load_content');
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        // Process the server response here.
        try {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    // console.log(httpRequest.responseText);
                    onload_function(httpRequest.responseText);
                } else {
                    console.error('There was a problem with the request.');
                }
            }
        }
        catch (e) {
            console.error('Caught Exception: ' + e.description);
        }
    };
    httpRequest.open(
        'GET',
        url,
        true
    );
    httpRequest.send();
}

function saveAsFile(link, content, filename, extension='.csv') {
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // var aFileParts = ['<a id='a'><b id='b'>hey!</b></a>'];
    // var oMyBlob = new Blob(aFileParts, {type: 'text/html'}); // the blob

    // http://stackoverflow.com/a/16330385/574981
    var blob = new Blob([content], {type: 'text/csv'});
    var url = URL.createObjectURL(blob);

    console.log('update download link:');
    const a = document.createElement('a');
    // const a = link;
    a.download = filename + extension;
    a.href = url;
    a.target = '_blank';
    // a.textContent = 'Download File';
    console.log('download link:', a);
    // console.log('open download link:', a);
    document.body.appendChild(a);
    a.click();
    a.remove();

}



function add_nav_button(
    link_text,
    onclick,
    parent_el=undefined
) {
    console.group('add_nav_button:');

    const link_new = document.createElement('a');
    link_new.appendChild(document.createTextNode(link_text));
    link_new.onclick = onclick;
    link_new.type = 'button';

    const li_new = document.createElement('li');
    li_new.classList.add('pull-right');
    li_new.appendChild(link_new);

    if (parent_el == undefined) {
        parent_el = document.querySelector('.container > ul.nav');
    }
    parent_el.appendChild(li_new);

    console.groupEnd();
    console.log('');
    return link_new;
}



function escape_csv_in_background(csv_raw, onresult) {
    console.info('escape_csv_in_background..');
    // in background worker...
    // inspired by
    // https://stackoverflow.com/a/6454685/574981
    // https://stackoverflow.com/a/19201292/574981

var blobURL = URL.createObjectURL(new Blob(['(',

function() {
    self.onmessage = function(e) {
        console.log('worker speaking: start job..');
        // console.log("start job:", e.data);
        // self.postMessage('msg from worker');
        self.postMessage(escape_csv(e.data));
        console.log('worker speaking: job done!');
    };



    function escape_csv(orig) {
        let mod = '';

        // get first line
        // match |
        // count matches
        // +1 == field count
        let csv_field_count = orig.split('\n')[0].match(/\|/g).length + 1;
        // console.log('csv_field_count', csv_field_count);

        // first escape all ''
        mod = orig.replace(/\'/gim, '\"');
        // console.log('mod', mod);

        // prepare match regex
        // let csv_escape_match = "^(.*)"
        // for (let i = 2; i <= csv_field_count; i++) {
        //     csv_escape_match += "\\|(.*)";
        // }
        let csv_escape_match = '^([^]*?)';
        for (let i = 2; i < csv_field_count; i++) {
            csv_escape_match += '\\|([^]*?)';
        }
        csv_escape_match += '\\|([^]*?)$';
        let csv_escape_regex = new RegExp(csv_escape_match, 'gim');

        // prepare replace string
        let csv_escape_seq = '';
        csv_escape_seq += '\'$' + 1 + '\'';
        for (let i = 2; i <= csv_field_count; i++) {
            csv_escape_seq += '|\'$' + i + '\'';
        }

        // console.log('csv_escape_match', csv_escape_match);
        // console.log('csv_escape_regex', csv_escape_regex);
        // console.log('csv_escape_seq', csv_escape_seq);

        // console.log('replace..');
        mod = mod.replace(csv_escape_regex, csv_escape_seq);
        // console.log('replace done');
        return mod;
    }
}.toString(),

')()'], {type: 'application/javascript'}));

    // console.log('blob created successfully.');
    // console.log('blobURL', blobURL);

    let worker = new Worker(blobURL);
    worker.onmessage = onresult;
    // Start the worker.
    worker.postMessage(csv_raw);

    // console.info('done.');
}

function get_csv_and_escape_it() {
    console.log('get_csv_and_escape_it');
    // console.log(this);
    const link_el = this;
    // console.log('load data');
    // try and load csv file
    load_content(
        '/projects/export/hall',
        function(data) {
            // console.log('csv_export_raw loaded');
            // console.log('data', data);
            // console.log(link_el);
            // convert
            escape_csv_in_background(
                data,
                function(e) {
                    console.log('onresult');
                    // console.log('e.data:', e.data);
                    // console.log('link_el', link_el);
                    saveAsFile(
                        link_el,
                        e.data,
                        'cfm_export',
                        '.csv'
                    );
                }
            );
        }
    );

}

function add_mod_csv_export() {
    const link_el = document.querySelector('a[href="/projects/export/hall"]');
    if (link_el) {
        add_nav_button(
            'CSV MOD',
            get_csv_and_escape_it
        );
    }
}

function export_mod() {
    add_mod_csv_export();
}
