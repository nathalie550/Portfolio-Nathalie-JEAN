/**********************************FLECHE RETOUR PRECEDENT******************/
// script.js
function goBack() {
    window.history.back();
}


/********************FICHIER METIERS AVEC DETAILS  POPUP********************************/

function openDetail(id) {
    document.getElementById(id).style.display = "block";
}

function closeDetail(id) {
    document.getElementById(id).style.display = "none";
}


