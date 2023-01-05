
function createTextElement(tag, id, value) {
    var ele = document.createElement(tag);
    ele.setAttribute('id', id);
    ele.append(document.createTextNode(value));

    return ele;
}

function craeteTypeElement(id, item) {

    var div = document.createElement('div');
    div.setAttribute('id', id);

    div.append(createTextElement('div', 'title', item.title));
    div.append(createTextElement('div', 'content', item.content));

    return div;
}

const path = '../data/intro_k.json';

let http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        write(this.responseText); //this = http
    }
}

http.open("GET", path, true);
http.send();

function write(jsonText) {

    let json = JSON.parse(jsonText)
    var grid = document.getElementById('grid');

    var intro = document.createElement('div');
    intro.setAttribute('id', 'sub_grid');
    intro.setAttribute('class', 'intro');

    intro.append(createTextElement('div', 'title', '소개'));

    json.forEach(element => {
        intro.append(craeteTypeElement('intro_item', element));
    });

    grid.append(intro);
}