window.onload = function () {
  const inputElement = document.getElementById('url-input');

  inputElement.addEventListener('input', (event) => {
    // const imageElement = document.getElementById('image');
    // imageElement.src = event.target.value;

    // const colorThief = new ColorThief();

    // // Make sure image is finished loading
    // if (imageElement.complete) {
    //   colorThief.getColor(imageElement);
    // } else {
    //   imageElement.addEventListener('load', function () {
    //     colorThief.getColor(imageElement);
    //   });
    // }

    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener('load', function () {
      const x = colorThief.getColor(img);
      console.log(x);
    });

    let googleProxyURL =
      'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(event.target.value);
  });
};
