var modal1 = document.getElementById('popForm');
var btn = document.getElementById('mtnBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function(){
    modal1.style.display = "block";
}
span.onclick = function(){
    modal1.style.display = "none";
}
