function BasicGun(robotID)
{
    this.accuracy = 85;
    this.critChance = 1;
    this.dmg = 100;
    this.energyUsage = 0;
    this.roboID = robotID;

    this.bugCount = {
        accuracy: 0,
        dmg: 0,
        crit: 0
    }

    SetupGun(robotID, this);

    this.Fire = function()
    {
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

        return dmgDealt;
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
        this.accuracy -= reduction;
    }
/*
    this.AddAccuracy = function(val)
    {
        this.accuracy += val;
        obj("robo"+this.roboID+"accuracy").innerHTML = this.accuracy.toString();
    }

    this.AddDmg = function(val)
    {
        this.dmg += val;
        obj("robo"+this.roboID+"dmg").innerHTML = this.dmg.toString();
    }

    this.AddCrit = function(val)
    {
        this.dmg += val;
        obj("robo"+this.roboID+"crit").innerHTML = this.critChance.toString();
    }

    this.AddDmgPercent = function(val)
    {
        this.dmg += Math.ceil(1.0*this.dmg*(1.0+val));
    }
    */
}