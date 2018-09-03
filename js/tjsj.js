$(function () {
  var myChart1 = echarts.init(document.getElementById('chart'))
  var myChart1_ = document.getElementById('chart')

  var myChart2 = echarts.init(document.getElementById('chart2'))
  var myChart2_ = document.getElementById('chart2')

  var myChart3 = echarts.init(document.getElementById('map'))
  var myChart3_ = document.getElementById('map')
  var myChartContainer = function () {

    var width1 = $("#chart").width() + "px";
    var height1 = $("#chart").height() + "px";
    myChart1_.style.width = width1
    myChart1_.style.height = height1

    var width2 = $("#chart2").width() + "px";
    var height2 = $("#chart2").height() + "px";
    myChart2_.style.width = width2
    myChart2_.style.height = height2


    var width3 = $("#map").width() + "px";
    var height3 = $("#map").height() + "px";
    myChart3_.style.width = width3
    myChart3_.style.height = height3
  }




  myChartContainer();
  myChart1.resize()
  myChart2.resize()
  myChart3.resize()
  ssToggle(true)
  mapData(myChart3)
  //水司情况等
  $.ajax({
    url: 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!getBasicInfoData.action?year=2018&city=370100000000',
    dataType: 'json',
    type: 'get',
    success: function (data) {
      $("#right-top-box .tj-cont .impor").text(data.data[0].city_factory_count)
      $("#right-top-box .box-data .impor:first").text(data.data[0].product_power)
      $("#right-top-box .box-data .impor:last").text(data.data[0].reform_build_scale)

      $("#left-top-box .tj-cont .impor").text(data.data[0].company_count)
      // $("#left-top-box .box-data .impor:first").text(data.data[0].product_power)
      $("#left-top-box .box-data .impor:last").text(data.data[0].water_supply_people)

      // $("#left-bom-box .tj-cont .impor").text(data.data[0].pipe_length)
      $("#left-bom-box .box-data .impor:first").text(data.data[0].lab_point_num)
      $("#left-bom-box .box-data .impor:last").text(data.data[0].water_point_num)

      $("#right-bom-box .tj-cont .impor").text(data.data[0].pipe_length)
      $("#right-bom-box .box-data .impor:first").text(data.data[0].pipe_length_extend)
      $("#right-bom-box .box-data .impor:last").text(data.data[0].pipe_length_new)
    }
  })


  $('.data-toogle li').click(function () {
    $('.data-toogle li').removeClass('data-act')
    $(this).addClass('data-act')
    selectType($(this).index(),myChart1)

  })
  selectType(0,myChart1)
  scToggle(0,myChart2)
  $('#right-top-box .cont ul li').click(function () {
    $('#right-top-box .cont ul li').removeClass('sc-act')
    $(this).addClass('sc-act')
    scToggle($(this).index(),myChart2)
  })
  $(window).resize(function () {
    myChart1.resize()
    myChart2.resize()
    myChart3.resize()
  })
})

