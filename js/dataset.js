var data = 0;

function blenderModelUpdate() {
    data = sessionStorage.setItem('data', 1);
    console.log(sessionStorage.getItem('data'));
    document.location.href = '/Plein.html';
}