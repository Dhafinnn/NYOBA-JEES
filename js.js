function onButtonClick() {
   alert('JANGAN TEKAN LAGI'); 
}
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

document.querySelector("html").addEventListener("click", function () {
    alert("DIBILANG JANGAN");
  });

  document.querySelector("html").addEventListener("click", function () {
    alert("BG UDH BG");
  });

  document.querySelector("html").addEventListener("click", function () {
    alert("DIBILANG JANGAN");
  });

  document.querySelector("html").addEventListener("click", function () {
    alert("Ini akan berpengaruh kepada masa depan mu");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("Ini peringatan terakhir");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("JANGAN");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("Jangan nyesal ya");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("yakin ni?");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("balek aja udah");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("yauda nih udah ni");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("masih ditekan akwoaowkwa");
  });
  document.querySelector("html").addEventListener("click", function () {
    alert("yauda ni gw becanda");
    showImage();
  });

  function showImage() {
    const image = document.createElement("img");
    image.src = 'rick.jpg';
    document.body.appendChild(image);
  }
  document.querySelector("html").addEventListener("click", showAlert);