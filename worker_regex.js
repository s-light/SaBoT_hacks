// worker for escaping csv things in background.
self.onmessage = function(e) {
    console.log('start job..');
    // console.log("start job:", e.data);
    // self.postMessage('msg from worker');
    self.postMessage(escape_csv(e.data));
    console.log('job done!');
};



function escape_csv(orig) {
    let mod = '';

    // get first line
    // match |
    // count matches
    // +1 == field count
    let csv_field_count = orig.split('\n')[0].match(/\|/g).length + 1;
    console.log('csv_field_count', csv_field_count);

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

    console.log('csv_escape_match', csv_escape_match);
    console.log('csv_escape_regex', csv_escape_regex);
    console.log('csv_escape_seq', csv_escape_seq);

    console.log('replace..');
    mod = mod.replace(csv_escape_regex, csv_escape_seq);
    console.log('done');
    return mod;
}
