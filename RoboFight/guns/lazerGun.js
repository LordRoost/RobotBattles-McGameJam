function LazerGun(robotID)
{
    this.accuracy = 80;
    this.critChance = 20;
    this.dmg = 300;
    this.energyUsage = 10;
    this.roboID = robotID;
    this.energyGain = 2;

    this.bugCount = {
        accuracy: 0,
        dmg: 0,
        crit: 0
    }

    SetupGun(robotID, this);

    this.Fire = function()
    {
        if(robots[this.roboID].energy >= this.energyUsage)
        {
            robots[this.roboID].energy -= this.energyUsage;
            robots[this.roboID].EnergyUI();

            var dmgDealt = this.dmg;
            if(Math.random()*100 > this.accuracy)
            {
                dmgDealt = 0;
            }

            if(Math.random()*100 <= this.critChance)
            {
                dmgDealt *= 2;
                sound_singleCheer.stop();
                sound_singleCheer.play();
            }

            turnControl.muzzleFlash.StartFire(turnControl.currentTurn);

            return dmgDealt;
        }
        else
        {
            return 0;
        }
    }

    this.AddAccuracyBug = function()
    {
        var reduction = 5;
        var i=0;
        var max = this.bugCount["accuracy"];
        for(i=1;i<max; i++)
        {
            reduction *= 1.5;
        }
        this.bugCount["accuracy"] = max+1;
        this.accuracy -= reduction*robots[this.roboID].bugMultiplier;
        if(this.accuracy < 0){this.accuracy = 0;}
        ChangeUIStat("robo"+this.roboID+"accuracy",Math.round(this.accuracy).toString(), false);
    }

    this.AddCritBug = function()
    {
        var reduction = 1;
        var i=0;
        var max = this.bugCount["crit"];
        for(i=1;i<max; i++)
        {
            reduction *= 2;
        }
        this.bugCount["crit"] = max+1;
        this.critChance -= reduction*robots[this.roboID].bugMultiplier;
        if(this.critChance < 0){this.critChance = 0;}
        ChangeUIStat("robo"+this.roboID+"crit", Math.round(this.critChance).toString(), false);
    }

    this.AddDmgBug = function()
    {
        var reduction = 5;
        var i=0;
        var max = this.bugCount["dmg"];
        for(i=1;i<max; i++)
        {
            reduction *= 1.7;
        }
        this.bugCount["dmg"] = max+1;
        this.dmg -= reduction*robots[this.roboID].bugMultiplier;
        if(this.dmg < 0){this.dmg = 0;}
        ChangeUIStat("robo"+this.roboID+"dmg",Math.round(this.dmg).toString(), false);
    }
}