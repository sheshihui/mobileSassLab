window.onload = function(){
    //返回页顶
    var $goTopBtn = document.getElementById("J_backTopBtn");
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 50){
            $goTopBtn.style.display="block";
        }
        else{
            $goTopBtn.style.display="none";
        }
    },false);
    $goTopBtn.addEventListener("click",function(){
        document.getElementsByTagName("body").item(0).scrollTop=0;
        document.getElementsByTagName("html").item(0).scrollTop=0;
    },false);
    
    //tabs
    tabs("#J_tabBox .tab-nav li","#J_tabBox .tab-cont", null);
    
    if($("#J_catList1")) toggleClassFun("#J_catList1 .btn-display-ctrl", "#J_catList1 .list-cat");
    if($("#J_catList2")) toggleClassFun("#J_catList2 .btn-display-ctrl", "#J_catList2 .list-cat");
    if($("#J_catList3")) toggleClassFun("#J_catList3 .btn-display-ctrl", "#J_catList3 .list-cat");
    
    if($("#J_shopDetailBox")){
    	toggleClassFun("#J_shopDetailBox .btn-display-ctrl", "#J_shopDetailBox .infobox", "show-more");
    	toggleFun("#J_shopDetailBox .btn-display-ctrl","收起","展开");
	}
}
 
//tab
function tabs(tabNav,tabCon,tabEvent,ativeClass){
	var index = 0;
    var ativeClass = ativeClass || 'current';
	if(tabEvent){	
		$(tabNav).mouseover(function(){
			index = $(tabNav).index(this);
			tabsFun(index,tabNav,tabCon,ativeClass);
		 });
	 }else{
		 $(tabNav).on(
            'click',
            (function(){
                index = $(tabNav).index(this);
                tabsFun(index,tabNav,tabCon,ativeClass);
             })
         );
     }
}
function tabsFun(index,tabNav,tabCon,ativeClass){
	$(tabNav).removeClass(ativeClass).eq(index).addClass(ativeClass);
	$(tabCon).removeClass(ativeClass).eq(index).addClass(ativeClass);
}

//show more
function toggleClassFun(btnObj,targetObj,className,iconClass,iconActivClass){
	var _className = className || 'active';
	$(btnObj).each(function(index){
		$(this).click(function(){
  			$(targetObj).eq(index).toggleClass(_className);
  		})
	})
}
function toggleFun(btnObj,txtA, txtB){
	var innerHtml = '展开' + ' <i class="arrow-down"></i>';
	$(btnObj).on('click',function(e){
		innerHtml = (innerHtml == '展开' +' <i class="arrow-down"></i>') ? ('收起' + ' <i class="arrow-up"></i>') : ('展开' + ' <i class="arrow-down"></i>');
		$(btnObj).html(innerHtml);
	});
}
