function createAssemblyLine() {
    let decoratorFunctions = {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            }
        },
        hasAudio(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function () {
                if (obj.currentTrack !== null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`)
                }
            }
        },
        hasParktronic(obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log(' ');
                }
            }
        },
    }

    return decoratorFunctions;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);