function selectType(index,myChart1) {
  // var myChart1 = echarts.init(document.getElementById('chart'))
  if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
    myChart1.clear();
  }
  var dateObj = new Date(); //表示当前系统时间的Date对象
  var year = dateObj.getFullYear(); //当前系统时间的完整年份值
  var val = ''
  var name = ''
  var url = '';
  switch (index) {
    case 0 :
      url = 'http://124.133.238.162:20005/szx/waterquality/report/spt-index-report!loadReportInfoData.action?cityCode=370100000000&toInfo=pipe_network_monitor_ability_info'
      name = '水司实验室监测能力（项）';
      break;
  /*  case 1:
      url = 'http://124.133.238.162:20005/szx/bm/water-point!list.action?code=&name=&address=&serviceAreaCode=&waterPoint.serviceAreaName=&inputType=&classifyType=&headwatersType=&buildTypeStatus=&page=1&rows=100000'
      name = '站点个数（个）';*/
      break;
    case 5:
      url = 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year='+year+'&city=370100000000&norm=stat_wsc_pipe_network_extend_planning%23company_count';
      name = '水司数量（个）';
             // stat_wsc_pipe_network_extend_planning%23company_count
      break;

    case 1:
      url = 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year='+year+'&city=370100000000&norm=stat_wsc_factory_current_situation%23product_power';
      name = '水厂日供水量（万立方米/日）';

      break;
    case 2 :
      url = 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year='+year+'&city=370100000000&norm=stat_wsc_pipe_network_monitor_ability%23pipe_length';
      name = '供水管网总长度（公里）';

      break;
    case 3 :
      url = 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year='+year+'&city=370100000000&norm=stat_wsc_pipe_network_extend_planning%23water_supply_people';
      name = '水厂服务人口（万人）';

      break;
    case 4 :
      url = 'http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year='+year+'&city=370100000000&norm=stat_wsc_pipe_network_extend_planning%23budget_investment_new';
      name = '管网新建概算投资（万元）';
      break;


  }

  console.log(url)
  $.ajax({
    // http://124.133.238.162:20005/szx/waterquality/synthesisstat/spt-index!createMapData.action?year=2018&city=370100000000&norm=
    url: url,
    dataType: 'json',
    type:'get',
    success: function (data) {
      console.log(data)
      var xData = []
      var yData = []
      var color = ['#C23531', '#2F4554', '#61A0A8', '#D48265', '#9FDABF', '#749F83']
      var newData = null
     if(index == 0 ){
       if (data.data.list.length > 0) {
         data.data.list.splice(0, 1)
          newData = data.data.list.sort(function (a, b) {
           return a.monitor_ability - b.monitor_ability;
         })

         for (var i = 0; i < newData.length; i++) {
           xData.push(newData[i].county_name)
           yData.push({
             value:newData[i].monitor_ability,
             label: {
               normal: {
                 show: true,
                 position: 'top',
               }
             },
             itemStyle: {
               normal: {
                 color: color[i]
               }
             }
             // type: 'bar',

           })

         }
         // console.log(yData)

       }
     }/*else if(index == 1){
        if(data.rows.length>0){
          var xzq = [];
          for(var i = 0;i<data.rows.length;i++){
            // xzq.push(data.rows[i].)
          }
        }
     }*/else{
       if (data.tableData.length > 0) {
         data.tableData.splice(0, 1)
          newData = data.tableData.sort(function (a, b) {
           return a.value - b.value;
         })
         // var xData = []
         // var yData = []
         // var color = ['#C23531', '#2F4554', '#61A0A8', '#D48265', '#9FDABF', '#749F83']
         for (var i = 0; i < newData.length; i++) {
           xData.push(newData[i].name)
           yData.push({
             value:newData[i].value,
             label: {
               normal: {
                 show: true,
                 position: 'top',
               }
             },
             itemStyle: {
               normal: {
                 color: color[i]
               }
             }
             // type: 'bar',

           })

         }
         // console.log(yData)

       } /*else {
         alert('暂无数据')
       }*/
     }

      myChart1.setOption({
        color : ['#C23531', '#2F4554', '#61A0A8', '#D48265', '#9FDABF', '#749F83'],
        grid: {
          x: 45,
          y: 40,
          x2: 20,
          y2: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          position: function (pos, params, dom, rect, size) {
            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            var obj = {top: 60};
            obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return obj;
          }
        },

        xAxis: {
          type: 'category',
          data:xData,
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#bac0c0',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#4d4d4d'
            }
          }
        },
        legend: {
          data: xData,
          textStyle: {
            color: "#fff",
            fontSize:12
          },
          itemWidth:15
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: true
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#4d4d4d'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#bac0c0',
            }
          },
        },
        series: [{
          name:name,
          type: 'bar',
          data:yData,
        },
          {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[0],
            itemStyle:{
              normal:{
                color:color[0]
              }
            }
          }, {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[1],
            itemStyle:{
              normal:{
                color:color[1]
              }
            }
          }, {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[2],
            itemStyle:{
              normal:{
                color:color[2]
              }
            }
          }, {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[3],
            itemStyle:{
              normal:{
                color:color[3]
              }
            }
          }, {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[4],
            itemStyle:{
              normal:{
                color:color[4]
              }
            }
          },
          {
            type: 'scatter',
            data: [],
            symbol:'roundRect',
            symbolSize:2,
            name: xData[5],
            itemStyle:{
              normal:{
                color:color[5]
              }
            }
          }]



      })
      console.log(xData)
      myChart1.on('legendselectchanged', function(params) {
        var option = {};
        console.log(params);
        var newNames = [];
        var newValues = [];
        for(var i = 0; i < xData.length ;i ++){
          if(params.selected[xData[i]] == true){
            newNames.push(xData[i]);
            newValues.push(yData[i]);
          }
        }
        // console.log(newNames)
        // console.log(newValues)
        myChart1.setOption({
          xAxis: {
            data: newNames
          },

          yAxis: {},
          series: [{
            type: 'bar',
            data: newValues
          },    {
            type: 'scatter',
            data: [],
            name: xData[0]
          }, {
            type: 'scatter',
            data: [],
            name: xData[1]
          }, {
            type: 'scatter',
            data: [],
            name: xData[2]
          }, {
            type: 'scatter',
            data: [],
            name: xData[3]
          }, {
            type: 'scatter',
            data: [],
            name: xData[4]
          },
            {
              type: 'scatter',
              data: [],
              name: xData[5]
            }]
        })
      });
    }
  })
}
function scToggle(index,myChart2) {
  if (myChart2 != null && myChart2 != "" && myChart2 != undefined) {
    myChart2.clear();
  }
  $.ajax({
    url:'http://124.133.238.162:20005/szx/waterquality/report/city-factory-info!list.action?year=&factoryName=&county=&reportStatus=3902&sourceWaterType=&page=1&rows=100000',
    type:'get',
    dataType:'json',
    success:function (data) {
      console.log(data)
      var xData = []
      var yData = []
      var dw = ''
      if(data.rows.length>0){
        data.rows.splice(data.rows.length-1,1)

        switch (index){
          case 0 :
            dw='万立方米/日'
            for(var i =0;i<data.rows.length;i++){
              xData.push(data.rows[i].name)
              yData.push(data.rows[i].plan_water_supply)
            }
            break;
          case 1:
            dw='万立方米'
            for(var i =0;i<data.rows.length;i++){
              xData.push(data.rows[i].name)
              yData.push(data.rows[i].pressure_value)
            }
            break;
          case 2 :
            dw='万立方米'
            for(var i =0;i<data.rows.length;i++){
              xData.push(data.rows[i].name)
              yData.push(data.rows[i].water_supply_total)
            }
            break;
          case 3 :
            dw='万立方米'
            for(var i =0;i<data.rows.length;i++){
              xData.push(data.rows[i].name)
              yData.push(data.rows[i].water_supply_average)
            }
            break;
          case 4 :
            var arr = []
            for (var i = 0; i < data.rows.length;) {
              var count = 0;
              for (var j = i; j < data.rows.length; j++) {
                if (data.rows[i].service_area_name == data.rows[j].service_area_name) {
                  count++;
                }
              }

              arr.push({
                name: data.rows[i].service_area_name,
                value: count
              })
              i+=count;
            }
    console.log(arr)
            /*  var array = ["one", "two", "four"];
           // splice(position, numberOfItemsToRemove, item)
           // 拼接函数(索引位置, 要删除元素的数量, 元素)
           array.splice(2, 0, "three"); //
           array; // 现在数组是这个样子 ["one", "two", "three", "four"] */

           var option4 = {
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
             /* legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },*/
              series : [
                {
                  name: '水源地所属水厂个数',
                  type: 'pie',
                  radius : '45%',
                  center: ['50%', '50%'],
                  data:arr,
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  labelLine:{
                    length:3,
                    length2:6
                  }
                }
              ]
            };
            myChart2.setOption(option4)
            return;

        }

      }
      var option2 = {
        grid: {
          x: 70,
          y: 30,
          x2:20,
          y2: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{b}:{c}'+dw
        },

        xAxis: {
          type: 'value',

          axisTick: {
            show: true
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#4d4d4d'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#bac0c0',
            }
          },
        },
        yAxis: {

          type: 'category',
          data: xData,
          name:dw,
          nameTextStyle: {
            color: "#fff"
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval:0,
            rotate:40,
            textStyle: {
              color: '#bac0c0',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#4d4d4d'
            }
          }

        },
        series: [{
          data: yData,
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#38DBD6',
            }
          }
        }]
      }
      myChart2.setOption(option2)

    }
  })


}
function ssToggle(falg) {
  //水司实际供水量
  var ssList = []
  $.ajax({
    url: 'http://124.133.238.162:20005/szx/waterquality/report/company-info!list.action',
    dataType: 'json',
    type: 'post',
    data: {
      year: '',
      county: '',
      reportStatus: 3902,
      companyName: '',
      page: 1,
      rows: 10000
    },
    success: function (data) {
      console.log(data)
      $("#left-top-box .box-data .impor:first").text(data.rows[data.rows.length-1].real_supply_power)
      var datas = data.rows.slice(0,data.rows.length-1)
        console.log(datas)

      $.ajax({
        url:'http://124.133.238.162:20005/szx/waterquality/report/company-info!load.action?year=2015&companyCode=1370100030000',
        type:'get',
        dataType:'json',
       /* data:{
          companyCode:'1370100030000',
          year:datas[0].year,

        },*/
        success:function (data) {

          console.log(data)
          $("#data-table h6").text(data.data.companyInfo.companyName)
          if(data.data.companyInfo.waterSaledOneYear.toFixed(0).length>6){
            $("#data-table .col-md-4:eq(0) p:last").css('line-height','20px')
          }else{
            $("#data-table .col-md-4:eq(0) p:last").css('line-height','40px')
          }
          $("#data-table .col-md-4:eq(0)").find('.impor').text(data.data.companyInfo.waterSaledOneYear.toFixed(0))
          $("#data-table .col-md-4:eq(1)").find('.impor').text(data.data.companyInfo.waterSupplyOneDay.toFixed(0))
          $("#data-table .col-md-4:eq(2)").find('.impor').text(data.data.companyInfo.maxSupplyOneDay.toFixed(0))
          if(data.data.companyInfo.waterSaledOneYear.toFixed(0).length>3){
            $("#data-table .col-md-3:eq(1) p:last").css('line-height','20px')
          }else{
            $("#data-table .col-md-3:eq(1) p:last").css('line-height','40px')
          }
          $("#data-table .col-md-3:eq(0)").find('.impor').text(data.data.companyInfo.waterSupplyPeople.toFixed(0))
          $("#data-table .col-md-3:eq(1)").find('.impor').text(data.data.companyInfo.waterSaledOneYear.toFixed(0))
          $("#data-table .col-md-3:eq(2)").find('.impor').text(data.data.companyInfo.waterFreeOneYear.toFixed(0))
          $("#data-table .col-md-3:eq(3)").find('.impor').text(data.data.companyInfo.waterLosePersent.toFixed(0))
        }
      })
      var num = 1
      if(falg!=''&&falg!=undefined&&falg!=null){
      var time = setInterval(function () {
        if(num>=datas.length-1){
          num=0
        }else{
          num++
        }
          $.ajax({
            url:'http://124.133.238.162:20005/szx/waterquality/report/company-info!load.action',
            type:'post',
            dataType:'json',
            data:{
              companyCode:datas[num].code,
              year:datas[num].year,
            },
            success:function (data) {

              $("#data-table h6").text(data.data.companyInfo.companyName)
              if(data.data.companyInfo.waterSaledOneYear.toFixed(0).length>6){
                $("#data-table .col-md-4:eq(0) p:last").css('line-height','20px')
              }else{
                $("#data-table .col-md-4:eq(0) p:last").css('line-height','40px')
              }
              $("#data-table .col-md-4:eq(0)").find('.impor').text(data.data.companyInfo.waterSaledOneYear.toFixed(0))
              $("#data-table .col-md-4:eq(1)").find('.impor').text(data.data.companyInfo.waterSupplyOneDay.toFixed(0))
              $("#data-table .col-md-4:eq(2)").find('.impor').text(data.data.companyInfo.maxSupplyOneDay.toFixed(0))
              if(data.data.companyInfo.waterSaledOneYear.toFixed(0).length>3){
                $("#data-table .col-md-3:eq(1) p:last").css('line-height','20px')
              }else{
                $("#data-table .col-md-3:eq(1) p:last").css('line-height','40px')
              }
              $("#data-table .col-md-3:eq(0)").find('.impor').text(data.data.companyInfo.waterSupplyPeople.toFixed(0))
              $("#data-table .col-md-3:eq(1)").find('.impor').text(data.data.companyInfo.waterSaledOneYear.toFixed(0))
              $("#data-table .col-md-3:eq(2)").find('.impor').text(data.data.companyInfo.waterFreeOneYear.toFixed(0))
              $("#data-table .col-md-3:eq(3)").find('.impor').text(data.data.companyInfo.waterLosePersent.toFixed(0))
            }
          })
        },5000)
      }
    }
  })
}
function mapData(myChart3) {
  myChart3.showLoading();
  var datas1 = []
  var datas2 = []
  var datas3 = []
  var datas4 = []
  var datas5 = []
  var alirl =[]
/*  mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';*/
  // var uploadedDataURL = "./json/data-1495284690309-Bk9Ro3Te-.json";
  /*$.ajax({
    url:'http://124.133.238.162:20005/szx/waterquality/organize!list.action?type=15&rows=10000',
    dataType:'json',
    type:'get',
    async:false,
    success:function(data) {
      console.log(data)
      for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].lng!=0&&data.rows[i].lng!=''&&data.rows[i].lng!=undefined){
          var lng =parseFloat(data.rows[i].lng)
          var lat =parseFloat(data.rows[i].lat)
          datas1.push({
            name: data.rows[i].name,
            value :[lng,lat]
          })
        }
      }



    }
  })*/

  $.ajax({
    url:'http://124.133.238.162:20005/szx/waterquality/organize!list.action?type=14&flag=1&rows=10000',
    dataType:'json',
    type:'get',
    async:false,
    success:function(data) {
      console.log(data)
      for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].latitude!=0&&data.rows[i].latitude!=''&&data.rows[i].latitude!=undefined){
          var lng =parseFloat(data.rows[i].longitude)
          var lat =parseFloat(data.rows[i].latitude)
          datas3.push({
            name: data.rows[i].name,
            value :[lng,lat,Math.random()*100],
            service_area_code:data.rows[i].service_area_code,
            service_area_name:data.rows[i].service_area_name,
            address:data.rows[i].address,
            code:data.rows[i].code,
          })
        }
      }

    }
  })
  $.ajax({
    url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=3&flag=1&rows=10000',
    dataType:'json',
    type:'get',
    async:false,
    success:function(data) {
      console.log(data)
      for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].longitude!=0&&data.rows[i].longitude!=''&&data.rows[i].longitude!=undefined){
          var lng =parseFloat(data.rows[i].longitude)
          var lat =parseFloat(data.rows[i].latitude)
          datas1.push({
            name: data.rows[i].name,
            value :[lng,lat,Math.random()*100],
            address:data.rows[i].address,
            service_area_name:data.rows[i].service_area_name,
            headwaters_name:data.rows[i].headwaters_name,
            build_name:data.rows[i].build_name
          })
        }
      }

    }
  })
  //获取空间关系
  $.ajax({
    url: 'http://124.133.238.162:20005/szx/onlinedata/space-relation-detail!allList.action',
    dataType: 'json',
    type: 'get',
    async: false,
    success: function (data) {
      var data = data.rows;
      //在结果中获取所有的空间关系
      var spaceRelateData = {};
      data.map(function (item, index) {
        if (item["space_relate_code"]) {
          if (!spaceRelateData[item["space_relate_code"]]) {
            spaceRelateData[item["space_relate_code"]] = {
              "水源水": {},
              "出厂水": {},
              "管网水": {}
            };
          }
          switch (item.name) {
            case "水源水":
              spaceRelateData[item["space_relate_code"]]["水源水"] = {
                code: item.code, station: []
              };
              break;
            case "出厂水":
              spaceRelateData[item["space_relate_code"]]["出厂水"] = {
                code: item.code, station: []
              };
              break;
            case "管网水":
              spaceRelateData[item["space_relate_code"]]["管网水"] = {
                code: item.code, station: [], childStation: []
              };
              break;
          }
        }
      });
      //获取每条对应的空间关系的内容
      data.map(function (item, index) {
        if (item.parent_code) {
          switch (item.parent_code) {
            case spaceRelateData[item["space_relate_code"]]["水源水"]["code"]:
              spaceRelateData[item["space_relate_code"]]["水源水"]["station"].push(item);
              break;
            case spaceRelateData[item["space_relate_code"]]["出厂水"]["code"]:
              spaceRelateData[item["space_relate_code"]]["出厂水"]["station"].push(item);
              break;
            case spaceRelateData[item["space_relate_code"]]["管网水"]["code"]:
              spaceRelateData[item["space_relate_code"]]["管网水"]["station"].push(item);
              break;
            default:
              if (item.longitude && item.latitude) {
                spaceRelateData[item["space_relate_code"]]["管网水"]["childStation"].push(item);
              }
              break;
          }
        }
      });
      //遍历组装好的空间关系数据，在地图中输出节点
      for (var i in spaceRelateData) {//遍历空间关系
        //输出水源地到水厂的关系连线
        for (var j in spaceRelateData[i]["水源水"].station) {
          for (var k in spaceRelateData[i]["出厂水"].station) {
            alirl.push({
              fromName: spaceRelateData[i]["水源水"].station[j].name,
              toName: spaceRelateData[i]["出厂水"].station[k].name,
              coords: [[spaceRelateData[i]["水源水"].station[j].longitude, spaceRelateData[i]["水源水"].station[j].latitude, Math.random()],
                [spaceRelateData[i]["出厂水"].station[k].longitude, spaceRelateData[i]["出厂水"].station[k].latitude, Math.random()]]
            });
          }
        }
        //输出水厂到加压站的关系连线
        for (var l in spaceRelateData[i]["出厂水"].station) {
          for (var m in spaceRelateData[i]["管网水"].station) {
            alirl.push({
              fromName: spaceRelateData[i]["出厂水"].station[l].name,
              toName: spaceRelateData[i]["管网水"].station[m].name,
              coords: [[spaceRelateData[i]["出厂水"].station[l].longitude, spaceRelateData[i]["出厂水"].station[l].latitude, Math.random()],
                [spaceRelateData[i]["管网水"].station[m].longitude, spaceRelateData[i]["管网水"].station[m].latitude, Math.random()]]
            });
          }
        }
        //输出管网水两级之间的连线
        for (var n in spaceRelateData[i]["管网水"].station) {
          for (var x in spaceRelateData[i]["管网水"].childStation) {
            if (spaceRelateData[i]["管网水"].station[n].code == spaceRelateData[i]["管网水"].childStation[x].parent_code) {
              alirl.push({
                fromName: spaceRelateData[i]["管网水"].station[n].name,
                toName: spaceRelateData[i]["管网水"].childStation[x].name,
                coords: [[spaceRelateData[i]["管网水"].station[n].longitude, spaceRelateData[i]["管网水"].station[n].latitude, Math.random()],
                  [spaceRelateData[i]["管网水"].childStation[x].longitude, spaceRelateData[i]["管网水"].childStation[x].latitude, Math.random()]]
              });
            }
          }
        }
      }
      var list1 = []
      /* var list1 = []*/

      var list2 = []
      var gjlist = []
      var newsList = alirl.concat();
      var index = []
      var sc = '水库';
      var str = ''
      var name = []
      for (var i in newsList) {
        if (newsList[i].fromName.indexOf(sc) != -1) {
          if (newsList[i].fromName != '凤凰路泵站（凤凰湖水库）') {
            // list1.push(alirl[i].fromName)

            if (name.indexOf(newsList[i].fromName) == -1) {
               name.push(newsList[i].fromName)
              str+='<li><label for="control'+i+'">'+newsList[i].fromName+'</label><input id="control'+i+'" checked type="checkbox" class="kjControl" value="'+newsList[i].fromName+'"></li>'
            }
          }
        }
      }
      $("#control").html(str)
        $('.kjControl').change(function () {
          var newList = alirl.concat();
          for (var i = 0; i < $('.kjControl').length; i++) {
            var val = $('.kjControl').eq(i).val()
            if (!$('.kjControl').eq(i).is(':checked')) {
              if (list1.indexOf(val) == -1) {
                list1.push(val)
              }
            }
          }
          for (var i in newList) {
            if (newList[i].fromName.indexOf(sc) != -1) {
              if (newList[i].fromName != '凤凰路泵站（凤凰湖水库）') {
                // list1.push(alirl[i].fromName)

                if (gjlist.indexOf(newList[i].fromName) == -1) {
                  gjlist.push(newList[i].fromName)
                }
                if (list1.indexOf(newList[i].fromName) != -1) {
                  if (index.indexOf(i) == -1) {
                    index.push(i)
                  }
                }
                //index.push(i)
                //newList.splice(i,1)

                /*
                            list1.push(alirl[i].toName)
                            newList = alirl.slice(i,1)*/
              }
            }
          }
          /*  for(var q in index){
              if(q==0){
                newList.splice(index[q],1)

              }else{
                newList.splice(index[q]-q,1)

              }
            }
            console.log(newList)*/
          // $('.kjControl').change(function () {
          //    var val = $(this).val()
          //   if($(this).is(':checked')){
          //      if(list1.indexOf(val) == -1){
          //        list1.push(val)
          //      }
          //   }else{
          //
          //       list1.splice(list1.indexOf(val),1)
          //     }
          z()

          function z() {
            var len = list1.length;
            var sum = 0
            var index = []
            for (var k in list1) {
              for (var q in newList) {
                if (list1[k] == newList[q].fromName) {
                  list2.push(newList[q].toName)
                  if (index.indexOf(q) == -1) {
                    index.push(q)
                  }
                } else {
                  sum++
                }
              }
            }
            for (var q in index) {
              if (q == 0) {
                newList.splice(index[q], 1)

              } else {
                newList.splice(index[q] - q, 1)
              }
            }
            index = []
            list1 = list2
            list2 = []
            if (sum != 0) {
              z()
            } else {
              list1 = []
            }
          }

          myChart3.setOption({
            series: [{}, {
              data: newList
            }, {}, {}]
          })
          console.log(newList)
        })
        /*  })*/

        /*  list1.push(alirl[i].toName)
          newList = alirl.slice(i,1)
          z()
          function z() {
            var len = list1.length;
            for(var k in list1){
              for(var q in alirl){
                if(list1[k] == alirl[q].fromName){
                  list2.push(alirl[q].toName)
                  newList = alirl.slice(q,1)
                }else{
                  len++
                }
              }
            }
            list1=list2
            list2=[]
            if(len!=0){
              z()
            }
          }*/

        console.log(alirl)
      }
  });


  $.ajax({
    url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=1&flag=1&rows=10000',
    dataType:'json',
    type:'get',
    async:false,
    success:function(data) {
      console.log(data)
      for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].longitude!=0&&data.rows[i].longitude!=''&&data.rows[i].longitude!=undefined){
          var lng =parseFloat(data.rows[i].longitude)
          var lat =parseFloat(data.rows[i].latitude)
          datas4.push({
            name: data.rows[i].name,
            value :[lng,lat,Math.random()*100],
            address:data.rows[i].address,
            service_area_name:data.rows[i].service_area_name,
            headwaters_name:data.rows[i].headwaters_name,
            build_name:data.rows[i].build_name
          })
        }
      }
     /* for(var k=0;k<1 ;k++){
        // var n1=parseInt(datas4.length*k);
        alirl.push({
          fromName:datas4[0].name,
          toName:datas4[k].name,
          coords:[datas4[0].value,datas4[k+1].value]
        })
      }
    console.log(alirl)*/
    }
  })
  $.ajax({
    url:'http://124.133.238.162:20005/szx/waterquality/organize!list.action?type=15&flag=1&rows=10000',
    dataType:'json',
    type:'get',
    async:false,
    success:function(data) {
      console.log(data)
      $.each(data.rows,function (k,v) {

          if(v.latitude!=0&&v.latitude!=''&&v.latitude!=undefined){
            var lng =parseFloat(v.longitude)
            var lat =parseFloat(v.latitude)
            datas2.push({
              name: v.name,
              value :[lng,lat,Math.random()*100],
              service_area_code:v.service_area_code,
              service_area_name:v.service_area_name,
              address:v.address,
              code:v.code,
            })
          }
      })

    }
  })




  myChart3.hideLoading();
