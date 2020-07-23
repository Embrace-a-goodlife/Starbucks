//1.0获得要操作的事件源
var banner=document.getElementsByClassName('banner')[0]
var bannerImg=document.querySelectorAll('.banner img')
console.log(bannerImg)
//定时器轮播显示隐藏图片
var timer=null
//定义一张记录显示当前图片的索引值
var index=0
timer=setInterval(fn, 1000)

//显示图片函数
function showPic(){
    for(var i=0;i<bannerImg.length;i++){
        bannerImg[i].style.cssText = "display: none"
    }
    bannerImg[index].style.display = "block"
    //console.log(index)
}
function fn() {
    index ++
    //判断当前显示的是否为最后一张
    if(index >= bannerImg.length ){
        index=0
    }
    //每经过1秒，切换一张图片
    showPic()
}

//鼠标悬停时，暂停定时器
banner.onmouseover=function () {
    clearInterval(timer)
}
//鼠标离开，开始定时器
banner.onmouseout=function () {
    timer=setInterval(fn, 1000)
}

//向左向右的箭头处理
var left=document.getElementsByClassName('left')[0]
var right=document.getElementsByClassName('right')[0]
console.log(left,right)

right.onclick=function(){
    index ++;
    //判断当前显示的图片是否为最后一张
    if(index >= bannerImg.length ){
        index=0
    }
    showPic()
}
left.onclick=function(){
    index --;
    //判断当前显示的图片是否为最后一张
    if(index < 0 ){
        index=bannerImg.length -1
    }
    showPic()
}