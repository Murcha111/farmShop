// //подключение

// <script defer src="https://api-maps.yandex.ru/2.1/?apikey=89f32b1c-17fb-49bf-bba1-960a63229e15&width=100%&height=240&lang=ru_RU" type="text/javascript"> 
//     </script>


// //карта

// function init() {
//   const map = new ymaps.Map('map', {
//     center: [55.75099343835914, 37.61847347598597],
//     zoom: 13,
//     controls: ['routeButtonControl'],
//   });
//   const shop1 = new ymaps.Placemark([55.76076604635602, 37.61979262728237], {
//     balloonContentHeader: 'Магазин Sneaker#bang',
//     balloonContentBody: 'ул. Петровка, 2',
//     balloonContentFooter: 'Пн-Чт: 10:00 - 22:00, Пт-Сб: 10:00 - 23:00, Вс: 11:00 - 22:00',

//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1655895592~hmac=b5f831d545d7dbdb8b34ad5a746c2854',
//   });
//   const shop2 = new ymaps.Placemark([55.741675555966886, 37.620662158476684], {
//     balloonContentHeader: 'Магазин Sneaker#bang',
//     balloonContentBody: 'Лаврушинский пер., 10',
//     balloonContentFooter: 'Пн-Чт: 10:00 - 22:00, Пт-Сб: 10:00 - 23:00, Вс: 11:00 - 21:00',
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1655895592~hmac=b5f831d545d7dbdb8b34ad5a746c2854',
//   });
//   const shop3 = new ymaps.Placemark([55.74213455750076, 37.648900455014505], {
//     balloonContentHeader: 'Магазин Sneaker#bang',
//     balloonContentBody: 'ул. 5-й Котельнический переулок, 8',
//     balloonContentFooter: 'Пн-Сб: 10:00 - 23:00, Вс: 11:00 - 22:00',
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1655895592~hmac=b5f831d545d7dbdb8b34ad5a746c2854',
//   });
//   const shop4 = new ymaps.Placemark([55.75321611269345, 37.58722951378897], {
//     balloonContentHeader: 'Магазин Sneaker#bang',
//     balloonContentBody: 'Новый Арбат ул., 24, Москва, 121069',
//     balloonContentFooter: 'Пн-Чт: 10:00 - 22:00, Пт-Сб: 10:00 - 23:00, Вс: выходной',
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: 'https://cdn-icons.flaticon.com/png/512/2872/premium/2872620.png?token=exp=1655895592~hmac=b5f831d545d7dbdb8b34ad5a746c2854',
//   });
//   map.geoObjects.add(shop1);
//   map.geoObjects.add(shop2);
//   map.geoObjects.add(shop3);
//   map.geoObjects.add(shop4);

//   const control = myMap.controls.get('routeButtonControl');

//   control.routePanel.geolocate('from');

//   control.state.set('expanded', true);
// }
// ymaps.ready(init);

