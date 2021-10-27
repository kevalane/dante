const fs = require('fs');

function extract() {
    let rawData = fs.readFileSync('swe.json');
    let data = JSON.parse(rawData);
    let images = data['imgs'];

    const file = fs.createWriteStream('companies.txt', { flags: 'a'});

    // loop images
    for (let i = 0; i < images.length; i++) {
        console.log(images[i]['attr']['alt']);
        file.write(images[i]['attr']['alt'].toString() + '\r\n');
    }
}

extract();
