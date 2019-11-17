ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [59.93860683861325,30.322990126983658],
    zoom: 16
  }, {
    searchControlProvider: "yandex#search"
  }),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: "Офис 101",
    balloonContent: "Офис 101"
  }, {
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "./img/icon-map-pin.svg",
    // Размеры метки.
    iconImageSize: [67, 100],
  });

  myMap.geoObjects.add(myPlacemark);
});
