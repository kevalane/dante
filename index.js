const fs = require('fs');

function extract() {
    let rawData = fs.readFileSync('swe.json');
    let data = JSON.parse(rawData);
    let images = data['imgs'];
    let moveon = true;

    const file = fs.createWriteStream('companies.txt', { flags: 'a'});
    let companies = [];

    // loop images
    for (let i = 0; i < images.length; i++) {
        
        // Check if company printed before
        for (let k = 0; k < companies.length; k++) {
            if (companies[k] == images[i]['attr']['alt']) {
                moveon = false;
            }
        }

        companies[i] = images[i]['attr']['alt'];
        
        if (moveon) {
            console.log(images[i]['attr']['alt']);
            file.write(images[i]['attr']['alt'].toString() + '\r\n');
        }
    }
}

extract();
