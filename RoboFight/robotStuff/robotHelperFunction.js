function dealDmgToRobot(dmg, playerID)
{
    var robot;
    if(playerID == 1)
    {
        robot = bastion;
    }
    else
    {
        robot = orisa;
    }

    robot.currentHP -= dmg;
    obj("robo"+playerID+"hp").innerHTML = robot.currentHP.toString();
    obj("hpProgressBar"+playerID).style.width = Math.ceil(100.00*robot.currentHP/roboInitialHP).toString()+"%";

    if(robot.currentHP < 0)
    {
        gameOver = true;
        alert("Game over");
    }
}