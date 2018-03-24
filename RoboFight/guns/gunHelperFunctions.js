function SetupGun(roboId, gun)
{
    obj("robo"+roboId+"dmg").innerHTML = gun.dmg.toString();
    obj("robo"+roboId+"accuracy").innerHTML = gun.accuracy.toString();
    obj("robo"+roboId+"crit").innerHTML = gun.critChance.toString();
}