var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var months = [1,2,3,4,5,6,7,8,9,10,11,12]
var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var year = new Date().getFullYear()
var month = new Date().getMonth()
var mday = new Date().getDay()
var day = new Date().getDate()
var week = weeks[mday];

let trueday = day //真实的天数日期
let truefirstday = new Date(year, month, 1).getDay() //真实月份的一号的星期

var H3 = document.querySelector('.calendar>div>h3')
var H4 = document.querySelector('.calendar .date h4')
var daybox = document.querySelector('.days')
var leftel = document.querySelector('.left')
var rightel = document.querySelector('.right')

for (var i = 0; i < 42; i++) {
    daybox.appendChild(document.createElement("div"));
}

//闰年判断
var isLeapYear = (year) => {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
};
//每个月天数判断
let arr = [
    31, null, 31, 30,
    31, 30, 31, 31,
    30, 31, 30, 31
];

let val = 1; //用于判断是否是真实的年份与月份
function aa(year, month) {
    H3.textContent = trueday + ', ' + week //在顶部显示日期，周次
    H4.textContent = months[month] + ' · ' + year //在顶部显示当前月份 | 年份

    if (isLeapYear == true) {
        arr[1] = 29
    } else {
        arr[1] = 28
    }

    //获取每个月一号是星期几
    var firstday = new Date(year, month, 1).getDay()

    var divs = document.querySelectorAll('.days>div')

    //清除前一个填入的数字
    for (var i = 7; i < 49; i++) {
        divs[i].textContent = ''
    }
    //为所有日期div添加数字
    for (var i = firstday; i < arr[month] + firstday; i++) {
        divs[i + 7].textContent = i - firstday + 1
        divs[i + 7].classList.add('number')
    }

    for (var i = 0; i < firstday + 7; i++) {
        divs[i + 7].classList.add('number')
    }

    //获取每个月一号是星期几
    var firstday = new Date(year, month, 1).getDay()
    //根据每个月天数来创建div
    for (var i = 0; i < 42; i++) {
        daybox.appendChild(document.createElement("div"));
    }

    var divs = document.querySelectorAll('.days>div')

    //为所有日期div添加数字
    for (var i = firstday; i < arr[month] + firstday; i++) {
        divs[i + 7].textContent = i - firstday + 1
        divs[i + 7].classList.add('number')
    }

    for (var i = 0; i < firstday + 7; i++) {
        divs[i + 7].classList.add('number')
    }

    var dayel = document.querySelectorAll('.number')
    if (val === 1) {
        dayel[day + firstday - 1].classList.add('active')
    } else {
        dayel[trueday + truefirstday - 1].classList.remove('active')
    }

} //函数结束
aa(year, month);

var d = new Date();
leftel.onclick = function() {
    val += 1
    month -= 1
    if (month < 0) {
        year -= 1
        month = 11
    }
    aa(year, month)
}
rightel.onclick = function() {
    val -= 1
    month += 1
    if (month > 11) {
        year += 1
        month = 0
    }
    aa(year, month)
}