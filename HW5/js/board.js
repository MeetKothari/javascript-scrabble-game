function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

window.onload = function() {
        var src = "/Users/meetkothari/Desktop/graphics_data/Scrabble_Board_OneLine.png";
        show_image("/Users/meetkothari/Desktop/graphics_data/Scrabble_Board_OneLine.png", 276,110, "Starting Board");
    }
