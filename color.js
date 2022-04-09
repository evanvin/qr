window.onload = function () {
  const inputElement = document.getElementById('url-input');

  inputElement.addEventListener('input', (event) => {
    const imageElement = document.getElementById('image');
    imageElement.src = event.target.value;

    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener('load', function () {
      const c = colorThief.getColor(img);
      document.body.style.backgroundColor =
        'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
    });

    let googleProxyURL =
      'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(event.target.value);
  });
};
