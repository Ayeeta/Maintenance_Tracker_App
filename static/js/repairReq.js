function repReq() {
    if (document.getElementById("idxItem2").value != "" && document.getElementById("idxDesc2").value != "") {
        var newdiv = document.createElement("div");
        var reqTitle2 = document.getElementById("idxItem2").value;
        var reqDesc2 = document.getElementById("idxDesc2").value;
        var reqDate2 = new Date();
       
        newdiv.style.width = "700px";
        newdiv.style.marginTop = "10px";
        newdiv.style.boxShadow = "0 0 5px #b3b3b3";
        newdiv.style.padding = "10px";

        newdiv.innerHTML = "<h3> <font color=#ff3333>&#9874; repair</font> - " + reqTitle2 + "</h3> <p>" + reqDesc2 + "</p> <p><font size=1 color=grey>"+reqDate2+"</font></p>";
        document.getElementById("parent-div").appendChild(newdiv);

        document.getElementById("idxItem2").value = "";
        document.getElementById("idxDesc2").value = "";

    } else {
        alert("Please fill in the required details");
    }

}

