function obj(objectId)
{
    return document.getElementById(objectId);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = obj("closeModalX");

var needMoreGoldDiv = obj("needMoreGoldDiv");

function ShowModal()
{
    needMoreGoldDiv.style.display = "none";
    lastBarcodeScan = "";
    modal.style.display = "block";
    turnControl.scanningState = true;
}

function HideModal()
{
    modal.style.display = "none";
    turnControl.scanningState = false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    HideModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        HideModal();
    }
}

function PayForCard(roboID, cost)
{
    if(money[roboID] >= cost)
    {
        money[roboID] -= cost;
        obj("money"+roboID).innerHTML = money[roboID].toString();
        return true;
    }
    else
    {
        needMoreGoldDiv.style.display = "inline-block";
        return false;
    }
}