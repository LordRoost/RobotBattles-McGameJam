var bugs = [
    {
        name: "AccuracyBug",
        chance: 33.3,
        action: function(roboID)
        {
            robots[roboID].gun.AddAccuracyBug();
        }
    },
    {
        name: "DmgBug",
        chance: 33.3,
        action: function(roboID)
        {
            robots[roboID].gun.AddAccuracyBug();
        }
    },
    {
        name: "CritBug",
        chance: 33.4,
        action: function(roboID)
        {
            robots[roboID].gun.AddCritBug();
        }
    }
];

function AddRandomBug(roboID)
{
    var rand = Math.random()*100;
    var i=0;
    for(i=0;i<bugs.length;i++)
    {
        rand -= bugs[i].chance;
        if(rand <= 0)
        {
            bugs[i].action(roboID);
            break;
        }
    }
}