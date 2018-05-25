function mainReq() {
    if (document.getElementById("idxItem").value != "" && document.getElementById("idxDesc").value != "") {
        var newdiv = document.createElement("div");
        var reqTitle = document.getElementById("idxItem").value;
        var reqDesc = document.getElementById("idxDesc").value;
        var reqDate = new Date();
       
        newdiv.style.width = "700px";
        newdiv.style.marginTop = "10px";
        newdiv.style.boxShadow = "0 0 5px #b3b3b3";
        newdiv.style.padding = "10px";

        newdiv.innerHTML = "<h3>" + reqTitle + "</h3> <p>" + reqDesc + "</p> <p><font size=1 color=grey>"+reqDate+"</font></p>";
        document.getElementById("parent-div").appendChild(newdiv);

        document.getElementById("idxItem").value = "";
        document.getElementById("idxDesc").value = "";

    } else {
        alert("Please fill in the required details");
    }

}

