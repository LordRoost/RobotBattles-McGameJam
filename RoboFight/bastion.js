function Bastion()
{
    this.currentHP = roboInitialHP;
    this.energy = 0;
    this.energyRegen = roboInitialEnergyRegen;
    this.stability = 1;

    this.gun = new BasicGun(1);

    this.Fire = function()
    {
        var dmgDealt = this.gun.Fire(1);

        PayForCard(1,-1*dmgDealt);

        dealDmgToRobot(dmgDealt,2);
    }
}