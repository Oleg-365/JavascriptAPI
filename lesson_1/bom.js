console.log(navigator.userAgent); // - информация о браузере
console.log(navigator.cookieEnabled); // - включен ли cookie
console.log(navigator.doNotTrack); // - включена ли опция запрета на отслеживание
console.log(navigator.geolocation); // - геолокация (тут не активированная)

// Напишите функцию findClosestCity(userLocation, cities) которая принимает текущее 
// метосположение пользователя в формате [latitude, longitude] и массив городов с их
// координатами в формате {name:"City", location: [latitude, longitude]}. Функция 
// должна вернуть название ближайщего города к пользователю

function calculateDistance(location1, location2) {				
	const [lat1, lon1] = location1; // разбивает координаты первого местоположения на широту и долготу
	const [lat2, lon2] = location2; // разбивает координаты второго местоположения на широту и долготу

	const toRad = value => (value * Math.PI) / 180; // преобразует значение в радианы
	const R = 6371; // радиус Земли в км

	const dLat = toRad(lat2 - lat1); //  вычисляет разницу широты в радианах
	const dLon = toRad(lon2 - lon1); //  вычисляет разницу долготы в радианах

	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + // вычисляет квадрат синуса половины разницы широты
			  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) *
			  Math.sin(dLon / 2) // вычиссляет квадрат синуса половины разницы долготы и учитывает косинусы широт

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // вычисляет центральный угол между двумя местоположениями

	const distance = R * c; // вычисляет растояние между двумя местоположениями на сфере Земли

	return distance; // возвращает растояние между двумя местоположениями
}

function findClosestCity(cities) {
	return new Promise ((resolve, reject) => {
		if(navigator.geolocation) { // проверяет поддержку геолокации в браузере
			navigator.geolocation.getCurrentPosition(
				position => {
					const userLocation = [position.coords.latitude,
					position.coords.longitude]; // получаем текущие координаты пользователя
					let closestCity = null; // переменная для хранения ближайщего города
					let shortestDistance = Infinity; // переменная для хранения кратчайшего растояния


					cities.forEach(city => { // перебирает все города из массива
						 const distance = 
						 calculateDistance(userLocation, city.location); // растояние между юзером и текущим городом
						 if (distance < shortestDistance) { // если растоние меньше кратчайшего растояния
						 	closestCity = city.name; // записывает имя текущего города в ближайший город
						 	shortestDistance = distance; // записывает текущее растояние в кратчайшее растояние

						 }
					});
					resolve(closestCity); // возвращает ближайший город
				},
				error => {
					if (error.code === error.PREMISSION_DENIED) { // Если пользователеь отказал в доступе к геолокации
						reject(new Error('Пользователь отказал в доступе к геолокации')); // возвращает ошибку
					} else {
						reject(new Error('Ошибка при получении местоположения'));  // возвращает ошибку
					}
				}
			);

		} else {
			reject(new Error('Геолокация не поддерживается вашим браузером')); // возвращает ошибку
		}
	});
};

// Пример использования
const cities = [
	{ name: 'Нью-Йорк', location: [40.7128, -74.0060]},
	{ name: 'Лондон', location: [51.5074, -0.1278]},
	{ name: 'Токио', location: [35.6895, 139.6917]},
	{ name: 'Москва', location: [55.751244, 139.6917]},
];

findClosestCity(cities)
	.then(closestCity => {
		console.log(closestCity); // ожидаемый результат: название ближайшего города
	})
	.catch(error => {
		console.log(error.message);
	})
