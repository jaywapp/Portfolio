const images = [
    'image/picture1.jpg',
    'image/picture2.jpg',
    'image/picture3.jpg',
    'image/picture4.jpg',
];


function getImgElement( path ) {

    var img = document.createElement('img');
    img.setAttribute('class', 'image');
    img.setAttribute('src', path);

    return img;
}

function getPictureElement( path ){

    var pic = document.createElement('picture');
    pic.append(getImgElement(path));

    return pic;
}

function getCellElement(index, path){

    var div = document.createElement('div');
    var cell = 'cell' + index.toString();

    div.setAttribute('class', cell);
    div.setAttribute('id', 'picture');

    div.append(getPictureElement(path));

    return div;
}

var grid = document.createElement('div');
grid.setAttribute('class', 'picture_grid');

for(var i = 0; i< images.length; i++){
    grid.append(getCellElement(i + 1, images[i]));
};

document.body.append(grid);