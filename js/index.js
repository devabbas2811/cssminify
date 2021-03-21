function copyFun() {
    /* Get the text field */
    var copyText = document.getElementById("mincss");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
   // alert("Copied the text: " + copyText.value);
   showSnackBar("Copied Text","");
  }
  function minifyCss() {

    /* Get the text field */
    var minCss = document.getElementById("mincss");

    var orgCss = document.getElementById("orgcss");
    if(orgCss.textLength == 0){ showSnackBar('Please enter some text !..','Error'); return; }
    minCss.value = orgCss.value
      .replace(/([^0-9a-zA-Z\.#])\s+/g, "$1")
      .replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1")
      // get rid of spaces next to non-alphanumerical (not a-z, A-Z, #, ., or 0-9) characters. for some reason combining these result in an error.
      .replace(/;}/g, "}")
      /*remove comments*/
      .replace(/\/\*.*?\*\//g, "")
    // tip: if you get rid of the \s you can read it better

  }

  function showModal(Message,Type) {

    var modalContent = document.getElementById('modalmessage');
    modalContent.innerHTML= '';
    modalContent.innerHTML = Message;
    if(Type === 'Error') modalContent.className = 'w3-text-red';
   
    
    document.getElementById('modal').style.display='block';

  }

  function showSnackBar(Message,Type) {
var x = document.getElementById("snackbar");
x.innerHTML ='';
x.innerHTML=Message;
x.style.backgroundColor = Type == "Error" ? "#ee2424f6": "#333";
x.className = "show";
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}