/*  var alirl=  [[[121.15, 31.89],[109.781327, 39.608266]],
    [[121.15, 31.89],[122.207216, 29.985295]],
    [[121.15, 31.89],[120.13, 33.38]],
    [[121.15, 31.89],[120.33, 36.07]],
    [[121.15, 31.89],  [117.93, 40.97]],
    [[121.15, 31.89], [122.1, 37.5]],
    [[121.15, 31.89],[101.718637, 26.582347]],
    [[121.15, 31.89],[121.48, 31.22]],
    [[121.15, 31.89],[122.05, 37.2]],
    [[121.15, 31.89],[116.1, 24.55]],
    [[121.15, 31.89],[112.02, 22.93]],
    [[121.15, 31.89],[118.1, 24.46]]
  ]*/

  var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

  console.log(datas4)
  var color = ['#a6c84c', '#ffa022', '#46bee9',"#f4e925"];
  myChart3.setOption({
    bmap: {
      center: [117,36.65],
      zoom: 14,
      roam: true,
      mapStyle: {
        'styleJson':[
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
              "color": "#353e45ff"
            }
          },
          {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
              "color": "#333a40ff"
            }
          },
          {
            "featureType": "highway",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
              "color": "#0b3d51"
            }
          },
          {
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry.stroke",
            "stylers": {
              "color": "#08304b"
            }
          },
          {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
              "lightness": -70
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {
              "color": "#857f7f"
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
              "color": "#022338"
            }
          },
          {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
              "color": "#062032"
            }
          },
          {
            "featureType": "boundary",
            "elementType": "all",
            "stylers": {
              "color": "#465b6c"
            }
          },
          {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
              "color": "#022338"
            }
          },
          {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }
        ]
     /*   'styleJson': [
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
              "color": "#031628"
            }
          },
          {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
              "color": "#000102"
            }
          },
          {
            "featureType": "highway",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
              "color": "#0b3d51"
            }
          },
          {
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "railway",
            "elementType": "geometry.stroke",
            "stylers": {
              "color": "#08304b"
            }
          },
          {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
              "lightness": -70
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {
              "color": "#857f7f"
            }
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": {
              "color": "#000000"
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
              "color": "#022338"
            }
          },
          {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
              "color": "#062032"
            }
          },
          {
            "featureType": "boundary",
            "elementType": "all",
            "stylers": {
              "color": "#465b6c"
            }
          },
          {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
              "color": "#022338"
            }
          },
          {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
              "visibility": "off"
            }
          }
        ]*/

      }
    },
    legend:{
      data:[{
        name:'实时监测站点',
        icon:'roundRect'
      },{
        name:'实验室监测站点',
        icon:'roundRect'
      },

        {
          name:'水厂',
          icon:'roundRect'
        },{
        name:'水司',
        icon:'roundRect'
      },,{
        name:'空间关系',
        icon:'roundRect'
      }],
      textStyle:{
        color:'#fff',
        fontSize:16
        // backgroundColor:'rgba(25,104,128,.5)'
      },
      backgroundColor:'rgba(25,104,128,.5)',
      itemGap:50,
      itemWidth:15,
      itemHeight:15,
      padding:[15,30],
      bottom:"3%",
      selected:{
        '水厂':false,
        '水司':false,
        '实验室监测站点':false,
        '空间关系':true,
        '实时监测站点':true
      }

    },
    tooltip:{
      trigger: 'item',
      formatter:function (re) {
        var res ='';
        switch (re.componentSubType){
          case 'effectScatter':
              if(re.seriesIndex==2||re.seriesIndex==0){
                if(re.data.build_name==null) re.re.data.build_name='暂无'
                res+= '类型：'+re.seriesName+'</br>' +
                    '站点名称：'+re.marker+''+re.name+'</br>' +
                    '地址：'+re.data.address+'</br>' +
                    '行政区划：'+re.data.service_area_name+'</br>'+
                    '水源类型：'+re.data.headwaters_name+'</br>'+
                    '建设状态：'+re.data.build_name+'</br>'
              }else{
                res+= '类型：'+re.seriesName+'</br>' +
                    '站点名称：'+re.marker+''+re.name+'</br>' +
                    '地址：'+re.data.address+'</br>' +
                    '编码：'+re.data.code+'</br>'+
                '行政区编码：'+re.data.service_area_code+'</br>'+
                '行政区名称：'+re.data.service_area_name+'</br>'
              }
            break;
          case 'lines':
            res+='类型：'+re.marker+''+re.seriesName+'</br>' +
                '传输关系：'+re.data.fromName+'→'+re.data.toName+'</br>'
            break;
        }
        return res
      },
    },
    series: [
      {
        type: 'effectScatter',
        name:'实验室监测站点',
        coordinateSystem: 'bmap',
        data: datas1,
        symbolSize: 7,
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: color[0],
            shadowBlur: 5,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      },

      {
        type: 'lines',
        name: '空间关系',
        coordinateSystem: 'bmap',
        symbol: ['arrow'],
        symbolSize: 5,
        effect: {
          show: true,
          period: 6,
          symbol: 'arrow',
          trailLength: 0,
          symbolSize: 5
        },
        lineStyle: {
          normal: {
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: alirl
      },
      {
        name: '实时监测站点',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        zlevel: 1,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: false,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: 7,
        showEffectOn: 'render',
        itemStyle: {
          normal: {
                // color: '#f4e925',
                shadowBlur: 5,
            color: color[1],
          }
        },
        data: datas4
      },

      {
        type: 'effectScatter',
        name:'水厂',
        coordinateSystem: 'bmap',
        data: datas2,
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          }
        },
        symbolSize: 7,
        itemStyle: {
          normal: {
            // color: '#f4e925',
            color: color[2],
            shadowBlur: 5,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      },
      {
        type: 'effectScatter',
        name:'水司',
        coordinateSystem: 'bmap',
        data: datas3,
        rippleEffect: {
          brushType: 'stroke'
        },
        symbolSize: 7,
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          }
        },
        itemStyle: {
          normal: {
            // color: '#f4e925',
            color: color[3],
            shadowBlur: 5,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  });
  var bmap = myChart3.getModel().getComponent('bmap').getBMap();
  console.log(bmap)
  myChart3.on('legendselectchanged', function (params) {
    if(!$('.tog-skin li:last').hasClass('c-act')){
      for(var i =0;i<$(".tog-skin li").length;i++){
        if( $(".tog-skin li").eq(i).hasClass('c-act')){
          var style = $(".tog-skin li").eq(i).attr('title')
          var mapStyle={  style : style }
          bmap.setMapStyle(mapStyle)
        }
      }
    }

  })
  $(".tog-skin li").click(function () {
    $(this).addClass('c-act').siblings().removeClass('c-act')
    if($(this).index() != 2){
      var style = $(this).attr('title')
      var mapStyle={  style : style }
      bmap.setMapStyle(mapStyle)
    }else{
       myChart3.setOption({
         bmap:{
           mapStyle:{
            'styleJson':[
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": {
            "color": "#353e45ff"
          }
        },
        {
          "featureType": "land",
          "elementType": "geometry",
          "stylers": {
            "color": "#333a40ff"
          }
        },
        {
          "featureType": "highway",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#000000"
          }
        },
        {
          "featureType": "arterial",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#0b3d51"
          }
        },
        {
          "featureType": "local",
          "elementType": "geometry",
          "stylers": {
            "color": "#000000"
          }
        },
        {
          "featureType": "railway",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#000000"
          }
        },
        {
          "featureType": "railway",
          "elementType": "geometry.stroke",
          "stylers": {
            "color": "#08304b"
          }
        },
        {
          "featureType": "subway",
          "elementType": "geometry",
          "stylers": {
            "lightness": -70
          }
        },
        {
          "featureType": "building",
          "elementType": "geometry.fill",
          "stylers": {
            "color": "#000000"
          }
        },
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": {
            "color": "#857f7f"
          }
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": {
            "color": "#000000"
          }
        },
        {
          "featureType": "building",
          "elementType": "geometry",
          "stylers": {
            "color": "#022338"
          }
        },
        {
          "featureType": "green",
          "elementType": "geometry",
          "stylers": {
            "color": "#062032"
          }
        },
        {
          "featureType": "boundary",
          "elementType": "all",
          "stylers": {
            "color": "#465b6c"
          }
        },
        {
          "featureType": "manmade",
          "elementType": "all",
          "stylers": {
            "color": "#022338"
          }
        },
        {
          "featureType": "label",
          "elementType": "all",
          "stylers": {
            "visibility": "off"
          }
        }
      ]
           }
         }
       })
    }
  })
  /*var mapStyle={  style : "mapbox" }
  bmap.setMapStyle(mapStyle);*/
 /* myChart3.setOption({

    /!* visualMap: {
       show: false,
       calculable: true,
       realtime: false,
       inRange: {
         color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
       },
       outOfRange: {
         colorAlpha: 0
       },
     },*!/
    tooltip : {
      show: true,
      trigger: 'item',
      formatter:function (params) {
        var result = params.marker+''+params.data.name+':</br>' +
            '经度：'+params.value[0]+'</br>' +
            '纬度：'+params.value[1]+'</br>' +
            '合格率：'+params.value[2]+'%';

        return result;
      }
   /!*   formatter:function (params, ticket, callback) {
      },
      trigger:'item'*!/
    },
    legend:{
      data:['水厂','水司','实验室监测点','在线监测点'],
      textStyle:{
        color:'#fff'
      },
      bottom:20,
      selected:{
        '水厂':true,
        '水司':false,
        '实验室监测点':false
        ,'在线监测点':false
      }

    },
    mapbox: {
      center: [117,36.65],
      zoom: 9,
      pitch: 50,
      bearing: -10,
      style: 'mapbox://styles/mapbox/dark-v9',
      // altitudeScale: 3e2,
      // boxHeight: 30,
      // altitudeScale: 3e2,
   /!*   postEffect: {
        enable: true,
        SSAO: {
          enable: true,
          radius: 2,
          intensity: 1.5
        }
      },*!/
   /!*   postEffect: {
        enable: true
      },*!/
      boxHeight: 2,
/!*      light: {
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
      },*!/
    },


    series: [/!*{
      type: 'lines3D',
      coordinateSystem: 'mapbox',
      polyline:true,
      effect: {
        show: true,
        trailWidth: 4,
        trailOpacity: 0.5,
        trailLength: 0.2,
      },
      blendMode: 'lighter',
      lineStyle: {
        width: 2,
        opacity: 0.05
      },

      data:alirl
    },*!/
      {
        type:'scatter3D',
        name:'水厂',
   /!*     itemStyle:{
          opacity:1
        },
        symbolSize:13,*!/
        label:{
          show:false,
          textStyle:{
             fontSize:16,
             color :'#C23531',
          },
          formatter:'{b}'
        },
        // emphasis:{label:{show:false}},
          coordinateSystem:'mapbox',
        silent: false,
        data:datas2,
        itemStyle: {
          borderWidth: 0.5,
          borderColor: '#fff'
        }

      },
      {
        type:'scatter3D',
        name:'实验室监测点',
     /!*   itemStyle:{
          opacity:1
        },*!/
        label:{
          show:false,
      /!*    textStyle:{
            fontSize:12,
            color :'#000'
          },
          formatter:'{b}'*!/
        },
        silent: false,
        coordinateSystem:'mapbox',
        data:datas1,
        itemStyle: {
          borderWidth: 0.5,
          borderColor: '#fff'
        }

      },
      {
        type:'scatter3D',
        name:'水司',
      /!*  itemStyle:{
          opacity:1
        },*!/
        label:{
          show:false,
          textStyle:{
            fontSize:12,
            color :'#000'
          },
          formatter:'{b}'
        },
        coordinateSystem:'mapbox',
        data:datas3,
        itemStyle: {
          borderWidth: 0.5,
          borderColor: '#fff'
        }

      },
      {
        type:'scatter3D',
        name:'在线监测点',
      /!*  itemStyle:{
          opacity:1
        },*!/
        label:{
          show:false,
          textStyle:{
            fontSize:12,
            color :'#000'
          },
          formatter:'{b}'
        },
        coordinateSystem:'mapbox',
        data:datas4,
        itemStyle: {
          borderWidth: 0.5,
          borderColor: '#fff'
        }
      }
    ]
  });
  myChart3.on('click',function (d) {
    console.log(d)
  })*/

}