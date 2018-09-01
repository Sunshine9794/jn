var showNameList = ['pH','氨氮','电导率','余氯','总磷','总氮','浑浊度','溶解氧']
$(function () {
  var myChart1 = echarts.init(document.getElementById('right-top-chart'));
  var myChart2 = echarts.init(document.getElementById('right-bottom-chart'));
  var myChart3 = echarts.init(document.getElementById('left-bottom-chart'));
  var myChart1_ = document.getElementById('right-top-chart');
  var myChart2_ = document.getElementById('right-bottom-chart');
  var myChart3_ = document.getElementById('left-bottom-chart');

  var myChartContainer = function () {



    var width = $("#right-top-box .box-chart").width()+"px";
    var height1 = $("#right-top-box .box-chart").height() - 35 +"px";
    var height = $("#right-top-box .box-chart").height()+"px";
    myChart1_.style.width =width
    myChart1_.style.height =height1

    console.log(height1)
    myChart2_.style.width =width
    myChart2_.style.height =$("#left-bottom-box .box-chart").height() - 45+"px";

    myChart3_.style.width =$("#left-bottom-box .box-chart").width()+"px";
    myChart3_.style.height =$("#left-bottom-box .box-chart").height()+"px";

  };
  myChartContainer();

$('.box-tit').dblclick(function () {
  $(this).next('.box-chart').find('.charts').addClass('chart-qp')
  var box =  $(this).parent('div')
 $(box).addClass('z-d')
  if($(this).find('span').text() == '站点合格率对比'){
    var year = $('#right-top-box .bootstrap-select:eq(1)').find('.filter-option').text()
    $("#fullYear").html('年份'+year)
    $("#fullYear").show()
  }
  var id = $(this).next('.box-chart').find('.charts').attr('id')
  var compareChart = echarts.getInstanceByDom(document.getElementById(id));
  compareChart.resize()
  $("#"+id).dblclick(function () {
    $(this).removeClass('chart-qp')
    $(box).removeClass('z-d')
    compareChart.resize();
    $("#fullYear").hide()
  })
})
  $('.chart-qp-icon').click(function () {
    $(this).parents('.box-tit').next('.box-chart').find('.charts').addClass('chart-qp')
    if($(this).siblings('span').text() == '站点合格率对比'){
      var year = $('#right-top-box .bootstrap-select:eq(1)').find('.filter-option').text()
      $("#fullYear").html('年份'+year)
      $("#fullYear").show()
    }
    var box =  $(this).parents('.par-box')
    $(box).addClass('z-d')
    var id = $(this).parents('.box-tit').next('.box-chart').find('.charts').attr('id')
    var compareChart = echarts.getInstanceByDom(document.getElementById(id));
    compareChart.resize();
    $("#"+id).dblclick(function () {
      $(this).removeClass('chart-qp')
      $(box).removeClass('z-d')
      compareChart.resize();
      $("#fullYear").hide()
    })
  })
  var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
  var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];



  /*var option3  = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data:['余氧合格','浑浊度','PH','二氧化碳','氮气'],
      textStyle:{
        color:'#fff'
      }
    },
    grid: {
      x:50,
      y:40,
      x2:20,
      y2:40,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2011','2012','2013','2014','2015','2016','2017'],
      axisLine:{
        lineStyle:{
          color:'#BA5A23',
//                            width:1,//这里是为了突出显示加上的
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLine:{
        lineStyle:{
          color:'#BA5A23',
//                            width:1,//这里是为了突出显示加上的
        }
      },
    },
    series: [
      {
        name:'余氧合格',
        type:'line',
        data:[120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
          normal: {
            color: '#C73433'
          }
        },

      },
      {
        name:'浑浊度',
        type:'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        itemStyle: {
          normal: {
            color: '#485B21'
          }
        },
      },
      {
        name:'PH',
        type:'line',
        data:[150, 232, 201, 154, 190, 330, 410],
        itemStyle: {
          normal: {
            color: '#A34D10'
          }
        },
      },
      {
        name:'二氧化碳',
        type:'line',
        data:[320, 332, 301, 334, 390, 330, 320],
        itemStyle: {
          normal: {
            color: '#013C6E'
          }
        },
      },
      {
        name:'氮气',
        type:'line',
        data:[820, 932, 901, 934, 1290, 1330, 1320],
        itemStyle: {
          normal: {
            color: '#298884'
          }
        },
      }
    ]
  };
  myChart3.setOption(option3)*/
  // myChartContainer();
  myChart1.resize()
  myChart2.resize()
  myChart3.resize()
  mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jcmVkaWJsZTk3MiIsImEiOiJjamZrZ2J3ZWIwNjczMndsbmVsN21sYXdvIn0.4bohg8pAdB0AoHiYcOQ45Q';
  var myChart = echarts.init(document.getElementById('map'));

/*  var uploadedDataURL = "./json/data-1495284690309-Bk9Ro3Te-.json";
  $.getJSON(uploadedDataURL, function(linedata) {

  });*/
 //获取在线所有站点
  $.ajax({
    url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=1&rows=10000',
    dataType:'json',
    type:'get',
    success:function (data) {
      console.log(data);
      var str = ''
      for(var i=0;i<data.rows.length;i++){
        str += '<option value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
      }
      $("#left-top-box .first-data .num span").html(data.rows.length)
      $('#lunch').html(str)
      $('#lunch1').html(str)
      setTimeout(function () {
        $('.selectpicker').selectpicker('refresh');
        $('.selectpicker:first').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
        $('.selectpicker:last').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
        $(".bs-searchbox").next('.dropdown-menu').css({
          'height': 'calc(100% - 40px)',
          width: '100%',
          background: 'rgb(0, 0, 0)'
        })
        clearGdl()
        var param = data.rows[12].code+':'+data.rows[12].name+','+data.rows[13].code+':'+data.rows[13].name+','+data.rows[14].code+':'+data.rows[14].name+','+data.rows[15].code+':'+data.rows[15].name+','+data.rows[16].code+':'+data.rows[16].name
        moreSite(0,myChart2,param);
        hglToggle(0,myChart1,param,2011);
      },100)
      var timer
      var timer1
      $("#lunch").on('change',function () {
        if(timer) clearTimeout(timer)
        timer =  setTimeout(function () {
          var val = $('#lunch').val()
          var name = $(' .filter-option:last').text().split(',')
          // console.log(name)
          for(var i =0;i<val.length;i++){
            val[i]=val[i]+':'+name[i].trim()
          }
          moreSite(0,myChart2,val.join(','));
        },500)

      })
      $("#lunch1,#selcetTime").on('change',function () {
        if(timer1) clearTimeout(timer1)
        timer1 =  setTimeout(function () {
          var val = $('#lunch1').val()
          // console.log(val)
          var name = $('.filter-option:first').text().split(',')
          console.log(name)
          for(var i =0;i<val.length;i++){
            val[i]=val[i]+':'+name[i].trim()
          }
          hglToggle(0,myChart1,val.join(','),$('#selcetTime').val());
        },500)

      })
    }
  })
/*  $.ajax({
    url:'http://124.133.238.162:20005/szx/online/online-data-demo-area-statis!getPoint.action',
    data:{
      demoAreaCode: "'01','02','03'"
    },
    type:'post',
    dataType:'json',
    success:function (data) {
    }
  })*/
  //实验室监测站点
  $.ajax({
    url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=3&rows=10000',

    type:'get',
    dataType:'json',
    success:function (data) {
      $("#left-center-box .first-data .num span").html(data.rows.length)

    }

  })
  jctoogle(0,myChart3)

  $('#left-bottom-box .toogle-btn button').click(function () {
      $('#left-bottom-box .toogle-btn button').removeClass('btn-act')
    $(this).addClass('btn-act')
    jctoogle($(this).index(),myChart3)
  })
  var timer1
  $('#right-top-box .toogle-btn button').click(function () {
    $('#right-top-box .toogle-btn button').removeClass('btn-act')
    $(this).addClass('btn-act')
    // hglToggle($(this).index(),myChart1)
    if(timer1) clearTimeout(timer1)
    // moreSite($(this).index(),myChart2)
    if($(this).index()==0){

      $.ajax({
        url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=1&rows=10000',
        dataType:'json',
        type:'get',
        success:function (data) {
          console.log(data);
          var str = ''
          for(var i=0;i<data.rows.length;i++){
            str += '<option value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
          }
          $('#lunch1').html(str)
          setTimeout(function () {
            $('.selectpicker:first').selectpicker('refresh');
            $('.selectpicker:first').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
            $(".bs-searchbox:first").next('.dropdown-menu').css({
              'height': 'calc(100% - 40px)',
              width: '100%',
              background: 'rgb(0, 0, 0)'
            })
            clearGdl()
            var param = data.rows[12].code+':'+data.rows[12].name+','+data.rows[13].code+':'+data.rows[13].name+','+data.rows[14].code+':'+data.rows[14].name+','+data.rows[15].code+':'+data.rows[15].name+','+data.rows[16].code+':'+data.rows[16].name
            hglToggle(0,myChart1,param,$('#selcetTime').val());
          },100)

          $("#lunch1,#selcetTime").unbind('change').on('change',function () {
            if(timer1) clearTimeout(timer1)
            timer1 =  setTimeout(function () {
              var val = $('#lunch1').val()
              var name = $('.filter-option:first').text().split(',')
              // console.log(name)
              for(var i =0;i<val.length;i++){
                val[i]=val[i]+':'+name[i].trim()
              }
              hglToggle(0,myChart1,val.join(','),$('#selcetTime').val());
              $("#lunch1,#selcetTime").selectpicker('refresh');
            },500)

          })

        }
      })
    }else{
      $.ajax({
        url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=3&rows=10000',
        dataType:'json',
        type:'get',
        success:function (data) {
          console.log(data);
          var str = ''
          for(var i=0;i<data.rows.length;i++){
            str += '<option value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
          }
          $('#lunch1').html(str)

          setTimeout(function () {
            $('.selectpicker:first').selectpicker('refresh');
            $('.selectpicker:first').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
            $(".bs-searchbox:first").next('.dropdown-menu').css({
              'height': 'calc(100% - 40px)',
              width: '100%',
              background: 'rgb(0, 0, 0)'
            })
            clearGdl()
            var param = data.rows[12].code+':'+data.rows[12].name+','+data.rows[13].code+':'+data.rows[13].name+','+data.rows[14].code+':'+data.rows[14].name+','+data.rows[15].code+':'+data.rows[15].name+','+data.rows[16].code+':'+data.rows[16].name
            hglToggle(1,myChart1,param,$('#selcetTime').val());
          },100)
          $("#lunch1,#selcetTime").unbind('change').on('change',function () {
            if(timer1) clearTimeout(timer1)
            timer1 =  setTimeout(function () {
              var val = $('#lunch1').val()
              var name = $('.filter-option:first').text().split(',')
              // console.log(name)
              for(var i =0;i<val.length;i++){
                val[i]=val[i]+':'+name[i].trim()
              }
              hglToggle(1,myChart1,val.join(','),$('#selcetTime').val());
              $("#lunch1,#selcetTime").selectpicker('refresh');
            },500)

          })

        }
      })
    }
  })
  var timer
  $('#right-bottom-box .toogle-btn button').click(function () {
    $('#right-bottom-box .toogle-btn button').removeClass('btn-act')
    $(this).addClass('btn-act')
    if(timer) clearTimeout(timer)
    // moreSite($(this).index(),myChart2)
    if($(this).index()==0){
      $.ajax({
        url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=1&rows=10000',
        dataType:'json',
        type:'get',
        success:function (data) {
          console.log(data);
          var str = ''
          for(var i=0;i<data.rows.length;i++){
            str += '<option value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
          }
          $('#lunch').html(str)
          setTimeout(function () {
            $('.selectpicker:last').selectpicker('refresh');
            $('.selectpicker:last').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
            $(".bs-searchbox").next('.dropdown-menu').css({
              'height': 'calc(100% - 40px)',
              width: '100%',
              background: 'rgb(0, 0, 0)'
            })
            clearGdl()
            var param = data.rows[12].code+':'+data.rows[12].name+','+data.rows[13].code+':'+data.rows[13].name+','+data.rows[14].code+':'+data.rows[14].name+','+data.rows[15].code+':'+data.rows[15].name+','+data.rows[16].code+':'+data.rows[16].name
            moreSite(0,myChart2,param);
          },100)

          $("#lunch").unbind().on('change',function () {
            if(timer) clearTimeout(timer)
            timer =  setTimeout(function () {
              console.log(1)
              var val = $('#lunch').val()
              var name = $('.filter-option').text().split(',')
              // console.log(name)
              for(var i =0;i<val.length;i++){
                val[i]=val[i]+':'+name[i].trim()
              }
              moreSite(0,myChart2,val.join(','));
            },500)

          })
        }
      })
    }else{
      $.ajax({
        url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=3&rows=10000',
        dataType:'json',
        type:'get',
        success:function (data) {
          console.log(data);
          var str = ''
          for(var i=0;i<data.rows.length;i++){
            str += '<option value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
          }
          $('#lunch').html(str)

          setTimeout(function () {
            $('.selectpicker:last').selectpicker('refresh');
            $('.selectpicker:last').selectpicker('val', [data.rows[12].code,data.rows[13].code,data.rows[14].code,data.rows[15].code,data.rows[16].code]);
            $(".bs-searchbox:last").next('.dropdown-menu').css({
              'height': 'calc(100% - 40px)',
              width: '100%',
              background: 'rgb(0, 0, 0)'
            })
            clearGdl()
            var param = data.rows[12].code+':'+data.rows[12].name+','+data.rows[13].code+':'+data.rows[13].name+','+data.rows[14].code+':'+data.rows[14].name+','+data.rows[15].code+':'+data.rows[15].name+','+data.rows[16].code+':'+data.rows[16].name
            moreSite(1,myChart2,param);
          },100)
          $("#lunch").unbind().on('change',function () {
            if(timer) clearTimeout(timer)
            timer =  setTimeout(function () {
              var val = $('#lunch').val()
              var name = $('.filter-option:last').text().split(',')
              // console.log(name)
              for(var i =0;i<val.length;i++){
                val[i]=val[i]+':'+name[i].trim()
              }
              moreSite(1,myChart2,val.join(','));
            },500)

          })
        }
      })
    }

  })
  //库存数据
  $.ajax({
    url:'http://124.133.238.162:20005/szx/waterquality/stat/stat-online-meas!getMonitor.action',
    type:'get',
    dataType:"json",
    success:function (data) {
      console.log( $("#left-top-box .box-data:last .num span"))
      $("#left-top-box .box-data:last .num span").text(data.rows[0].onlineCnt)
      $("#left-center-box .box-data:last .num span").text(data.rows[0].labCnt)
    }
  })
    //实验室站点合格率
  $.ajax({
    url:'http://124.133.238.162:20005/szx/onlinedata/online-data!getQualified.action?year=2015',
    dataType:'json',
    type:'get',
    success:function (data) {
      console.log(data)
      var val = [];
      var num = [];

      for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].qualified_rate!=null && data.rows[i].qualified_rate!=undefined&&data.rows[i].qualified_rate!=''&&data.rows[i].qualified_rate!=0){
          val.push({
            name:data.rows[i].name,
            value:[data.rows[i].longitude,data.rows[i].latitude,data.rows[i].qualified_rate],
            headwaters_type:data.rows[i].headwaters_type,
            water_type:data.rows[i].water_type,

          })
          num.push(data.rows[i].qualified_rate)
        }
      }
      console.log(val)

      var maxN = Math.max.apply(null,num);
      myChart.showLoading();

      myChart.hideLoading();
      myChart.setOption({

        visualMap: {
          show: false,
          type:'piecewise',
          calculable: true,
          realtime: false,
          pieces: [
            {min: 100},
            {min: 0, max: 60, color: '#FE0315'},
            {min: 61, max: 79, color: '#1EE836'},
            {min: 80, max: 100, color: '#25FF01'},
            {max:0}
          ],
        /*  inRange: {
            color: ['#313695', '#4575b4',  '#d73027', '#a50026']
          },*/
        /*  outOfRange: {
            colorAlpha: 0
          },*/
        },
        tooltip:{
          show:true,
          formatter:function (params) {
            var result = params.marker+''+params.data.name+':</br>' +
                '水源类型：'+params.data.water_type+'</br>' +
                '合格率：'+params.value[2]+'%';

            return result;
          }
        },
        mapbox: {
          center: [117,36.65],
          zoom: 9,
          pitch: 50,
          bearing: -10,
          style: 'mapbox://styles/mapbox/dark-v9',
          // altitudeScale: 3e2,
          boxHeight: 15,
          // altitudeScale: 3e2,
          postEffect: {
            enable: true,
            SSAO: {
              enable: true,
              radius: 2,
              intensity: 1.5
            }
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 1,
              shadow: true,
              shadowQuality: 'high'
            },
            ambient: {
              intensity: 0.
            },
            ambientCubemap: {
              texture: './images/data-1491896094618-H1DmP-5px.hdr',
              exposure: 1,
              diffuseIntensity: 0.5
            }
          },
        },


        series: [{
          type: 'bar3D',
          shading: 'realistic',
          coordinateSystem: 'mapbox',
          barSize: 0.5,
          label:{
            show:false,
            formatter:''
          },
          itemStyle:{
            opacity:0.5
          },
          data: val
        },]
      });
    }
  })
 /* $.ajax({
    url:'http://124.133.238.162:20005/szx/main!getOnlineQualifiedRate.action',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data)
    }
  })*/
  $(window).resize(function(){
    myChart.resize()
    myChart1.resize()
    myChart2.resize()
    myChart3.resize()
    myChartContainer();
  });
})
//检测数据合格率
function jctoogle(type,myChart3) {
  var url =''

  myChart3.clear()
  if(type==0){
    url= 'http://124.133.238.162:20005/szx/main!getOnlineQualifiedRate.action'
    $.ajax({
      url:url,
      dataType:'json',
      success:function (data) {
        console.log(data)
        var all = [];
        var yearlist = []
        var list = []
        for(var i in data){
          if(yearlist.indexOf(data[i].year) != -1){

            list[yearlist.indexOf(data[i].year)].push(data[i])
          }else{
            yearlist.push(data[i].year)
            list.push([data[i]])
          }
        }
        var ydata = []
        var namelist = []
        var listLen = []
        for(var k in list){
          listLen.push(list[k].length)
            for(var q in list[k]){

              if(namelist.indexOf(list[k][q].item_name ) == -1){
                namelist.push(list[k][q].item_name)
              }
            }
        }
        var max = Math.max.apply(null,listLen);
        for(var q=0;q<max;q++){
          var data = []
          var name = '';
          for(var k =0;k<list.length;k++){
            if(list[k][q] == undefined){
              data.push('-')
            }else{
              name = list[k][q].item_name
              data.push(list[k][q].qualified)
            }

          }
          if(showNameList.indexOf(name) != -1){
            ydata.push({
              name:name,
              type:'line',
              data:data

            })
          }

        }
        console.log(namelist)
        var formaName ={}
        for(var i in namelist){
          var key = namelist[i]
          if(i==0 || i==1 || i==2){
            formaName[key]=true
          }else{
            formaName[key]=false
          }
        }
          console.log(formaName)
    var option ={    tooltip : {
          trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter:function (res) {
            var str = ''
            for (var i in res){
              if(i%3==0 && i != 0 ){
                if(parseFloat(res[i].value=='NaN')){
                  str+=' '+res[i].marker+' '+res[i].seriesName+': '+parseFloat(res[i].value).toFixed(0)+'%<br/>'
                }else{
                  str+=' '+res[i].marker+' '+res[i].seriesName+': '+res[i].value+'%<br/>'
                }
              }else{
                if(parseFloat(res[i].value=='NaN')){
                  str+=' '+res[i].marker+' '+res[i].seriesName+': '+parseFloat(res[i].value).toFixed(0)+'%'
                }else{
                  str+=' '+res[i].marker+' '+res[i].seriesName+': '+res[i].value+'%'
                }

              }
            }
            return str
          }
        },
        legend: {
          data:namelist,
              textStyle:{
            color:'#fff'
          },
          selected:formaName
        },

        grid: {
          left: '3%',
              right: '4%',
              bottom: '3%',
          top:95,
              containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : yearlist,
            axisLine:{
              lineStyle:{
                color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
              }
            },
          }
        ],

        yAxis : [
          {
            type : 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            axisLine:{
              lineStyle:{
                color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
              }
            },
            max:100
          }
        ],
            series :ydata
      };
    myChart3.setOption(option);
        console.log(ydata)
      }
    })
  }else if(type==1){
    url ='http://124.133.238.162:20005/szx/main!getLabQualifiedRate.action'
    $.ajax({
      type: 'GET',
      async: false,
      url:url ,
      dataType: 'json',
      data: {},
      success: function (result) {
        var array = new Array();
        var hzd = new Array();
        var yl = new Array();
        var hzdqualifiedTimes = new Array();
        var hzdmonitorTimes = new Array();
        var ylqualifiedTimes = new Array();
        var ylmonitorTimes = new Array();
        for (var i = 0; i < result.length; i++) {
          var obj = result[i];
          var itemName = obj.item_name;
          var qualified = obj.qualified;
          if (itemName == "浑浊度") {
            array.push(obj.year);
            hzd.push(qualified);
            hzdqualifiedTimes.push(result[i].qualifiedTimes);
            hzdmonitorTimes.push(result[i].monitorTimes);
          } else if (itemName == "余氯") {
            yl.push(qualified);
            ylqualifiedTimes.push(result[i].qualifiedTimes);
            ylmonitorTimes.push(result[i].monitorTimes);
          }
          var   option = {
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: '{b0} <br/>'+
              ' {a0} : {c0} % <br />'+
              ' {a1} : {c1} <br />'+
              ' {a2} : {c2} <br />'+
              ' {a3} : {c3} % <br /> '+
              ' {a4} : {c4} <br /> '+
              ' {a5} : {c5}'
            },
            legend: {
              data:['余氯合格率','浑浊度合格率'],
              textStyle:{
                color:'#fff'
              }
            },

            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : array,
                axisLine:{
                  lineStyle:{
                    color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
                  }
                },
              }
            ],
            toolbox: {
              show: true,
              feature: {

                magicType: {
                  type: ['line', 'bar'],


                },

              },
              iconStyle:{
                color:"#ffffff",
                borderColor:"#ffffff"
              }
            },
            yAxis : [
              {
                type : 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                axisLine:{
                  lineStyle:{
                    color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
                  }
                },
                max:100
              }
            ],
            series : [
              {
                name:'余氯合格率',
                type:'line',
                stack: '余氯',
                data:yl
              },
              {
                name:'余氯总数',
                type:'line',
                stack: '余氯',
                itemStyle:{
                  normal:{
                    color:'none'
                  }
                },
                data:ylmonitorTimes
              },
              {
                name:'余氯合格数',
                type:'line',
                stack: '余氯',
                itemStyle:{
                  normal:{
                    color:'none'
                  }
                },
                data:ylqualifiedTimes
              },
              {
                name:'浑浊度合格率',
                type:'line',
                stack: '浑浊度',
                data:hzd
              },
              {
                name:'浑浊度总数',
                type:'line',
                stack: '浑浊度',
                itemStyle:{
                  normal:{
                    color:'none'
                  }
                },
                data:hzdmonitorTimes
              },
              {
                name:'浑浊度合格数',
                type:'line',
                stack: '浑浊度',
                itemStyle:{
                  normal:{
                    color:'none'
                  }
                },
                data:hzdqualifiedTimes
              }

            ]
          };
          myChart3.setOption(option);
        }
      }
    })
  }


}
//站点合格率对比
function hglToggle(type,myChart1,param,time) {
    console.log(type)
      var url =''
  myChart1.clear()
  if(type==0){
    url ='http://124.133.238.162:20005/szx/onlinedata/online-data-point-item-bar!initBar.action'


  }else if(type==1){
    url= 'http://124.133.238.162:20005/szx/waterquality/demoarea/point-item-year-bar!initBar.action'

  }
  $.ajax({
    url:url,
    data:{
      param: param,
      year: time,
      flag:1
    },
    dataType:'json',
    type:'post',
    success:function (data) {
      console.log(data)
      var xData = [];
      var residualChlorineQualifiedRateArray = [];
      var residualChlorineQualifiedArray =[];
      var residualChlorineNoQualifiedArray = [];
      var turbidityQualifiedRateArray =[];
      var turbidityQualifiedArray =[];
      var turbidityNoQualifiedArray = [];
      var ser = []
      var name = []
      var obj = {};
      var arr = [];

      $.each(data.data,function (k,v) {

        xData.push(k)


          for (var i = 0, len = v.length; i < len; i++) {
            name.push(v[i].item_name)

            var item = v[i]
            var province = item['item_name']; //以province 举例
            if(province!=null){
              if (obj.hasOwnProperty(province)) {

                obj[province].push({
                  value:parseFloat(item['qualified_rate']).toFixed(2),
                  monitor_times:item['monitor_times'],
                  no_qualified_times:item['no_qualified_times'],
                  qualified_times:item['qualified_times']
                });

              } else {
                arr= []
                arr.push({
                  value:parseFloat(item['qualified_rate']).toFixed(2),
                  monitor_times:item['monitor_times'],
                  no_qualified_times:item['no_qualified_times'],
                  qualified_times:item['qualified_times']
                })
                obj[province] = arr;

              }
            }
          }
        /*  name.push(v[i].item_name)
          ser.push({
            name: v[i].item_name,
            type: 'bar',
            stack: v[i].item_name,
            data:
          })*/
      })
     console.log(obj)
      $.each(obj,function (k,v) {
        if($('.toogle-btn button:first').hasClass('btn-act')){
          if(showNameList.indexOf(k) != -1) {
            ser.push({
              name: k,
              type: 'bar',
              data: v
            })
          }
        }else{
          ser.push({
            name: k,
            type: 'bar',
            data: v
          })
        }

      })
 /*     data.data.residualChlorineQualifiedRateArray.forEach(function (v,k) {
        residualChlorineQualifiedRateArray.push(v)
      })
      data.data.residualChlorineQualifiedArray.forEach(function (v,k) {
        residualChlorineQualifiedArray.push(v)
      })
      data.data.residualChlorineNoQualifiedArray.forEach(function (v,k) {
        residualChlorineNoQualifiedArray.push(v)
      })
      data.data.turbidityQualifiedRateArray.forEach(function (v,k) {
        turbidityQualifiedRateArray.push(v)
      })
      data.data.turbidityQualifiedArray.forEach(function (v,k) {
        turbidityQualifiedArray.push(v)
      })
      data.data.turbidityNoQualifiedArray.forEach(function (v,k) {
        turbidityNoQualifiedArray.push(v)
      })*/
      var option1 = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
          },

        /*  formatter:function (res) {
            console.log(res)

          }*/
          //,
          //      formatter:'{a0}: {c0}<br />{a1}: {c1}<br />余氯合格率：'+residualChlorineQualifiedRateArray+'<br/>'
          //     		+'{a2}: {c2}<br />{a3}: {c3}<br/>浑浊的合格率：'+turbidityQualifiedRateArray
        },
        legend: {
          data:name,
          type:'scroll',
          textStyle:{
            color:'#fff'
          },
          pageIconColor:'#fff',
          pageTextStyle:{
            color:'#fff'
          }

        },
      /*  toolbox: {
          show : true,
          feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },*/
        grid: {

          x:50,
          y:40,
          x2:20,
          y2:40,



        },
      /*  toolbox: {
          show: true,
          feature: {

            magicType: {
              type: ['line', 'bar'],


            },

          },
          iconStyle:{
            color:"#ffffff",
            borderColor:"#ffffff"
          }
        },*/
        xAxis : [
          {
            type : 'category',
            data : xData,
            axisLine: {
              lineStyle: {
                color: "#ffffff"
              }
            },
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLine:{
              lineStyle:{
                color:'#ffffff',
//                            width:1,//这里是为了突出显示加上的
              }
            },
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
          }
        ],
        series : ser
      };
      myChart1.setOption(option1)

    }
  })
}
function compare(property){
  return function(a,b){
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}
//多站点历年合格率
function moreSite(type,myChart2,param) {

  var url =''

  myChart2.clear()
  if(type==0){
    url= 'http://124.133.238.162:20005/szx/onlinedata/online-data-point-item-year-bar!initBar.action'

  }else if(type==1){
    url ='http://124.133.238.162:20005/szx/waterquality/demoarea/point-item-year-bar!initBar.action'
   /* param='058:七里堡小区,031:鹊华水厂,029:辛庄加压站'*/

  }
  //多站点历年合格率
  $.ajax({
    url:url,
    data:{
      param:param

    },
    dataType:'json',
    type:'get',
    success:function (data) {
      console.log(data)
      var yData = [];
      var zData = [];
      var residualChlorineNoQualifiedArray = [];
      var residualChlorineQualifiedArray = [];
      var turbidityNoQualifiedArray = [];
      var turbidityQualifiedArray = [];
      var turbidityQualifiedRateArray = [];
      var num = []
      var len = []
      for(var k=0;k<data.data.length;k++){
        len.push({
          index:k,
          length:data.data[k].year.length
        })
      }
      var maxLen = len.sort(compare('length'))
      var xData=data.data[maxLen[0].index].year

      for(var i =0;i<data.data.length;i++){
        yData.push(data.data[i].pointName)

        for(var q=0;q<data.data[i].residualChlorineQualifiedRateArray.length;q++){
          zData.push([i,q,data.data[i].residualChlorineQualifiedRateArray[q]])
          num.push(data.data[i].residualChlorineQualifiedRateArray[q])
        }
        data.data[i].residualChlorineNoQualifiedArray.forEach(function (v,k) {
          residualChlorineNoQualifiedArray.push([i,k,v])
        })
        data.data[i].residualChlorineQualifiedArray.forEach(function (v,k) {
          residualChlorineQualifiedArray.push([i,k,v])
        })
        data.data[i].residualChlorineNoQualifiedArray.forEach(function (v,k) {
          turbidityNoQualifiedArray.push([i,k,v])
        })
        data.data[i].turbidityQualifiedRateArray.forEach(function (v,k) {
          turbidityQualifiedArray.push([i,k,v])
        })
        data.data[i].turbidityQualifiedArray.forEach(function (v,k) {
          turbidityQualifiedRateArray.push([i,k,v])
        })
      }
      console.log(turbidityQualifiedRateArray)
      var maxN =  Math.max.apply(null,num);
      console.log(yData)
      console.log(zData)
      console.log(xData)
      // for()
      var  option2 = {
        tooltip: {
          formatter:function (params) {
            var result = params.marker+''+yData[params.data[0]]+':</br>' +
                '余氯合格率：'+params.value[2]+'%</br>' +
                '余氯合格：'+residualChlorineQualifiedArray[params.data[1]][2]+'</br>' +
                '余氯不合格：'+residualChlorineNoQualifiedArray[params.data[1]][2]+'</br>' +
                '浑浊度合格率：'+turbidityQualifiedArray[params.data[1]][2]+'%</br>' +
                '余氯合格：'+turbidityQualifiedRateArray[params.data[1]][2]+'</br>' +
                '余氯不合格：'+turbidityNoQualifiedArray[params.data[1]][2]+''

            return result
          }
        },

        xAxis3D: {
          type: 'category',
          data: yData,
          axisLabel:{
            textStyle:{
              color:'#fff'
            }
          }
        },
        visualMap: {
          show: false,
          calculable: true,
          realtime: false,
          type:'piecewise',
          pieces: [
            {min: 100},
            {min: 0, max: 60, color: '#FE0315'},
            {min: 61, max: 79, color: '#1EE836 '},
            {min: 80, max: 100, color: '#1EE836 '},
            {max:0}
          ],
        },
        yAxis3D: {
          type: 'category',
          data: xData,
          minInterval:1,
          interval:0,
          axisLabel:{
            textStyle:{
              color:'#fff'
            }
          }
        },
        zAxis3D: {
          type: 'value',
          axisLabel:{
            textStyle:{
              color:'#fff'
            }
          }
        },
        grid3D: {
          boxWidth: 80,
          boxDepth: 50,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          },
          viewControl:{
            distance:180
          }
        },
        series: [{
          type: 'bar3D',
          name:'余氯合格率',
          data: zData,

          shading: 'lambert',
          // stack: '余氯',
          /*  label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1
              }
            },*/


          emphasis: {
            label: {
              textStyle: {
                fontSize: 20,
                color: '#900'
              }
            },
            itemStyle: {
              color: '#900'
            }
          }
        },
          /*{
            name:'余氯合格',
            type:'bar3D',
            stack: '余氯',
            emphasis: {
              label: {
                show: false
              }
            },
            itemStyle:{
              color:'none'
            },
            minHeight:0,
            data:residualChlorineQualifiedArray
          },*/
        ]
      }
      myChart2.setOption(option2)
    }
  })
}
function clearGdl(){
  $(".dropdown-menu inner").mCustomScrollbar("destroy");//清除滚动条
  setTimeout(function(){
    $(".dropdown-menu inner").mCustomScrollbar({
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
}
