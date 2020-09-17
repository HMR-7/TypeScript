/* 一、单元格点击
1 获取到所有到单元格列表
2 遍历单元格列表，给每一个单元格添加点击事件
3 给当前被点击的单元格添加类名 x

二、切换玩家
1 创建一个存储当前玩家的变量，默认值为：x
2 将添加给单元格时写死的类名x，替换变量的值
3 切换到另外一个玩家，在添加类名（下棋完成一步）后，根据当前玩家，得到另外一个玩家
4 处理下一步提示

三、使用枚举修改当前玩家
使用枚举代替原来的字符串类名(x和o)

四 游戏判断输赢、平局
1 使用单元格索引，来表示每种获胜情况
2 封装判断输赢函数（代码模块化）
3 创建变量steps，记录已下起的次数，判断steps是否等于9，若没有则未平局
4 先判赢，在判断平局
*/
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
//当前玩家
var currentPlayer;
//记录已下棋的次数
var steps;
//判赢数组
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] //斜
];
//棋盘Div数组
var cells = document.querySelectorAll('.cell');
console.log(cells, '伪数组');
//获取游戏面板元素
var gameBord = document.querySelector('#bord');
//获胜信息面板元素
var message = document.querySelector('#message');
//获胜者
var winner = document.querySelector('#winner');
//重新开始按钮
var restart = document.querySelector('#restart');
//游戏重置点击事件
restart.addEventListener('click', startGame);
//调用该函数来初始化游戏数据，开始游戏
startGame();
//开始游戏按钮
function startGame() {
    console.log('click');
    steps = 0;
    message.style.display = 'none';
    currentPlayer = Player.X;
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(Player.X);
    cells.forEach(function (item) {
        var cell = item;
        cell.classList.remove(Player.X, Player.O);
        //移除单元格点击事件
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell, { once: true });
    });
}
// cells.forEach(function (item) {
//     let cell = item as HTMLDivElement;//1.1
//     //防止单元格被多次点击
//     cell.addEventListener('click', clickCell, { once: true })
// })
//棋盘单元格点击事件；->使用函数声明形式的事件处理程序
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer); //1.3、2.2
    steps++;
    //调用判赢函数
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerText = currentPlayer + '赢了！';
        return;
    }
    //判断平局
    if (steps === 9) {
        message.style.display = 'block';
        winner.innerText = '平局';
        return;
    }
    //根据当前玩家，得到另外一个玩家
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    //移除当前游戏面板现有的类名、添加当前玩家的类名
    gameBord.classList.remove(Player.X, Player.O);
    gameBord.classList.add(currentPlayer);
}
//判赢函数
function checkWin(player) {
    return winsArr.some(function (item, index) {
        //获取到每种获胜情
        //判断元素是否包含雷鸣 classList.contains()
        //3个单元格同时包含
        if (hasClass(cells[item[0]], player) &&
            hasClass(cells[item[1]], player) &&
            hasClass(cells[item[2]], player)) {
            return true;
        }
        return false;
    });
}
//封装hasClass函数：判断DOM元素是否包含某个类名
function hasClass(el, name) {
    return el.classList.contains(name);
}
