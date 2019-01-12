
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

function add_css_toggle_option(
    css_class,
    css_target_el,
    label_text,
    active=true,
    parent_el=undefined
) {
    console.group('add_css_toggle_option:');

    const toggle_input = document.createElement('input');
    toggle_input.classList.add('checkboxinput');
    toggle_input.type = 'checkbox';
    // toggle_input.id = 'tags_button';
    toggle_input.onchange = function() {
        css_target_el.classList.toggle(css_class);
    };

    if (active) {
        css_target_el.classList.add(css_class);
        toggle_input.checked = true;
    }

    const label = document.createElement('label');
    label.appendChild(toggle_input);
    label.appendChild(document.createTextNode(label_text));

    if (parent_el == undefined) {
        parent_el = document.querySelector('.container > div.controls');
    }
    parent_el.appendChild(label);

    console.groupEnd();
    console.log('');
}

function add_input_select(
    option_list,
    change_action,
    label_text,
    preselect=undefined,
    parent_el=undefined
) {
    console.group('add_input_select:');

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

    console.log(label);

    console.groupEnd();
    console.log('');
}



function modifie_email(project_name_el, main_contact_el, email_el) {
    const project_name = project_name_el.textContent.trim();
    const main_contact = main_contact_el.textContent.trim();
    const email = email_el.textContent.trim();

    const new_mail = main_contact + ' - ' + project_name + ' <' + email + '>';

    email_el.textContent = new_mail;
}


function mod_email() {
    console.group('mod_email:');
    let thead_tr = document.querySelector('.container > table > thead > tr');
    let tbody = document.querySelector('.container > table > tbody');
    if (thead_tr && (tbody.childElementCount > 0)) {
        const project_name_col = 0;
        const main_contact_col = 1;
        const email_col = 2;
        if (
            thead_tr.children[project_name_col].textContent.
                startsWith('Project name') &&
            thead_tr.children[main_contact_col].textContent.
                startsWith('Main Contact') &&
            thead_tr.children[email_col].textContent.startsWith('E-Mail')
        ) {
            for (let row of tbody.children) {
                // console.log(row);
                modifie_email(
                    row.children[project_name_col],
                    row.children[main_contact_col],
                    row.children[email_col]
                );
            }
        }
    }
    console.groupEnd();
    console.log('');
}


function mod_actions() {
    console.group('mod_actions:');

    const css_target_el = document.querySelector('.container > table');


    add_css_toggle_option(
        'hide_entries_success',
        css_target_el,
        'hide accepted projects',
        false
    );

    // add line break
    const controls = document.querySelector('.container > div.controls');
    controls.appendChild(document.createElement('br'));

    add_css_toggle_option(
        'hide_action_delete',
        css_target_el,
        'hide action "delete"',
        true
    );

    add_css_toggle_option(
        'hide_action_accept',
        css_target_el,
        'hide action "*accept"',
        true
    );



    console.groupEnd();
    console.log('');
}


const target_tab_list = [
    '',
    'description',
    'service',
    'booth',
    'talk',
    'workshop',
    'participants',
    'internal',
];

function change_target_tab(target_tab) {
    console.log('switching action edit links to ', target_tab);
    for (let el of document.querySelectorAll(
        'a[href*="/projects/"]'
        // 'a[title="Edit project information"]'
    )) {
        const raw = el.href;
        // console.log('raw', raw);
        // remove extra action
        const option_list_str = (
            '(:?\\/' +
            target_tab_list.join('|\\/') +
            ')$'
        );
        // console.log('option_list_str', option_list_str);
        const regex = new RegExp(
            option_list_str,
            'gi'
        );
        // console.log('regex', regex);
        const clean = raw.replace(regex, '');
        // console.log('clean', clean);
        let new_href = clean + '/' + target_tab;
        if (target_tab == '') {
            new_href = clean;
        }
        // console.log('new_href', new_href);
        el.href = new_href;
    }
}

function mod_action_edit_target() {
    console.group('mod_action_edit_target:');

    // change_target
    add_input_select(
        target_tab_list,
        function(event) {
            // console.log(event.srcElement.value);
            change_target_tab(event.srcElement.value);
        },
        'select edit target_tab:'
    );

    console.groupEnd();
    console.log('');
}



function ui_mod() {
    console.info('Make Munich MOD..');

    mod_email();

    mod_actions();
    mod_action_edit_target();

    console.info('all user scripting done.');
}

// console.clear();
// console.info('******************************************');

//console.info('Jamendo_FLAC_Down-loader is waiting for DOMContentLoaded');
document.addEventListener('DOMContentLoaded', function(event) {
    console.info('DOM fully loaded and parsed.', event);
    // ui_mod();
});
