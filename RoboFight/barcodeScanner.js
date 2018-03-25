var barcodes = {
    5678: {
        cost: 100,
        action: function()
        {
            gun_AddCrit(robots[turnControl.currentTurn].gun, 8);
            AddRandomBug(turnControl.currentTurn);
        }
    },

    789: {
        cost: 100,
        action: function()
        {
            gun_AddAccuracy(robots[turnControl.currentTurn].gun, 5);
            AddRandomBug(turnControl.currentTurn);
        }
    },

    4567: {
        cost: 200,
        action: function()
        {
            gun_AddDmgPercent(robots[turnControl.currentTurn].gun, 10);
            AddRandomBug(turnControl.currentTurn);
        }
    },

    34567: {
        cost: 1000,
        action: function()
        {
            robots[turnControl.currentTurn].AddBootsLevel();
        }
    },

    6789: {
        cost: 800,
        action: function()
        {
            robots[(turnControl.currentTurn % 2)+1].RemoveBootsLevel();
        }
    },

    890: {
        cost: 500,
        action: function()
        {
            robots[turnControl.currentTurn].gun = new LazerGun(turnControl.currentTurn);
            gearUpSounds();
        }
    },

    23456: {
        cost: 400,
        action: function()
        {
            //robots[turnControl.currentTurn].energyRegen += 2;
            robots[turnControl.currentTurn].NextEnergyLevel();
            gearUpSounds();
        }
    },

    901: {
        cost: 700,
        action: function()
        {
            AddRandomBug((turnControl.currentTurn % 2)+1);
        }
    },

    12345: {
        cost: 100,
        action : function()
        {
            robots[turnControl.currentTurn].gun = new BasicGun(turnControl.currentTurn);
            gearUpSounds();
        }
    }
}

var lastBarcodeScan = "";

function onBarcodeScan(code)
{
    if(code != lastBarcodeScan)
    {
        lastBarcodeScan = code;
        
        var str = code.toString();
        var code1 = str.substr(0,str.length/2);
        var code2 = str.substr(str.length/2);
        if(code1==code2)
        {
            if(PayForCard(turnControl.currentTurn,barcodes[code1].cost))
            {
                RemoveUICues();
                barcodes[code1].action();
                HideModal();
            }
        }
    }
}