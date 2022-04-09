let hex = '';
let url = '';

window.onload = function () {
  const inputElement = document.getElementById('url-input');

  inputElement.addEventListener('input', (event) => {
    const imageElement = document.getElementById('image');
    imageElement.src = url = event.target.value;

    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener('load', function () {
      const c = colorThief.getColor(img);
      hex = rgbToHex(...c);
      document.getElementById('hex').innerHTML = hex;
      document.body.style.backgroundColor = hex;
    });

    let googleProxyURL =
      'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(url);
  });
};

const rgbToHex = (r, g, b) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');

const addImage = () => {
  console.log(url);
};
