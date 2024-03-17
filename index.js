const little = require('littlejsengine');

little.addSprite('player', { x: 100, y: 100, w: 32, h: 32 });

little.update = function() {
    if (little.keyDown('ArrowRight')) little.sprites.player.x += 5;
    if (little.keyDown('ArrowLeft')) little.sprites.player.x -= 5;
    if (little.keyDown('ArrowDown')) little.sprites.player.y += 5;
    if (little.keyDown('ArrowUp')) little.sprites.player.y -= 5;
};

little.draw = function() {
    little.cls();
    little.rect(little.sprites.player.x, little.sprites.player.y, little.sprites.player.w, little.sprites.player.h, 12);
};

little.start();
