function SetupGun(roboId, gun)
{
    obj("robo"+roboId+"dmg").innerHTML = gun.dmg.toString();
    obj("robo"+roboId+"accuracy").innerHTML = gun.accuracy.toString();
    obj("robo"+roboId+"crit").innerHTML = gun.critChance.toString();
}

function gun_AddAccuracy(gun, val)
{
    gun.accuracy += val;
    ChangeUIStat("robo"+gun.roboID+"accuracy",gun.accuracy.toString(),true);
    gearUpSounds();
}

function gun_AddDmg(gun, val)
{
    gun.dmg += val;
    ChangeUIStat("robo"+gun.roboID+"dmg",gun.dmg.toString(),true);
    gearUpSounds();
}

function gun_AddCrit(gun, val)
{
    gun.critChance += val;
    ChangeUIStat("robo"+gun.roboID+"crit",gun.critChance.toString(),true);
    gearUpSounds();
}

function gun_AddDmgPercent(gun, val)
{
    gun.dmg = Math.ceil(1.0*gun.dmg*(1.0+(val/100)));
    ChangeUIStat("robo"+gun.roboID+"dmg",gun.dmg.toString(), true);
    gearUpSounds();
}