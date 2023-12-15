var xPositions = [200];
var yPositions = [0];

var addRain = function() {
    for (var i = 1; i < random(10, 150) ; i++) {
        xPositions.push(random(0, 430));
        yPositions.push(random(0, 30));
    }
};

addRain();

draw = function() {
    background(204, 247, 255);
    noStroke();
    fill(0, 200, 255);
    
    mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(0);
    };
    
    for (var i = 0; i < xPositions.length; i++) {
        ellipse(xPositions[i], yPositions[i] % 450, 10, 10);
        yPositions[i] += random(3, 6);
    }
    
};
