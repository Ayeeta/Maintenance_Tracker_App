var modal = document.getElementById("signupModal");
var btn = document.getElementById("popSignup");
var span = document.getElementsByClassName("close_m")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}