function createButtonWithId(id, textContent) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = textContent;
    return btn;
}

function appendLabelAndInput(parent, labelText, id, inputType, isRequired) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText

    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', inputType);
    input.setAttribute('name', id);
    if (isRequired) input.required = true;

    parent.appendChild(label);
    parent.appendChild(input);
}

function appendLabelAndTextarea(parent, labelText, id, isRequired) {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const input = document.createElement('textarea');
    input.setAttribute('id', id);
    input.setAttribute('name', id);
    if (isRequired) input.required = true;

    parent.appendChild(label);
    parent.appendChild(input);
}

function createDivWithClass(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

export {
createButtonWithId,
appendLabelAndInput,
appendLabelAndTextarea,
createDivWithClass
};