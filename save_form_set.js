
function create_input_select(
    option_list,
    preselect=undefined,
) {
    // console.group('add_input_select:');

    //   <select>
    //       <option value="">--Please choose an option--</option>
    //       <option value="dog">Dog</option>
    //       <option value="cat">Cat</option>
    //   </select>

    const input_select = document.createElement('select');
    // input_select.classList.add('');
    input_select.appendChild(document.createTextNode('\n        '));
    for (let list_item of option_list) {
        const option = document.createElement('option');
        option.value = list_item.value;
        option.appendChild(document.createTextNode(list_item.name));
        if (preselect && preselect == list_item.name) {
            option.selected = true;
        }
        input_select.appendChild(document.createTextNode('\n        '));
        input_select.appendChild(option);
    }
    input_select.appendChild(document.createTextNode('\n    '));

    return input_select;
}

function create_icon_button(button_text, tooltip='', icon='envelope') {
    const button = document.createElement('button');
    const span = document.createElement('span');
    span.classList.add('glyphicon');
    span.classList.add('glyphicon-' + icon);
    button.appendChild(document.createTextNode('\n    '));
    button.appendChild(span);
    button.appendChild(document.createTextNode(button_text));
    button.appendChild(document.createTextNode('\n'));
    return button;
}


function create_save_form_set() {
    // console.group('add_input_select:');

    const saved_sets = create_input_select(
        '',                 // button_text
        'save / update',    // tooltip
        'floppy-saved'      // icon
    );
    const button_save = create_icon_button(
        '',                 // button_text
        'save / update',    // tooltip
        'floppy-saved'      // icon
    );
    const button_remove = create_icon_button(
        '',             // button_text
        'remove',       // tooltip
        'floppy-remove'  // icon
    );
    const button_reset = create_icon_button(
        '',             // button_text
        'reset field',  // tooltip
        'trash'  // icon
    );

    const form_group = document.createElement('div');
    form_group.classList.add('form-group');
    form_group.classList.add('controls');
    form_group.classList.add('auto-align');
    form_group.appendChild(document.createTextNode('\n    '));
    form_group.appendChild(label);
    form_group.appendChild(document.createTextNode('\n    '));
    form_group.appendChild(text_input);
    form_group.appendChild(document.createTextNode('\n'));

    return form_group;
}






function value_save(configuration_name, value) {
    localStorage.setItem(configuration_name, value);
}
function value_load(configuration_name) {
    return localStorage.getItem(configuration_name);
}

function add_save_form(
    configuration_name,
    insertBeforeElement,
) {
    console.info('add_save_form()');
    console.error('TODO!');
    // localStorage.setItem('configuration_name', document.getElementById('bgcolor').value);
    console.info('add_save_form done.');
}
