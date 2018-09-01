$(function(){

  $.fn.hhDrop = function(options){
    var options = jQuery.extend({
        preLoadSrc:"images/loading.gif"
    }, options || {}); 


    var defaults = {};

    return this.each(function(){

      //默认
      var options = $.extend(defaults,options);
      var $this = $(this);

      var $boxSearch = $this.find('.boxSearch');
      var $lineSearchbg = $this.nextAll().find('.lineSearchbg');

      $(".btn_close ").click(function(){
    	  if($boxSearch.hasClass('boxSearchHover')){
    		  $boxSearch.removeClass('boxSearchHover');
    		  $boxSearch.children('.btn_search').removeClass('btn_search_current');
    		  $boxSearch.parent().find('.search_form_suggest').hide();
    	  }else{
    		  $boxSearch.addClass('boxSearchHover');
    		  $boxSearch.children('.btn_search').addClass('btn_search_current');
    		  $boxSearch.parent().find('.search_form_suggest').show();
    	  }
      })

      //出发城市  到达城市
      $boxSearch.click(function(){
        $(".search_hotList").mCustomScrollbar("destroy");//清除滚动条
        setTimeout(function(){
          $(".search_hotList").mCustomScrollbar({
            scrollButtons:{
              enable:false,//是否添加 滚动条两端按钮支持 值:true,false
              scrollType:"continuous",//滚动按钮滚动类型 值:”continuous”(当你点击滚动控制按钮时断断续续滚动) “pixels”(根据每次点击的像素数来滚动)
              scrollSpeed:50,//设置点击滚动按钮时候的滚动速度(默认 20)
              scrollAmount:60//设置点击滚动按钮时候每次滚动的数值 像素单位 默认 40像素
            },
            horizontalScroll:false,//是否创建一个水平滚动条 默认是垂直滚动条
            set_width:false,//：设置你内容的宽度 值可以是像素或者百分比
            set_height:false,//：设置你内容的高度 值可以是像素或者百分比
            mouseWheel:true,//鼠标滚动的支持 值为:true.false
            //mouseWheelPixels:10,//：鼠标滚动中滚动的像素数目(step) 值为以像素为单位的数值
          });
        },200)
        var _this = $(this);
        //点击本身显示隐藏
        if(_this.hasClass('boxSearchHover') ){
          _this.removeClass('boxSearchHover');
          _this.children('.btn_search').removeClass('btn_search_current');
          _this.parent().find('.search_form_suggest').hide();
          
        }else{
        	
          _this.addClass('boxSearchHover');
          _this.children('.btn_search').addClass('btn_search_current');
          _this.parent().find('.search_form_suggest').show();
         
        }

        _this.next().find('.clr_after a').click(function(){
        	$boxSearch.removeClass('boxSearchHover');
          $(".search_form_suggest").hide()
          _this.find('span.key_word b').text($(this).text());
   
        });


        _this.next().find('.search_city_result a').click(function(){
        	$boxSearch.removeClass('boxSearchHover');
            $(".search_form_suggest").hide()
          _this.find('span.key_word b').text($(this).text());

        });
      
   /*     //阻止冒泡
       $(document).bind('click',function(event){
         if(!$(event.target).parent().hasClass('boxSearch' )  && !$(event.target).hasClass('boxSearch') && !$(event.target).parent().parent().hasClass('boxSearch') && !$(event.target).hasClass('input_city') ){
           _this.children('.btn_search').removeClass('btn_search_current');
           _this.removeClass('boxSearchHover');
           _this.parent().find('.search_form_suggest').hide();
         }
       });*/
        
      });
      
      $lineSearchbg.each(function(){
        //搜索框 请输入目的地、主题或关键词
        $(this).find('#arriveSearchText').focus(function(){
          var arrive = $(this).val();
          if(arrive == '请输入目的地、主题或关键词'){
            $(this).val('').css('color','#000');
          }
        });
        $(this).find('#arriveSearchText').blur(function(){
          var arrive = $(this).val();
          if(arrive == ''){
            $(this).val('请输入目的地、主题或关键词').css('color','#b5b5b5');
          }
        });

        //删除搜索信息
        $(this).find('#btn_delete').click(function(){
          $(this).prev('#arriveSearchText').focus().val('').css('color','#000');
        });

      });
  });
    
} 

});