function Orisa()
{
    this.currentHP = roboInitialHP;
    this.energy = 0;
    this.energyRegen = roboInitialEnergyRegen;
    this.stability = 1;

    this.gun = new BasicGun(2);

    this.Fire = function()
    {
        var dmgDealt = this.gun.Fire(2);

        dealDmgToRobot(dmgDealt,1);
    }
}