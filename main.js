function createShip(model, name) {
    return {
        model: model,
        name: name || 'ghost',
        gps: [0, 0],
        distance: 0,
    };
}

function moveShip(ship, direction, distance) {
    if (!distance) {
        distance = 1;
    }
    switch (direction) {
        case 'east':
            ship.gps[0] = ship.gps[0] + distance;
            ship.distance += distance;
            break;
        case 'west':
            ship.gps[0] = ship.gps[0] - distance;
            ship.distance += distance;
            break;
        case 'south':
            ship.gps[1] = ship.gps[1] + distance;
            ship.distance += distance;
            break;
        case 'north':
            ship.gps[1] = ship.gps[1] - distance;
            ship.distance += distance;
            break;
        default:
            console.warn('Неверный курс');
    }
}

function isShipUndefined(ship) {
    return ship.name === 'ghost';
}

function isEqual(firstShip, secondShip) {
    return firstShip.name === secondShip.name
        && firstShip.model === secondShip.model
        && firstShip.gps[0] === secondShip.gps[0]
        && firstShip.gps[1] === secondShip.gps[1]
        && firstShip.distance === secondShip.distance;
}

const ship1 = createShip('model1', 'blue');
console.log(ship1);

const ship2 = createShip('model2');
console.log(ship2);

const ship3 = createShip('model2');
console.log(ship3);

const ship4 = createShip('model2');
console.log(ship4);

moveShip(ship1, 'east');
console.log(ship1);

console.log(ship1, ship2);
const definedShip1 = isShipUndefined(ship1);
const definedShip2 = isShipUndefined(ship2);
console.log(definedShip1);
console.log(definedShip2);

console.log(ship3, ship4);
console.assert(isEqual(ship3, ship4), 'Разные корабли')


{ // тестируем moveShip
    // arrange
    const ship = createShip('model');

    // action
    moveShip(ship, 'east', 10);

    // test
    const expect = {
        model: 'model',
        name:  'ghost',
        gps: [10, 0],
        distance: 10,
    };
    console.log(ship);
    console.assert(isEqual(ship, expect), 'Разные корабли')
}

{ // тестируем moveShip
    // arrange
    const ship = createShip('model');

    // action
    moveShip(ship, 'west');

    // test
    const expect = {
        model: 'model',
        name:  'ghost',
        gps: [-1, 0],
        distance: 1,
    };
    console.log(ship, expect);
    console.assert(isEqual(ship, expect), 'Разные корабли')
}

console.assert(!isShipUndefined(createShip('modelN', 'test')), 'что-то пошло не так');
console.assert(isShipUndefined(createShip('modelN')), 'что-то пошло не так 2');
