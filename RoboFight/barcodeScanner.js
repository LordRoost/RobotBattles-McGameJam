var barcodes = {
    5678: function()
    {
        gun_AddCrit(robots[turnControl.currentTurn].gun, 8);
    },

    789: function()
    {
        gun_AddAccuracy(robots[turnControl.currentTurn].gun, 5);
    },

    4567: function()
    {
        gun_AddDmgPercent(robots[turnControl.currentTurn].gun, 8);
    }
}


function onBarcodeScan(code)
{
    var str = code.toString();
    var code1 = str.substr(0,str.length/2);
    var code2 = str.substr(str.length/2);
    if(code1==code2)
    {
      barcodes[code1]();
      HideModal();
    }
}