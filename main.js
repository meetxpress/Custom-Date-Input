var el = document.getElementById("dateField");
el.onkeyup = function (evt) {
    if ((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 && evt.keyCode <= 105)) {
        evt = evt || window.event;
        var size = document.getElementById('dateField').value.length;

        if ((size == 2 && document.getElementById('dateField').value > 31) || (size == 5 && Number(document.getElementById('dateField').value.split('/')[1]) > 12) || (size == 10 && Number(document.getElementById('dateField').value.split('/')[2]) > new Date().getFullYear())) {
            alert('Invalid Date');
            document.getElementById('dateField').value = '';
            return;
        }

        if ((size == 2 && document.getElementById('dateField').value < 32) || (size == 5 && Number(document.getElementById('dateField').value.split('/')[1]) < 13)) {
            document.getElementById('dateField').value += '/';
        }
    }
}