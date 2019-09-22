function openTab(event, name){
    var i, tab, tablinks;

    tab = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tab.length; i++){
        tab[i].style.display = "none";
    }
    //ponemos las tabs a que no se vean

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //quitar la clase active

    //pone a activo el tab en el que entramos
    document.getElementById(name).style.display = "block";
    event.currentTarget.className += " active"

}