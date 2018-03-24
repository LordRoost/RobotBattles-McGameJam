function BasicGun(robotID)
{
    this.accuracy = 85;
    this.critChance = 1;
    this.dmg = 100;
    this.energyUsage = 0;
    this.roboID = robotID;

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
        }

        new MuzzleFlash(this.roboID);

        return dmgDealt;
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