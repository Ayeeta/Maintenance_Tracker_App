var editModal = document.getElementById("edit_usr_modal");
var editBtn =document.getElementById("btnEdit");
var spanClose = document.getElementById("btnCancelEdit");

editBtn.onclick = function(){
    editModal.style.display = "block";
}

spanClose.onclick = function() {
    editModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}