const sharp = require('sharp');

sharp('perrito.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');