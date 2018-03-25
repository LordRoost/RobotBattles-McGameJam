function SetupGun(roboId, gun)
{
    obj("robo"+roboId+"dmg").innerHTML = gun.dmg.toString();
    obj("robo"+roboId+"accuracy").innerHTML = gun.accuracy.toString();
    obj("robo"+roboId+"crit").innerHTML = gun.critChance.toString();
}

function gun_AddAccuracy(gun, val)
{
    gun.accuracy += val;
    obj("robo"+gun.roboID+"accuracy").innerHTML = gun.accuracy.toString();
}

function gun_AddDmg(gun, val)
{
    gun.dmg += val;
    obj("robo"+gun.roboID+"dmg").innerHTML = gun.dmg.toString();
}

function gun_AddCrit(gun, val)
{
    gun.critChance += val;
    obj("robo"+gun.roboID+"crit").innerHTML = gun.critChance.toString();
}

function gun_AddDmgPercent(gun, val)
{
    gun.dmg = Math.ceil(1.0*gun.dmg*(1.0+(val/100)));
    obj("robo"+gun.roboID+"dmg").innerHTML = gun.dmg.toString();
}