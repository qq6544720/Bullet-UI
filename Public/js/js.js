window.onload=function () {
    BulletOpen();
}
/*页面顶部横条调用方法*/
function HeaderLine(num,title,bg) {
    /*加载完成页面后执行Load方法*/
    document.onreadystatechange = Load;
    /*Load执行方法*/
    var menu = document.getElementById("menu");
    function Load() {
        document.body.firstElementChild.innerHTML = "<div class='header' id='reorder'><div class='left logo'>Bullet UI</div><div class='right' id='r'><i class=\"fa fa-reorder\" onclick='OnclickMenu(" + '"reorder"' + "," + '"menu"' + ")'></i><i class=\"fa fa-th-large\" id='on'></i></div></div>";
        var reorder = document.getElementById("reorder");
        var newinster = document.createElement("div");
        newinster.setAttribute("id","menu");
        newinster.setAttribute("hidden","hidden");
        var n = num;
        var t = title.split(",");
        console.log(t);
        var html="<ul>";
        for (var i = 0; i < n; i++) {
            html+='<li>'+t[i]+'</li>';
        }
        html+="</ul>";
        newinster.innerHTML=html;
        document.getElementById("reorder").insertBefore(newinster, reorder.firstChild);
        var on = document.getElementById("on");
        if(bg !== null || Cbg !== null){
            on.onclick=function () {
                var bgc = ChangeColor("reorder",bg);
                bgc.bg = bg;
                if(reorder.style.background = bg)
                {
                    // bg = "#000";
                    reorder.style.background = bg;
                }
            }
        }
    }
    var Bullet_json = '{"num":"'+num+'","title":"'+title+'","bg":"'+bg+'"}';
    var obj = JSON.parse(Bullet_json);
    console.log(obj);
    return obj;
}
/*Load执行方法结束*/


/*OnclickMenu单击图标触发事件*/
function OnclickMenu(rid,mid)
{
    rid = document.getElementById("r");
    mid = document.getElementById("menu");
    if(rid)
    {
        if(mid.style.display == "block")
        {
            rid.firstElementChild.setAttribute("class", "fa fa-reorder");
            mid.style.display = "none";
        }else{
            rid.firstElementChild.setAttribute("class", "fa fa-remove");
            mid.style.display = "block";
        }
    }
}
/*OnclickMenu单击图标触发结束*/

/*头部菜单变色*/
function ChangeColor(id,bg)
{
    var header = document.getElementById(id);

        if(header){
            if(bg){
                header.style.background = bg;
            }else{
                header.style.background = "#000";
            }
        }
    return bg;
}
/*页面头部按钮排序切换*/
function HeaderBut(){
    var re = document.getElementById("reorder");
    if(re){

    }
}

function BulletOpen(){
    thisURL = this.URL;
    console.log(thisURL);
}