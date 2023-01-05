
const title = 'Jaywapp\'s World';
const htmls = [
    { name: 'Home', value: 'Home_kr.html' },
    { name: 'About', value: 'About_kr.html' },
    { name: 'Role', value: 'Role_kr.html' },
    { name: 'Projects', value: 'Projects_kr.html' },
    { name: 'Contact', value: 'Contact_kr.html' },
];


var prefaceElement = document.createElement('nav');

var titleElement = document.createElement('div');
titleElement.setAttribute('class', 'title');
titleElement.append(document.createTextNode(title));

prefaceElement.append(titleElement);

htmls.forEach(h => {

    var element = document.createElement('div');
    var element = 'location.href = \'' + h.value + '\''

    element.setAttribute('id', 'menuitem');
    element.setAttribute('class', h.name);
    element.setAttribute('OnClick', link);
    element.setAttribute('style', 'cursor:pointer;');

    element.append(document.createTextNode(h.value));
    
    prefaceElement.append(element);
});

document.body.append(prefaceElement);