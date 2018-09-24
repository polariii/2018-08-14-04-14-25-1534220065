module.exports = function main(input) {
    var num = input.split('');
    var arrnum = num.map(Number); //同上题，先将输入的字符串型数字一个个拆开，再转换为数组类型。

    var l1 =new Array();
    var l2 =new Array();
    var l3 =new Array(); //构建输出的三行。

    var n = [['._.','|.|','|_|'],['...','..|','..|'], ['._.','._|','|_.'],['._.','._|','._|'], ['...','|_|','..|'],['._.','|_.','._|'], ['._.','|_.','|_|'],['._.','..|','..|'], ['._.','|_|','|_|'],['._.','|_|','..|']];
    //二维数组表示数字0到9的LCD形式。

    for (var i = 0; i < arrnum.length; i++){
        var x = arrnum[i];
        l1.push(n[x][0]);
        l2.push(n[x][1]);
        l3.push(n[x][2]);
      };
    // 利用循环，对input中的每个数字将其LCD形式添加到三行输出数组中。
 
    var str = l1.join(' ') + '\n' + l2.join(' ') + '\n' + l3.join(' ') + '\n'; //按规范展示。
    return str;

};