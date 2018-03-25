function Bastion()
{
    this.currentHP = roboInitialHP;
    this.energy = 0;
    this.energyRegen = roboInitialEnergyRegen;
    this.stability = 1;
    this.bugMultiplier = 1;
    this.bootsLevel = 0;

    this.gun = new BasicGun(1);

    this.Fire = function()
    {
        var dmgDealt = this.gun.Fire(1);

        PayForCard(1,-1*dmgDealt);

        dealDmgToRobot(dmgDealt,2);
    }

    this.AddBootsLevel = function()
    {
        if(this.bootsLevel == 1)
        {
            stability2.SetVisibility(false);
        }

        this.bootsLevel++;
        if(this.bootsLevel>2){this.bootsLevel = 2;}
        if(this.bootsLevel == 1)
        {
            this.bugMultiplier = 0.8;
            stability2.SetVisibility(true);
        }
        else if(this.bootsLevel == 2)
        {
            this.bugMultiplier = 0.6;
            stability3.SetVisibility(true);
        }

    }

    this.RemoveBootsLevel = function()
    {
        if(this.bootsLevel > 0)
        {
            if(this.bootsLevel == 1)
            {
                this.bugMultiplier = 1;
                stability2.SetVisibility(false);
            }
            else if(this.bootsLevel == 2)
            {
                this.bugMultiplier = 0.8;
                stability3.SetVisibility(false);
                stability2.SetVisibility(true);
            }

            this.bootsLevel--;
        }
    }
}