var re = /x/;
var witchModel = 0;
var series = ['Potion-Maker']
var persons = {
    ['Potion-Maker']: ['Pio', 'Tia'],
};

function ControlsModel() {
    const getModel = document.getElementById("live2d");
    // console.log('Math.random() * persons.length', Math.random() * persons.length)
    getModel.onclick = () => {
        const randomSeries = series[Math.floor(Math.random() * series.length)]
        const currentPerson = persons[randomSeries]
        if (currentPerson) {
            const randomPerson = currentPerson[Math.floor(Math.random() * currentPerson.length)]
            loadModel(randomSeries, randomPerson)
        }
    }
}

function loadModel(series, person) {
    loadlive2d('live2d', `http://127.0.0.1:3000/live2d?series=${series}&person=${person}`)
}


function init() {
    ControlsModel()
    loadModel(series[0], 'Pio');
}