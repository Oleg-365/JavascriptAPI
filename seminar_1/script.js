// Задание 1 (тайминг 30 минут)
// Работа с BOM
// 1. Определение текущего размера окна браузера:
//      ○ Напишите функцию, которая будет выводить текущую
//      ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы:
//      ○ Создайте всплывающее окно или диалоговое окно,
//      которое появляется при попытке закрыть вкладку
//      браузера и спрашивает пользователя, уверен ли он в
//      своем решении закрыть страницу.
// 3. Управление историей переходов:
//      ○ Используйте объект history для управления историей
//      переходов на веб-странице. Создайте кнопки "Назад" и
//      "Вперед" для перемещения по истории.

const updateWindowSize = () => {
    const widthEl = window.innerWidth;
    const heightEl = window.innerHeight;

    width1.textContent = widthEl;
    height1.textContent = heightEl;


}
window.addEventListener('load', updateWindowSize);
window.addEventListener('resize', updateWindowSize);

// window.addEventListener('beforeunload', (e) => {
//     e.preventDefault();
//     e.returnValue = 'Вы уверены что хотети уйти?'
// });


goBack.addEventListener('click', () => {
	window.history.back();
});
goForward.addEventListener('click', () => {
	window.history.forward();
})