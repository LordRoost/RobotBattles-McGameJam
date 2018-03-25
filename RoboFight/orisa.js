function Orisa()
{
    this.currentHP = roboInitialHP;
    this.energy = 0;
    this.energyRegen = roboInitialEnergyRegen;
    this.stability = 1;
    this.bugMultiplier = 1;
    this.bootsLevel = 0;

    this.gun = new BasicGun(2);

    this.Fire = function()
    {
        var dmgDealt = this.gun.Fire(2);

        PayForCard(2,-1*dmgDealt);

        dealDmgToRobot(dmgDealt,1);
    }

    this.AddBootsLevel = function()
    {
        if(this.bootsLevel == 1)
        {
            stability2Reverse.SetVisibility(false);
        }

        this.bootsLevel++;
        if(this.bootsLevel>2){this.bootsLevel = 2;}
        if(bootsLevel == 1)
        {
            this.bugMultiplier = 0.8;
            stability2Reverse.SetVisibility(true);
        }
        else if(this.bootsLevel == 2)
        {
            this.bugMultiplier = 0.6;
            stability3Reverse.SetVisibility(true);
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

    this.UpdateEnergy = function()
    {
        var increase = this.energyRegen + this.gun.energyGain;
        this.energy += increase*ps.deltaTime;
        this.EnergyUI();
    }

    this.EnergyUI = function()
    {
        energyVal2.innerHTML = Math.floor(this.energy).toString();
        energyProgress2.style.width = Math.floor(100.0*this.energy/roboInitialMaxEnergy);
    }
}