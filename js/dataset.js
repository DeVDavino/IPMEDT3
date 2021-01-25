var data = 0;

function blenderModelUpdate() {
    data = sessionStorage.setItem('data', 2);
    console.log(sessionStorage.getItem('data'));
    document.location.href = '/plein.html';
}