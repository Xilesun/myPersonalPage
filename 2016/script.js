var btn = document.getElementById("backtop");

/*
获取滚动条垂直偏移量的函数
除了IE8及更早版本，其他浏览器可以使用Window对象的PageYOffset属性
同时可以通过scrollTop属性来获取。
*/
function getScrollTop(){
    //IE8及更早版本没有window.pageYOffset属性
    if(window.pageYOffset != null){
        return window.pageYOffset;
    }

    //标准模式查询document.documentElement
    if(document.compatMode == "CSS1Compat"){
        return window.document.documentElement.scrollTop;
    }

    //怪异模式查询document.body
    return window.document.body.scrollTop;
}

function backTop(){
    var top = getScrollTop();  

    if (top > 0) {  
        //用计时器设置每隔10毫秒调用自身滚动一部分
        //模拟拉动滚动条效果
        //arguments.callee指向当前调用的函数本身
        window.scrollTo(0, top / 1.05);
        setTimeout(arguments.callee, 10);  
    }
}

//将函数绑定到相应事件
btn.onclick = backTop;