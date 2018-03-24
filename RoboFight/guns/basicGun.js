function BasicGun(robotID)
{
    this.accuracy = 100;
    this.critChance = 0;
    this.dmg = 5;
    this.energyUsage = 0;
    this.roboID = robotID;

    SetupGun(robotID, this);

    this.Fire = function()
    {
        new MuzzleFlash(this.roboID);
    }
}