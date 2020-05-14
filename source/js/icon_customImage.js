ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17,
    controls: ['zoomControl']
  }, {
    searchControlProvider: 'yandex#search'
  })

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-pin.svg',
      iconImageSize: [66, 100],
      iconImageOffset: [-40, -80],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);
});
