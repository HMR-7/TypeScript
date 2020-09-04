/* 单元格点击 */
var cells = document.querySelectorAll('.cell');
console.log(cells);
cells.forEach(function (item) {
    var cell = item;
    console.log(item);
    cell.addEventListener('click', function () {
        console.log(6);
    });
});
