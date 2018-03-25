var sound_gear1 = new Howl({
    src: ['sound/gear1.wav'],
    volume:0.3
});

var sound_gear2 = new Howl({
    src: ['sound/gear2.wav'],
    volume:0.3
});

var sound_gear3 = new Howl({
    src: ['sound/gear3.wav'],
    volume:0.3
});

var sound_gear4 = new Howl({
    src: ['sound/gear4.wav'],
    volume:0.3
});

var sound_gear5 = new Howl({
    src: ['sound/gear5.wav'],
    volume:0.3
});

var sound_gear6 = new Howl({
    src: ['sound/gear6.wav'],
    volume:0.3
});

var soundArray = [sound_gear1,sound_gear2,sound_gear3,sound_gear4,sound_gear5,sound_gear6];




function gearUpSounds()
{
    var result = Math.floor(Math.random() * 6);
    var mySound = soundArray[result];
    mySound.stop();
    mySound.play();
}