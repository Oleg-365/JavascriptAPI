const photoContainer = document.getElementById('photo-container');
let page = 1;

async function fetchPhotos() {
	try {
		const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=YOUR_ACCESS_KEY`);
		const photos = await response.json();
		return photos
	} catch (error) {
		consol.log('Ошибка при загрузке фотографий', error);
		return [];
	}
}
async function loadMorePhotos() {
	// body...
}
// window.addEventListener('?', () => {
// if ( ) {
	// loadMorePhotos()
// }
// })

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos()