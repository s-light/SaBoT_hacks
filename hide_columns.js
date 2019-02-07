

function add_styles(styles_string) {
    let head = document.querySelector('head');
    if (head) {
        const el_style = document.createElement('style');
        el_style.type = 'text/css';
        el_style.textContent = styles_string;
        head.appendChild(el_style);
    }
}




function add_input_select(
    option_list,
    change_action,
    label_text,
    preselect=undefined,
    parent_el=undefined
) {
    // console.group('add_input_select:');

    // <label>
    //   Choose a thing:
    //   <select>
    //       <option value="">--Please choose an option--</option>
    //       <option value="dog">Dog</option>
    //       <option value="cat">Cat</option>
    //       <option value="hamster">Hamster</option>
    //       <option value="parrot">Parrot</option>
    //       <option value="spider">Spider</option>
    //       <option value="goldfish">Goldfish</option>
    //   </select>
    // </label>

    const input_select = document.createElement('select');
    // input_select.classList.add('');
    // input_select.type = 'checkbox';
    // input_select.id = 'tags_button';
    input_select.onchange = change_action;

    for (let list_item of option_list) {
        const option = document.createElement('option');
        option.value = list_item;
        option.appendChild(document.createTextNode(list_item));
        if (preselect && preselect == list_item) {
            option.selected = true;
        }
        input_select.appendChild(option);
    }


    const label = document.createElement('label');
    label.appendChild(document.createTextNode(label_text));
    label.appendChild(input_select);

    if (parent_el == undefined) {
        parent_el = document.querySelector('.container > div.controls');
    }
    parent_el.appendChild(label);

    // console.log(label);

    // console.groupEnd();
    // console.log('');
}

function add_input_text(
    placeholder,
    change_action,
    label_text,
    full_width=true,
    parent_el=undefined
) {
    // console.group('add_input_select:');

    const text_input = document.createElement('input');
    text_input.classList.add('checkboxinput');
    text_input.type = 'search';
    text_input.placeholder = placeholder;
    // text_input.classList.add('search');
    text_input.classList.add('form-control');
    // text_input.id = 'tags_button';
    text_input.onchange = change_action;
    // text_input.style.width = '100%';

    const label = document.createElement('label');
    label.appendChild(text_input);
    label.appendChild(document.createTextNode(label_text));
    if (full_width) {
        label.style.width = '100%';
    }

    if (parent_el == undefined) {
        parent_el = document.querySelector('.container > div.controls');
    }
    parent_el.appendChild(label);

    // console.groupEnd();
    // console.log('');
    return text_input;
}


function get_hide_col_from_index(col_index) {
    let result = 'hide_col_';
    result += col_index.toString().padStart(3, '0');
    return result;
}

function create_css_column_hide() {
    let styles = '/* table hide column helper */\n';
    const first_tr = document.querySelector('table tbody tr');
    if (first_tr) {
        for (var i = 0; i < first_tr.children.length; i++) {
            styles += '.' + get_hide_col_from_index(i) + ' ';
            styles += 'th:nth-child(' + (i+1) + '), ' + '\n';
            styles += '.' + get_hide_col_from_index(i) + ' ';
            styles += 'td:nth-child(' + (i+1) + ') {' + '\n';
            styles += '    display: none;' + '\n';
            styles += '}' + '\n';
            styles += '\n';
        }
        add_styles(styles);
    }
    else {
        console.error('table has no children.');
    }
}

function create_column_map() {
    const first_tr = document.querySelector('table thead tr');
    // column_map = {};
    column_map = [];
    for (let col_index = 0; col_index < first_tr.children.length; col_index++) {
        const col_el = first_tr.children[col_index];
        // column_map[col_el.textContent] = {
        //     'el': col_el,
        //     'index': col_index,
        //     'hide_class': get_hide_col_from_index(col_index),
        // };
        column_map.push({
            'el': col_el,
            'index': col_index,
            'name': col_el.textContent.trim().toLowerCase(),
            'hide_class': get_hide_col_from_index(col_index),
        });
    }
    return column_map;
}

function handle_hide_columns(column_map, text_raw) {
    // console.log('handle_hide_columns');
    // console.log('column_map', column_map);
    // console.log('text_raw', text_raw);
    const table = document.querySelector('table');
    let col_names = text_raw.split(',');
    // trim all values
    col_names = col_names.map(function(currentValue) {
        return currentValue.trim().toLowerCase();
    });
    // console.log('col_names', col_names);
    for (let col of column_map) {
        // console.log('col.name', col.name);
        if (col_names.indexOf(col.name) > -1) {
            table.classList.add(col.hide_class);
            // console.log('col', col, 'add class', col.hide_class);
        }
        else {
            table.classList.remove(col.hide_class);
            // console.info('col', col, 'remove class', col.hide_class);
        }
    }
}

function add_hide_columns() {
    create_css_column_hide();
    const column_map = create_column_map();
    // get_hide_col_from_index(i)
    const text_input = add_input_text(
        'hide: columns',
        undefined,
        // 'hide columns'
        ''
    );
    text_input.addEventListener('keyup', function(event) {
        // console.log(event.target);
        text_raw = event.target.value;
        // column_map
        handle_hide_columns(column_map, text_raw);
    });

}






function start_hide_columns() {
    console.info('start_hide_columns()');

    add_hide_columns();

    console.info('start_hide_columns done.');
}


// console.clear();
// console.info('******************************************');
// document.addEventListener('DOMContentLoaded', function(event) {
//     console.info('DOM fully loaded and parsed.', event);
// });
// document.addEventListener('load', function(event) {
//     console.info('All resources finished loading!', event);
//     start_hide_columns();
// }, false);
