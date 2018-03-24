var barcodes = {
    12345: function()
    {
        alert("some upgrade 1");
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