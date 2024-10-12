let imgbox = document.getElementById('imgbox');
let img = document.getElementById('img');
let input = document.getElementById('input');

function generateQR() {
  img.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
    input.value;
}
