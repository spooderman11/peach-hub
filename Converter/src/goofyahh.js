var hostFiles = document.createElement('div');
hostFiles.innerHTML = '<input type="file" id="files" name="files[]" multiple />';
document.body.appendChild(hostFiles);
var downloadButton = document.createElement('div');
downloadButton.innerHTML = '<button id="downloadButton">Download</button>';
document.body.appendChild(downloadButton);
var hostFiles = document.getElementById('files');
hostFiles.accept = ".jfif, .jpg, .jpeg";
var header = document.createElement('h1');
header.innerHTML = 'Spooders Cool Converter';
document.body.appendChild(header);
document.body.insertBefore(header, document.body.childNodes[0]);
var header2 = document.createElement('h2');
header2.innerHTML = 'Convert .jfif, .jpeg, .jpg files to .png!!';
document.body.appendChild(header2);
document.body.insertBefore(header2, document.body.childNodes[1]);

var downloadButton = document.getElementById('downloadButton');
downloadButton.onclick = function() {
  var file = document.getElementById('files').files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = new Image();
    img.src = e.target.result;
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var link = document.createElement('a');
      link.download = 'coverted.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  };
  reader.readAsDataURL(file);
};

var sonicBanner = document.createElement('div');
sonicBanner.innerHTML = '<img src="https://cdn.discordapp.com/attachments/1021408987582832720/1040700020585926677/original.png" alt="Sonic Banner" width="500" height="200">';
document.body.appendChild(sonicBanner);

document.body.insertBefore(sonicBanner, document.body.childNodes[6]);

var sonicBanner = document.getElementById('sonicBanner');
sonicBanner.onclick = function() {
  window.location.href = 'https://www.mcdonalds.com/fi/fi-fi.html';
};