escape_worker = (
    "self.onmessage = function(e) {" +
    "    console.log('start job..');" +
    "    self.postMessage(escape_csv(e.data));" +
    "    console.log('job done!');" +
    "};" +
    "function escape_csv(orig) {" +
    "    let mod = '';" +
    "    let csv_field_count = orig.split('\n')[0].match(/\|/g).length + 1;" +
    "    mod = orig.replace(/\'/gim, '\"');" +
    "    let csv_escape_match = '^([^]*?)';" +
    "    for (let i = 2; i < csv_field_count; i++) {" +
    "        csv_escape_match += '\\|([^]*?)';" +
    "    }" +
    "    csv_escape_match += '\\|([^]*?)$';" +
    "    let csv_escape_regex = new RegExp(csv_escape_match, 'gim');" +
    "    let csv_escape_seq = '';" +
    "    csv_escape_seq += '\'$' + 1 + '\'';" +
    "    for (let i = 2; i <= csv_field_count; i++) {" +
    "        csv_escape_seq += '|\'$' + i + '\'';" +
    "    }" +
    "    mod = mod.replace(csv_escape_regex, csv_escape_seq);" +
    "    return mod;" +
    "}"
);
