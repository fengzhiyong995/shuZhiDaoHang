import '../css/main.css';
// import '../css/iconfont.css';
require('../css/iconfont.css');

class buJu{
    selection(){
        let liHeight,
            li,
            lastLi;
        li = document.querySelector('li:first-child');
        lastLi = document.querySelector('.one .last');
        liHeight = getComputedStyle(li,null).height;
        this.Height(lastLi,liHeight,'height');
    }
    Height(e,v,a){
        e.style.setProperty(a,v)
    }
}
class gongNeng{
    addClass(e,n){
        e.classList.add(n);
    }
    removeClass(e,n){
        e.classList.remove(n);
    }
}
var layout,
    gN,
    ul;
ul = document.querySelector('.one');
layout = new buJu();
gN = new gongNeng();
layout.selection();
gN.addClass(ul.children[0],'addBorder');
ul.addEventListener('mouseover',function(e){
    if(e.target.tagName === 'A' || e.target.classList[0] ==='first'){
        var l;
        l = e.target.nextElementSibling || e.target.children[2];
        gN.addClass(l,'addDisplay');
    }
},false)
ul.addEventListener('mouseout',function(e){
    if(e.target.classList[0] === 'first'){
        var s;
        s = e.target.children[2];
        gN.removeClass(s,'addDisplay');
    }
},false)


buJu = null;