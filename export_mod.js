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

function saveAsFile(link, content, filename, extension) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // var aFileParts = ['<a id='a'><b id='b'>hey!</b></a>'];
    // var oMyBlob = new Blob(aFileParts, {type: 'text/html'}); // the blob

    if (! extension) {
        extension = '.txt';
    }

    // http://stackoverflow.com/a/16330385/574981
    var blob = new Blob([content], {type: 'text/text'});
    var url = URL.createObjectURL(blob);

    console.log('update download link:');
    // var a = document.createElement('a');
    var a = link;
    a.download = filename + extension;
    a.href = url;
    // a.textContent = 'Download File';
    console.log('download link:', a);
    // console.log('open download link:', a);
    // a.click();
    //a.remove();

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


function escape_csv_in_background(csv_raw) {
    console.info('escape_csv_in_background..');
    // in background worker...
    // inspired by
    // https://stackoverflow.com/a/6454685/574981

    console.log('escape_worker', escape_worker);

    var blob = new Blob([
        // document.querySelector('#worker1').textContent
        escape_worker
    ], { type: 'text/javascript' });

    var worker = new Worker(window.URL.createObjectURL(blob));
    worker.onmessage = function(e) {
        console.log('Received: ' + e.data);
        // document.querySelector('#result').value = e.data;
    };
    // Start the worker.
    worker.postMessage(csv_raw);

    // console.info('done.');
}

function get_csv_and_escape_it() {
    console.log('get_csv_and_escape_it');
    // console.log(this);
    const link_el = this;
    console.log('load data');
    // try and load csv file
    load_content(
        'https://projects.make-munich.de/projects/export/hall',
        function(data) {
            console.log('csv_export_raw loaded:');
            // console.log('data', data);
            console.log(link_el);
            // convert
            escape_csv_in_background(data);
            saveAsFile(
                link_el,
                data,
                'cfm_export',
                '.csv'
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
