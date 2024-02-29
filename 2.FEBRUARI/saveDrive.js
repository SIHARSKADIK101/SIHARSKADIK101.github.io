function updateStatus(id) {
    let update = document.getElementById('updateStatus');
    var statusUpload = document.getElementById("statusUpload-" + id)
    statusUpload.innerHTML = "UPLOADED"
}

function upload() {

    alert("Submit form dengan id formUpload-" + flight.id)
    updateStatus(flight.id)
}


function kirim(id) {

    const submit = document.getElementById("submit");
    const scriptURL = "https://script.google.com/macros/s/AKfycbxab7btQUj-xnEQO_kxkSwLAPKt44yaP9o7fH1_OtSsvDKfMAmHdMCrDgjtr8IakddMZw/exec";
    const form = document.forms["formUpload-" + id];
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            // Swal.fire({
            //     title: 'OK',
            //     text: 'BERHASIL DI UPLOAD',
            //     icon: 'success'
            // });

            .then(response => Swal.fire('OK', 'FILE BERHASIL DI UPLOAD', 'success', response))
            .catch(error => Swal.fire('OOPPS!', 'EROR NIH', 'error', error.message))
        var status = { STATUS_UPLOAD: document.getElementById("STATUS_UPLOAD-" + id) }
        //    console.log(status);
        console.log(form);

    })
    var array = JSON.parse(localStorage.getItem('listItem'))
    array[id - 1] = {
        id: id,
        AIRCRAFT: document.getElementById('AIRCRAFT').value,
        EXERCISE: document.getElementById('EXERCISE').value,
        PROGRAM: document.getElementById('PROGRAM').value,
        JT_OPS: document.getElementById('JT_OPS').value,
        JT_HAR: document.getElementById('JT_HAR').value,
        LANDING: document.getElementById('LANDING').value,
        STATUS_UPLOAD: document.getElementById('STATUS_UPLOAD').value = "UPLOADED"
    }
    var status = document.getElementById("statusUpload-" + id)
    localStorage.setItem('listItem', JSON.stringify(array));
    status.innerHTML = "UPLOADED";
}

function cetak(id){
    const submit = document.getElementById("submit");
    const scriptURL = "https://script.google.com/macros/s/AKfycbxgyaSP8Quc9bbCwHT1p1hBPZzFK8BmjF6s0OigextYYL-cFdRPDclMiamJHNvvvOWGvA/exec";
    const form = document.forms["formUpload-" + id];
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            // Swal.fire({
            //     title: 'OK',
            //     text: 'BERHASIL DI UPLOAD',
            //     icon: 'success'
            // });

            .then(response => Swal.fire('OK', 'FILE BERHASIL DI UPLOAD', 'success', response))
            .catch(error => Swal.fire('OOPPS!', 'EROR NIH', 'error', error.message))
        var status = { STATUS_UPLOAD: document.getElementById("STATUS_UPLOAD-" + id) }
        //    console.log(status);


    })


}