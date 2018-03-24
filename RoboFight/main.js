var ps = new PixiSurface(1280,720);
ps.Show(document.getElementById("pixiDiv"));

var keyboard = new Keyboard();

var bastion = new Bastion();
var orisa = new Orisa();

var turnControl = new TurnControl();

var robots = [null,bastion, orisa];

function GameLoop()
{
    requestAnimationFrame(GameLoop);

    ps.UpdateDeltaTime();

    turnControl.Update();

    ps.Render();
}

GameLoop();
