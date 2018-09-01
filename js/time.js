$(function(){
	var cancel ={
	        minDate:'1999-06-16',
	        maxDate:'2099-12-16'
	    }
	    var opts = $.extend({
	        type:"je",
	        minDate:undefined,
	        maxDate:undefined
	    },cancel);
	    if (opts.type == "je") {
	        $("#optsdate").jeDate({
	            isinitVal: true,
	            festival: true,
	            trigger: "click mouseenter focus",
	            isTime:false,
	            ishmsVal: false,
	            minDate: opts.minDate,
	            maxDate: opts.maxDate,
	            format: "YYYY-MM-DD ",
	            zIndex: 3000,
	            okfun:function (elem,val) {
	                alert(elem)
	            }
	        })
	    }

	    //实现日期选择联动
	    var start = {
	        format: 'YYYY-MM-DD ',
	        minDate: '1900-01-01 ', //设定最小日期为当前日期
	        //festival:true,
	        maxDate: $.nowDate({DD:0}), //最大日期
	        choosefun: function(elem,datas){
	            end.minDate = datas; //开始日选好后，重置结束日的最小日期
	            endDates();
	        },
	        okfun:function (elem,datas) {
	        }
	    };
	    var end = {
	        format: 'YYYY-MM-DD ',
	        minDate: $.nowDate({DD:0}), //设定最小日期为当前日期
	        //festival:true,
	        maxDate: '2099-06-16', //最大日期
	        choosefun: function(elem,datas){
	            start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
	        }
	    };
	    $("#inpstart").jeDate(start);
	    $("#inpend").jeDate(end);
	    function endDates() {
	        end.trigger = false;
	        $("#inpend").jeDate(end);
	    }
})

  
