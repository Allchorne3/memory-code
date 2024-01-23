const descriptionOutput = document.querySelector('p.description');
const colourOutput = document.querySelector('p.color');
const dataPinOutput = document.querySelector('p.data-pin');

const dataPins = {
    bool: {
        name: 'Bool',
        color: 'Red', 
        description: 'Value of True or False'
    },
    integer: {
        name: 'Integer',
        color: 'Teal', 
        description: 'Number (whole numbers), e.g. 5, 7, 10'
    },
    float: {
        name: 'Float',
        color: 'Lime', 
        description: 'Arithmetic number e.g. 3.14'
    },
    string: {
        name: 'String',
        color: 'Pink', 
        description: 'Text and characters, e.g. "My Word'
    },
    transform: {
        name: 'Transform',
        color: 'Orange', 
        description: 'Location, rotation and scale'
    },
    vector: {
        name: 'Vector',
        color: 'Yellow', 
        description: 'X, Y ,Z'
    },
    linearColor: {
        name: 'Linear Colour',
        color: 'Blue', 
        description: 'RGBA value of a color'
    },
    rotator: {
        name: 'Rotator',
        color: 'Lilac', 
        description: 'Roll(X), Pitch(Y), Yaw(Z)'
    }
}


