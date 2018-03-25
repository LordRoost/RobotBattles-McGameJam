var ps = new PixiSurface(1280,720);
ps.SetColor(0xffffff);
ps.Show(document.getElementById("pixiDiv"));

var keyboard = new Keyboard();

var bastion = new Bastion();
var orisa = new Orisa();

var turnControl = new TurnControl();

var robots = [null,bastion, orisa];
var money = [null,100,100];

var battery1;
var battery2;
var battery3;
var gunBase;
var robot1;
var scope;
var spikes;
var stability2;
var stability3;
var battery1Reverse;
var battery2Reverse;
var battery3Reverse;
var gunBaseReverse;
var robot1Reverse;
var scopeReverse;
var spikesReverse;
var stability2Reverse;
var stability3Reverse;

var turnArrow;

var robot1Parts;
var robot2Parts;

var muzzleFlash1;
var muzzleFlash2;

var gameOver = false;

var sound_bg = new Howl({
    src: ['sound/OffLimits.wav'],
    loop:true,
    volume:0.5
});

var sound_rifle1 = new Howl({
    src: ['sound/rifle1.wav']
});

var sound_rifle2 = new Howl({
    src: ['sound/rifle1.wav']
});

var sound_bgCheer = new Howl({
    src: ['sound/crowd.mp3'],
    loop:true,
    volume:0.1
});

var sound_singleCheer = new Howl({
    src: ['sound/1manCheer.mp3']
});

var energyVal1 = document.getElementById("robo1energy");
var energyVal2 = document.getElementById("robo2energy");
var energyProgress1 = document.getElementById("energyProgressBar1");
var energyProgress2 = document.getElementById("energyProgressBar2");

LoadPictures(
    ["img/Battery1_reverse.png",
    "img/Battery1.png",
    "img/Battery2.png",
    "img/Battery2_reverse.png",
    "img/Battery3_reverse.png",
    "img/Battery3.png",
    "img/GunBase_reverse.png",
    "img/GunBase.png",
    "img/Robot1_reverse.png",
    "img/Robot1.png",
    "img/Scope_reverse.png",
    "img/Scope.png",
    "img/Spikes_reverse.png",
    "img/Spikes.png",
    "img/Stability2_reverse.png",
    "img/Stability2.png",
    "img/Stability3_reverse.png",
    "img/Stability3.png",
    "img/TurnArrow.png",
    "img/MuzzleFlash.png",
    "img/MuzzleFlash_reverse.png"
    ],setup);

function setup()
{
    battery1 = new Sprite("img/Battery1.png");
    battery1.SetVisibility(false);
    battery1.SetPosition(0,0);
    battery1.AddToPixi(ps);

    muzzleFlash1 = new Sprite("img/MuzzleFlash.png");
    muzzleFlash2 = new Sprite("img/MuzzleFlash_reverse.png");
    muzzleFlash1.SetPosition(490,423);
    muzzleFlash2.SetPosition(710,423);
    muzzleFlash1.SetVisibility(false);
    muzzleFlash2.SetVisibility(false);
    muzzleFlash1.AddToPixi(ps);
    muzzleFlash2.AddToPixi(ps);

    //make sprites  = new Sprite();
    battery1 = new Sprite("img/Battery1.png");
    battery2 = new Sprite("img/Battery2.png");
    battery3 = new Sprite("img/Battery3.png");
    gunBase = new Sprite("img/GunBase.png");
    robot1 = new Sprite("img/Robot1.png");
    scope = new Sprite("img/Scope.png");
    spikes = new Sprite("img/Spikes.png");
    stability2 = new Sprite("img/Stability2.png");
    stability3 = new Sprite("img/Stability3.png");
    battery1Reverse = new Sprite("img/Battery1_reverse.png");
    battery2Reverse = new Sprite("img/Battery2_reverse.png");
    battery3Reverse = new Sprite("img/Battery3_reverse.png");
    gunBaseReverse = new Sprite("img/GunBase_reverse.png");
    robot1Reverse = new Sprite("img/Robot1_reverse.png");
    scopeReverse = new Sprite("img/Scope_reverse.png");
    spikesReverse = new Sprite("img/Spikes_reverse.png");
    stability2Reverse = new Sprite("img/Stability2_reverse.png");
    stability3Reverse = new Sprite("img/Stability3_reverse.png");

    turnArrow = new Sprite("img/TurnArrow.png");
    turnArrow.SetPosition(180,20);
    turnArrow.AddToPixi(ps);

    robot1Parts = [gunBase,robot1,scope,spikes,stability2,stability3,battery1,battery2,battery3];
    robot2Parts = [gunBaseReverse,robot1Reverse,scopeReverse,spikesReverse,stability2Reverse,stability3Reverse,battery1Reverse,battery2Reverse,battery3Reverse];

    var i=0;
    for(i=0;i<robot1Parts.length;i++)
    {
        robot1Parts[i].SetPosition(10,260);
        robot1Parts[i].SetVisibility(false);
        robot1Parts[i].AddToPixi(ps);
    }
    robot1.SetVisibility(true);
    gunBase.SetVisibility(true);

    for(i=0;i<robot2Parts.length;i++)
    {
        robot2Parts[i].SetPosition(770,260);
        robot2Parts[i].SetVisibility(false);
        robot2Parts[i].AddToPixi(ps);
    }
    robot1Reverse.SetVisibility(true);
    gunBaseReverse.SetVisibility(true);

    sound_bg.play();
    sound_bgCheer.play();

    ps.UpdateDeltaTime();

    bastion.Fire();
    turnControl.muzzleFlash.StartFire(1);

    GameLoop();
}

function GameLoop()
{
    requestAnimationFrame(GameLoop);

    ps.UpdateDeltaTime();

    if(!gameOver)
    {
        turnControl.Update();
    }

    ps.Render();
}
