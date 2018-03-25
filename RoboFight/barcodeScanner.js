var barcodes = {
    5678: {
        cost: 100,
        action: function()
        {
            gun_AddCrit(robots[turnControl.currentTurn].gun, 8);
        }
    },

    789: {
        cost: 100,
        action: function()
        {
            gun_AddAccuracy(robots[turnControl.currentTurn].gun, 5);
        }
    },

    4567: {
        cost: 200,
        action: function()
        {
            gun_AddDmgPercent(robots[turnControl.currentTurn].gun, 10);
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
                barcodes[code1].action();
                HideModal();
            }
        }
    }
}