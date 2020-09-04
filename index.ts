/* 单元格点击 */
let cells = document.querySelectorAll('.cell');
console.log(cells);
cells.forEach(function (item) {
    let cell = item as HTMLDivElement;
    console.log(item);
    cell.addEventListener('click', function () {
        console.log(6);
    })
})