/*var myChart1 = echarts.init(document.getElementById('yl'))
var myChart1_ = document.getElementById('yl')

var myChart2 = echarts.init(document.getElementById('eyhl'))
var myChart2_ = document.getElementById('eyhl')

var myChart3 = echarts.init(document.getElementById('gmsy'))
var myChart3_ = document.getElementById('gmsy')

var myChart4 = echarts.init(document.getElementById('hzd'))
var myChart4_ = document.getElementById('hzd')

var myChart5 = echarts.init(document.getElementById('ad'))
var myChart5_ = document.getElementById('ad')

var myChart6 = echarts.init(document.getElementById('yls'))
var myChart6_ = document.getElementById('yls')

var myChart7 = echarts.init(document.getElementById('ddl'))
var myChart7_ = document.getElementById('ddl')

var myChart8 = echarts.init(document.getElementById('ph'))
var myChart8_ = document.getElementById('ph')

var myChart9 = echarts.init(document.getElementById('sw'))
var myChart9_ = document.getElementById('sw')*/

var myChart10 = echarts.init(document.getElementById('bdmap'))
var myChart10_ = document.getElementById('bdmap')


/*var myChartContainer = function () {

  var width1 = $("#myChart1_").width() + "px";
  var height1 = $("#myChart1_").height() + "px";
  myChart1_.style.width = width1
  myChart1_.style.height = height1

  var width2 = $("#myChart2_").width() + "px";
  var height2 = $("#myChart2_").height() + "px";
  myChart2_.style.width = width2
  myChart2_.style.height = height2


  var width3 = $("#myChart3_").width() + "px";
  var height3 = $("#myChart3_").height() + "px";
  myChart3_.style.width = width3
  myChart3_.style.height = height3


  var width4 = $("#myChart4_").width() + "px";
  var height4 = $("#myChart4_").height() + "px";
  myChart4_.style.width = width4
  myChart4_.style.height = height4

  var width5 = $("#myChart5_").width() + "px";
  var height5 = $("#myChart5_").height() + "px";
  myChart5_.style.width = width5
  myChart5_.style.height = height5

  var width6 = $("#myChart6_").width() + "px";
  var height6 = $("#myChart6_").height() + "px";
  myChart6_.style.width = width6
  myChart6_.style.height = height6


  var width7 = $("#myChart7_").width() + "px";
  var height7 = $("#myChart7_").height() + "px";
  myChart7_.style.width = width7
  myChart7_.style.height = height7

  var width8 = $("#myChart8_").width() + "px";
  var height8 = $("#myChart8_").height() + "px";
  myChart8_.style.width = width8
  myChart8_.style.height = height8

  var width9 = $("#myChart9_").width() + "px";
  var height9 = $("#myChart9_").height() + "px";
  myChart9_.style.width = width9
  myChart9_.style.height = height9


  var width10 = $("#bdmap").width() + "px";
  var height10 = $("#bdmap").height() + "px";
  myChart10_.style.width = width10
  myChart10_.style.height = height10
};*/


var XData = ["甘肃", "青海", "内蒙古", "重庆", "山西", "辽宁"];
var yData = [];
XData.map(function () {
  yData.push((Math.random() * 1000 + 100).toFixed(0))
})


var Name = ['国家目标', '海南目标', '完成情况'];
var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
var data = {
  //['国家目标', '海南目标', '完成情况']
  "学前教育毛入园率(%)": [65, 60, 76.5],
  "义务教育巩固率(㎡)": [93, 93, 93.4],
  "高中教育毛入学率(%)": [87, 87, 88.3],
  "高等教育毛入学率(%)": [36, 36, 36.4],
};
var xAxisData = [];
var data1 = [],
    data2 = [],
    data3 = [];
for (var i in data) {
  xAxisData.push(i);
  data1.push(data[i][0])
  data2.push(data[i][1])
  data3.push(data[i][2])
}
var label = {
  normal: {
    show: false,
    position: 'right',
    distance: 10,
    formatter: function (param) {
      return param.value + '%';
    },
    textStyle: {
      color: '#ffffff',
      fontSize: '16',
    }
  }
};
/*var option2 = {

  grid: {
    x: 50,
    y: 30,
    x2: 20,
    y2: 30,
  },
  tooltip: {
    show: "true",
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      shadowStyle: {
        color: 'rgba(112,112,112,0)',
      },
    },
    // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
    formatter: function (params) {
      var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
      return params[0].name + ' ：<br />' + params[0].seriesName + ' ：' + params[0].data + unit + '<br />' + params[1].seriesName + ' ：' + params[1].data + unit + '<br />' + params[2].seriesName + ' ：' + params[2].data + unit;
    },
    backgroundColor: 'rgba(0,0,0,0.7)', // 背景
    padding: [8, 10], //内边距
    extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
  },
  /!* legend: {
     top: 20,
     textStyle: {
       color: '#fff',
     },
     data: Name,
   },*!/
  xAxis: [{
    type: 'category',
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#4d4d4d',
      }
    },
    axisLabel: {
      inside: false,
      textStyle: {
        color: '#bac0c0',
        fontWeight: 'normal',
        fontSize: '12',
      },
    },
    data: xAxisData
  }, {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: xAxisData
  }, {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: xAxisData
  }],
  yAxis: {
    name: 'GDP（亿元）',
    nameTextStyle: {
      color: "#fff"
    },
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#4d4d4d',
      }
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#32346c ',
      }
    },
    axisLabel: {
      textStyle: {
        color: '#bac0c0',
        fontWeight: 'normal',
        fontSize: '12',
      },
    },
  },
  series:
      [
        /!*  {
              name: '国家目标',
              type: 'bar',
              stack: '1',
              xAxisIndex: 0,
              data: data1,
              label: label,
              barWidth: 8,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#e1694b'
                      }, {
                          offset: 1,
                          color: '#e12945'
                      }]),
                  }
              },
              z: 2
          },
          {
              name: '国家目标',
              type: 'scatter',
              stack: '1',
              xAxisIndex: 0,
              symbolOffset: [-48, 0], //相对于原本位置的偏移量
              data: [0, 0, 0, 0],
              label: {
                  normal: {
                      show: false,
                  }
              },
              xAxisIndex: 2,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      borderColor: '#fff',
                      borderWidth: 2,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#e1694b'
                      }, {
                          offset: 1,
                          color: '#e12945'
                      }]),
                      opacity: 1,
                  }
              },
              z: 2
          },
          {
              name: '国家目标',
              type: 'bar',
              xAxisIndex: 1,
              barGap: '140%',
              data: [data1[0] + 15, data1[1] + 15, data1[2] + 15, data1[3] + 15,],
              barWidth: 20,
              itemStyle: {
                  normal: {
                      color: '#0e2147',
                      barBorderRadius: 5,
                  }
              },
              z: 1
          },
          {
              name: '国家目标',
              type: 'bar',
              xAxisIndex: 2,
              data: [data1[0] + 15.5, data1[1] + 15.5, data1[2] + 15.5, data1[3] + 15.5,],
              barWidth: 24,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#e1694b'
                      }, {
                          offset: 1,
                          color: '#e12945'
                      }]),
                      barBorderRadius: 5,
                  }
              },
              z: 0
          },
          {
              name: '国家目标',
              type: 'scatter',
              hoverAnimation: false,
              data: [1.2, 1.2, 1.2, 1.2],
              xAxisIndex: 2,
              symbolOffset: [-48, 0], //相对于原本位置的偏移量
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#e1694b'
                      }, {
                          offset: 1,
                          color: '#e12945'
                      }]),
                      opacity: 1,
                  }
              },
              z: 2
          },

          {
              name: '海南目标',
              type: 'bar',
              stack: '2',
              xAxisIndex: 0,
              data: data2,
              label: label,
              barWidth: 8,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#99da69'
                      }, {
                          offset: 1,
                          color: '#01b7ba'
                      }]),
                  }
              },
              z: 2
          },
          {
              name: '海南目标',
              type: 'scatter',
              stack: '2',
              xAxisIndex: 0,
              symbolOffset: [0, 0], //相对于原本位置的偏移量
              data: [0, 0, 0, 0],
              label: {
                  normal: {
                      show: false,
                  }
              },
              xAxisIndex: 2,
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      borderColor: '#fff',
                      borderWidth: 2,
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#99da69'
                      }, {
                          offset: 1,
                          color: '#01b7ba'
                      }]),
                      opacity: 1,
                  }
              },
              z: 2
          },
          {
              name: '海南目标',
              type: 'bar',
              xAxisIndex: 1,
              barGap: '140%',
              data: [data2[0] + 15, data2[1] + 15, data2[2] + 15, data2[3] + 15,],
              barWidth: 20,
              itemStyle: {
                  normal: {
                      color: '#0e2147',
                      barBorderRadius: 5,
                  }
              },
              z: 1
          },
          {
              name: '海南目标',
              type: 'bar',
              xAxisIndex: 2,
              barGap: 1,
              data: [data2[0] + 15.5, data2[1] + 15.5, data2[2] + 15.5, data2[3] + 15.5,],
              barWidth: 24,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#99da69'
                      }, {
                          offset: 1,
                          color: '#01b7ba'
                      }]),
                      barBorderRadius: 5,
                  }
              },
              z: 0
          },
          {
              name: '海南目标',
              type: 'scatter',
              hoverAnimation: false,
              data: [1.2, 1.2, 1.2, 1.2],
              xAxisIndex: 2,
              symbolOffset: [0, 0], //相对于原本位置的偏移量
              symbolSize: 12,
              itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#99da69'
                      }, {
                          offset: 1,
                          color: '#01b7ba'
                      }]),
                      opacity: 1,
                  }
              },
              z: 2
          },*!/

        {
          name: '完成情况',
          type: 'bar',
          stack: '3',
          xAxisIndex: 0,
          data: data3,
          label: label,
          barGap: 5,
          barWidth: 8,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1a9bfc'
              }, {
                offset: 1,
                color: '#7049f0'
              }]),
            }
          },
          z: 2
        },
        {
          name: '完成情况',
          type: 'scatter',
          stack: '3',
          xAxisIndex: 0,
          symbolOffset: [0, 0], //相对于原本位置的偏移量
          data: [0, 0, 0, 0],
          label: {
            normal: {
              show: false,
            }
          },
          xAxisIndex: 2,
          symbolSize: 12,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 2,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1a9bfc'
              }, {
                offset: 1,
                color: '#7049f0'
              }]),
              opacity: 1,
            }
          },
          z: 2
        },
        {
          name: '完成情况',
          type: 'bar',
          xAxisIndex: 1,
          barGap: '140%',
          data: [data3[0] + 15, data3[1] + 15, data3[2] + 15, data3[3] + 15,],
          barWidth: 20,
          itemStyle: {
            normal: {
              color: '#0e2147',
              barBorderRadius: 5,
            }
          },
          z: 1
        },
        {
          name: '完成情况',
          type: 'bar',
          xAxisIndex: 2,
          barGap: 1,
          data: [data3[0] + 15.5, data3[1] + 15.5, data3[2] + 15.5, data3[3] + 15.5,],
          barWidth: 24,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1a9bfc'
              }, {
                offset: 1,
                color: '#7049f0'
              }]),
              barBorderRadius: 5,
            }
          },
          z: 0
        },
        {
          name: '完成情况',
          type: 'scatter',
          hoverAnimation: false,
          data: [1.2, 1.2, 1.2, 1.2],
          xAxisIndex: 2,
          symbolOffset: [0, 0], //相对于原本位置的偏移量
          symbolSize: 12,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1a9bfc'
              }, {
                offset: 1,
                color: '#7049f0'
              }]),
              opacity: 1,
            }
          },
          z: 2
        }
      ]
}
myChart2.setOption(option2)*/


var data = {
  "chart": [{
    month: "1月",
    value: 138,
    ratio: 14.89
  },

    {
      month: "2月",
      value: 114,
      ratio: 79.49
    },

    {
      month: "3月",
      value: 714,
      ratio: 75.8
    },

    {
      month: "4月",
      value: 442,
      ratio: 19.8
    },

    {
      month: "5月",
      value: 622,
      ratio: 44.5
    },


    {
      month: "6月",
      value: 528,
      ratio: 87.3
    }

  ]
}
var dataMin = parseInt(Math.min.apply(null, yData) / 2);
console.log(dataMin)

var xAxisMonth = [],
    barData = [],
    lineData = [];
for (var i = 0; i < data.chart.length; i++) {
  xAxisMonth.push(data.chart[i].month);
  barData.push({
    "name": xAxisMonth[i],
    "value": data.chart[i].value
  });
  lineData.push({
    "name": xAxisMonth[i],
    "value": data.chart[i].ratio
  });
}


var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
  var now = new Date(base += oneDay);
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  data.push(Math.random().toFixed(2));
}


var datas = [];
//所有站点接口

    $.ajax({
      url:'http://124.133.238.162:20005/szx/bm/water-point!list.action?inputType=1&flag=1&rows=10000',
      datatype:'json',
      type:'get',
      success:function (data) {
        console.log(data)
        if (data.rows.length > 0) {
          $('.size_14').text(data.rows[0].name)
          var str = '';
          var actData = []
          for (var i = 0; i < data.rows.length; i++) {
            str += '<option longitude=' + data.rows[i].longitude + ' latitude=' + data.rows[i].latitude + '  value=' + data.rows[i].code + '>' + data.rows[i].name + '</option>'
            if (data.rows[i].code != '13701000111001') {
              datas.push({
                name: data.rows[i].name,
                value: [data.rows[i].longitude, data.rows[i].latitude],
                build_name:data.rows[i].build_name,
                code:data.rows[i].code,
                headwaters_name:data.rows[i].headwaters_name,
                service_area_name:data.rows[i].service_area_name,
                service_area_code:data.rows[i].service_area_code,
                address:data.rows[i].address
              })
            } else {
              datas.push({
                name: data.rows[i].name,
                value: [data.rows[i].longitude, data.rows[i].latitude],
                build_name:data.rows[i].build_name,
                code:data.rows[i].code,
                headwaters_name:data.rows[i].headwaters_name,
                service_area_name:data.rows[i].service_area_name,
                service_area_code:data.rows[i].service_area_code,
                address:data.rows[i].address
              })
              actData.push({
                name: data.rows[i].name,
                value: [data.rows[i].longitude, data.rows[i].latitude],
                build_name:data.rows[i].build_name,
                code:data.rows[i].code,
                headwaters_name:data.rows[i].headwaters_name,
                service_area_name:data.rows[i].service_area_name,
                service_area_code:data.rows[i].service_area_code,
                address:data.rows[i].address
              })
            }
          }
          $('#lunch').html(str)
          setTimeout(function () {
            $('.selectpicker').selectpicker('refresh');
            $('.selectpicker').selectpicker('val', 13701000111001);
            var jwd = [$('.selectpicker option:selected').attr('longitude'), $('.selectpicker option:selected').attr('latitude')]
            var name = $('.selectpicker option:selected').text()
            myChart10.setOption({
              bmap: {
                center: jwd,
                zoom: 12,
                roam: true,
                mapStyle: {
                  'styleJson': [
                    {
                      'featureType': 'water',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#031628'
                      }
                    },
                    {
                      'featureType': 'land',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#000102'
                      }
                    },
                    {
                      'featureType': 'highway',
                      'elementType': 'all',
                      'stylers': {
                        'visibility': 'off'
                      }
                    },
                    {
                      'featureType': 'arterial',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'arterial',
                      'elementType': 'geometry.stroke',
                      'stylers': {
                        'color': '#0b3d51'
                      }
                    },
                    {
                      'featureType': 'local',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'railway',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'railway',
                      'elementType': 'geometry.stroke',
                      'stylers': {
                        'color': '#08304b'
                      }
                    },
                    {
                      'featureType': 'subway',
                      'elementType': 'geometry',
                      'stylers': {
                        'lightness': -70
                      }
                    },
                    {
                      'featureType': 'building',
                      'elementType': 'geometry.fill',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'all',
                      'elementType': 'labels.text.fill',
                      'stylers': {
                        'color': '#857f7f'
                      }
                    },
                    {
                      'featureType': 'all',
                      'elementType': 'labels.text.stroke',
                      'stylers': {
                        'color': '#000000'
                      }
                    },
                    {
                      'featureType': 'building',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#022338'
                      }
                    },
                    {
                      'featureType': 'green',
                      'elementType': 'geometry',
                      'stylers': {
                        'color': '#062032'
                      }
                    },
                    {
                      'featureType': 'boundary',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#465b6c'
                      }
                    },
                    {
                      'featureType': 'manmade',
                      'elementType': 'all',
                      'stylers': {
                        'color': '#022338'
                      }
                    },
                    {
                      'featureType': 'label',
                      'elementType': 'all',
                      'stylers': {
                        'visibility': 'off'
                      }
                    }
                  ]
                }
              },
              tooltip: {
                trigger: 'item',
                confine :true,
                formatter:function (re) {
                  var str =
                      '站点名称：'+re.marker+''+re.name+'</br>' +
                      '地址：'+re.data.address+'</br>' +
                      '行政区划：'+re.data.service_area_name+'</br>'+
                      '水源类型：'+re.data.headwaters_name+'</br>'+
                      '建设状态：'+re.data.build_name+'</br>'
                  return str
                }
              },
              series: [
                {
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',

                  data: datas,
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  symbolSize: 8,
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
                      color: '#f4e925',
                      shadowBlur: 10,
                      shadowColor: '#333'
                    }
                  },
                  zlevel: 1
                },
                {
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',
                  data: actData,
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  symbolSize: 15,
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#46bee9',
                      shadowBlur: 10,
                      shadowColor: '#333'
                    }
                  },
                  zlevel: 2
                }
              ]
            });
            myChart10.on('click', function (params) {
              getData(params.data.code)
              $('.selectpicker').selectpicker('val',params.data.code);
              $('.selectpicker').selectpicker('refresh');
              var jwd = [$('.selectpicker option:selected').attr('longitude'), $('.selectpicker option:selected').attr('latitude')]
              var name = $('.selectpicker option:selected').text()
              var actData = [{
                name: name,
                value: jwd
              }]
              myChart10.setOption({

                series: [{}, {
                  type: 'effectScatter',
                  coordinateSystem: 'bmap',
                  data: actData,
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  symbolSize: 15,
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'right',
                      show: true
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#46bee9',
                      shadowBlur: 10,
                      shadowColor: '#333'
                    }
                  },
                  zlevel: 2
                }
                ]
              })
            });

            $(".bs-searchbox").next('.dropdown-menu').css({
              'height': 'calc(100% - 40px)',
              width: '100%',
              'overflow-x': 'hidden'
            })
          }, 100)

        }
      }
    })


$("#fullScreen").click(function () {
  $("#fullScreenQj").attr('src', 'http://180.76.165.145:85/LYH/')
  $("#fullScreenQj").css('display', 'block')
  $("#close").show()
  $("#close").click(function () {
    $("#fullScreenQj").attr('src', '')
    $("#fullScreenQj").css('display', 'none')
    $("#close").hide()
  })
})
getData(13701000111001)
$("#searches").click(function () {
  historyData($('.selectpicker option:selected').val(), $("#inpstart").val(), $("#inpend").val())
})
$('select.selectpicker').on('change', function () {
  var selected = $('.selectpicker option:selected').val();
  var jwd = [$('.selectpicker option:selected').attr('longitude'), $('.selectpicker option:selected').attr('latitude')]
  var name = $('.selectpicker option:selected').text()
  var actData = [{
    name: name,
    value: jwd
  }]
  getData(selected)
  myChart10.setOption({

    series: [{}, {
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      data: actData,
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      symbolSize: 15,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#46bee9',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 2
    }
    ]
  })
  /*var jwd = [$('.selectpicker option:selected').attr('longitude'),$('.selectpicker option:selected').attr('latitude')]


  myChart10.setOption({
    bmap:{
      center:jwd
    },
    series:[{

      data:[{
        name: name,
        value: jwd,
      }]
    }]
  })*/
});
/*myChartContainer();
myChart1.resize()
myChart2.resize()
myChart3.resize()
myChart4.resize()
myChart5.resize()
myChart6.resize()
myChart7.resize()
myChart8.resize()
myChart9.resize()*/
myChart10.resize()
$(window).resize(function () {
  /*  myChart1.resize()
    myChart2.resize()
    myChart3.resize()
    myChart4.resize()
    myChart5.resize()
    myChart6.resize()
    myChart7.resize()
    myChart8.resize()
    myChart9.resize()*/
  myChart10.resize()
  // myChartContainer();
});

function getMyDate(str) {
  var oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      oSen = oDate.getSeconds(),
      oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSen);//最后拼接时间
  return oTime;
};

function getMyMonth(str) {
  var oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,

      oTime = oYear + '-' + getzf(oMonth)//最后拼接时间
  return oTime;
};

//补0操作
function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}

function getData(val) {
  var list1 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      animationDelay: 1000,
      animationDuration: 1000,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'red' // 0% 处的颜色
            }, {
              offset: 1, color: 'yellow' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          opacity: 0.9
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 136, 212, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,136,212)',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12

        }
      },
    }]

  }
  var list2 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
      symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      smooth: true, //是否平滑曲线显示
      showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#1a9bfc'
          }, {
            offset: 0.8,
            color: 'rgba(255,255,255,0)'
          }], false),
          // shadowColor: 'rgba(255,255,255, 0.1)',
          shadowBlur: 10,
          opacity:0.3,
        }
      },
      itemStyle: {
        normal: {
          color: '#1a9bfc',
          lineStyle: {
            width: 1,
            type: 'solid' //'dotted'虚线 'solid'实线
          },
          borderColor: '#1a9bfc', //图形的描边颜色。支持的格式同 color
          borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
          barBorderRadius: 0,
          label: {
            show: false,
          },
          opacity:0.5,
        }
      },
    }]

  }
  var list3 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,235,238, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0,235,238, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {

          color: 'rgb(0,235,238)',
          borderColor: 'rgba(0,235,238,0.2)',
          borderWidth: 12
        }
      },
    }]

  }
  var list4 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true, //是否平滑曲线显示
      lineStyle: { //线条样式
        normal: {
          width: 1
        }
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 255, 255, 0.3)'
          }, {
            offset: 0.7,
            color: 'rgba(0, 255, 255, 0.6)'
          }], false),

          shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
          shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      itemStyle: { //折现拐点标志的样式
        normal: {
          color: 'rgb(0,255,255)'
        }
      },
    }]

  }
  var list5 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      color: ['#8B4513'],
      itemStyle : {
        normal : {
          lineStyle:{
            width:1,//折线宽度
          },
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 1,
            color: '#fbfa96' // 0% 处的颜色
          }, {
            offset: 0,
            color: '#f72806' // 100% 处的颜色
          }], false),
          opacity: 0.4
        }
      },
    }]

  }
  var list6 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,255,162)'
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,255,162, 0.8)'
          }, {
            offset: 0.8,
            color: 'rgba(0,255,162, 0.4)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.9)',
          shadowBlur: 10
        }
      },
    }]

  }
  var list7 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      showSymbol: false,
      symbol: false,
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0.7, color: '#993CED' // 0% 处的颜色
          }, {
            offset: 1, color: '#56D9FC' // 100% 处的颜色
          }], false),
          width: 1,
        },
      },
    }]

  }
  var list8 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      lineStyle:{normal:{color:'#3ea9f4',width:1}},
      smooth:true,
      symbol:'circle',
      //     symbol:"image://",
      symbolSize:10,
      showSymbol:false,
    }]

  }
  var list9 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      symbolSize: 10,
      symbol: 'circle',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 136, 212, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: 'rgba(127, 128, 225, 0.7)'
          }, {
            offset: 0.9,
            color: 'rgba(72, 73, 181, 0.7)'
          }, {
            offset: 0.25,
            color: 'rgba(226, 99, 74, 0.7)'
          }, {
            offset: 0,
            color: 'rgba(253, 200, 106, 0.7)'
          }], false),
          barBorderRadius: 0,
          label: {
            show: false,
            position: 'top',
            formatter: function(p) {
              return p.value > 0 ? (p.value) : '';
            }
          }
        }
      },
    }]

  }
  var listOption = [list1,list2,list3,list4,list5,list6,list7,list8,list9];
  var zsum = 0
  $.ajax({
    url: 'http://124.133.238.162:20005/szx/online/measurement!getWaterPointMeasurements.action?waterPointCode=' + val + '',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log(data)
      //0271 余氯 0122高锰酸盐 0103浑浊度 0203氨氮 0132叶绿素 0134电导率 0137ph 0101水温
      var codes = ['0271', '', '0122', '0103', '0203', '0132', '0134', '0137', '0101']
      var dataCodes = [];
      var multiCodes = []
      for (var i = 0; i < data.length; i++) {
        dataCodes.push(data[i].code)
        multiCodes.push(val + '#' + data[i].code)
        /*if(codes.indexOf(data[i].code)==-1){
          $(".right-chart .charts").eq(i).next('.notData').show()
        }*/
      }
      $.ajax({
        url: 'http://124.133.238.162:20005/szx/onlinedata/online-data-multi!getMultiWaterPointAndMeasurementRealTimeFollowLine.action',
        type: 'post',
        dataType: 'json',
        data: {
          multiCodes: multiCodes.join(',')
        },
        success: function (data) {
          console.log(data)
          $(".chart-toogle").html('')
          $('.chart-toogle').css('right', '0')
          for (var i = 0; i < data.multiList.length; i++) {
            if (data.multiList[i].readingDatas.length > 0) {
              // console.log(codes.indexOf(data.multiList[i].meterCode))
              var xData = [];
              var yData = [];
              var str = '';
              var page = (Math.floor(data.multiList.length / 9))+1
              var num = 0
              var width = $('.right-chart').width()
              if (page > 1) {
                var a = "calc(100% - 50px)";
                console.log($("#chart_box .right-box .right-chart .row"))

                $("#chart_box .right-box .right-chart .toogle").show()
                for (var k = 0; k < page + 1; k++) {
                  var int = '<div style="left: ' + width * k + 'px" class="row"></div>'
                  $('.right-chart .chart-toogle').append(int)
                }
                $("#chart_box .right-box .right-chart .row").css({height: a});
                $('#next').unbind('click').click(function () {
                  if (page - 1 > num) {
                    num++
                    $('.chart-toogle').animate({'right': width * num + 'px'})
                    $('#prevNum').text(num + 1)

                  }
                })
                $('#prev').unbind('click').click(function () {
                  if (num < 1) {
                    num = 0
                    return
                  } else {
                    --num;
                    $('.chart-toogle').animate({'right': width * num + 'px'})
                    $('#prevNum').text(num + 1)

                  }
                })
                $("#nextNum").text(parseInt(page))
              } else {
                var a = "calc(100% - 20px)";
                for (var k = 0; k < page + 1; k++) {
                  var int = '<div style="left: ' + width * k + 'px" class="row"></div>'
                  $('.right-chart .chart-toogle').append(int)
                }
                $("#chart_box .right-box .right-chart .row").css({height: a});

                $("#chart_box .right-box .right-chart .toogle").hide()
              }
              for (var i = 0; i < data.multiList.length; i++) {
                var sum = (Math.floor(i / 9))
                console.log(sum)
                str = '<div class="col-md-4">\n' +
                    '          <div class="chart_">\n' +
                    '            <div class="chart-tit">\n' +
                    '              <i></i>\n' +
                    '              <span class="tit">' + data.multiList[i].meterName + '<img class="chart-qp-icon" src="images/qp.png" alt=""></span>\n' +
                    '            </div>\n' +
                    '            <div class="charts" id="chart' + i + '">\n' +
                    '            </div>\n' +
                    '          </div>\n' +
                    '        </div>'
                $('.right-chart .row:eq(' + sum + ')').append(str)
                var myChart = echarts.init(document.getElementById('chart' + i + ''))
                var myChart1_ = document.getElementById('chart' + i + '')
                var width1 = $('#chart' + i + '').width() + "px";
                var height1 = $('#chart' + i + '').height() + "px";
                myChart1_.style.width = width1
                myChart1_.style.height = height1
                for (var q = 0; q < data.multiList[i].readingDatas.length; q++) {
                  xData.push(getMyDate(data.multiList[i].readingDatas[q].code))
                  yData.push(data.multiList[i].readingDatas[q].value)
                }

                var color = "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)
                if(zsum>8){
                  zsum=0
                }
                  listOption[zsum].xAxis.data = xData.map(function (str) {
                    return str.replace(' ', '\n')
                  })

                  listOption[zsum].yAxis.name=data.multiList[i].unit
                  listOption[zsum].series[0].name=data.multiList[i].unit
                  listOption[zsum].series[0].data=yData
                  myChart.setOption(listOption[zsum])
                xData=[]
                yData=[]
                zsum++
               /* myChart.setOption({
                  color: ['' + color + ''],
                  tooltip: {
                    trigger: 'axis',
                  },
                  grid: {
                    x: 40,
                    y: 30,
                    x2: 20,
                    y2: 40,
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData.map(function (str) {
                      return str.replace(' ', '\n')
                    }),
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
                  yAxis: {
                    type: 'value',
                    name: data.multiList[i].unit,
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
                    type: 'line',
                    name: data.multiList[i].unit,
                    data: yData,
                    markPoint: {
                      data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                      ]
                    },
                  }]

                })*/
              }

            }
          }
          $('.right-chart .chart-tit').dblclick(function () {
            $(this).next('.charts').addClass('chart-qp')
            var id = $(this).next('.charts').attr('id')
            var compareChart = echarts.getInstanceByDom(document.getElementById(id));
            compareChart.resize();
            //$('#lunch1').selectpicker('refresh');
            $("#" + id).dblclick(function () {
              $(this).removeClass('chart-qp')
              compareChart.resize();
            })
          })
          $('.chart-qp-icon').click(function () {
            $(this).parents('.chart-tit').next('.charts').addClass('chart-qp')
            var id = $(this).parents('.chart-tit').next('.charts').attr('id')
            var compareChart = echarts.getInstanceByDom(document.getElementById(id));
            compareChart.resize();
            $("#" + id).dblclick(function () {
              $(this).removeClass('chart-qp')
              compareChart.resize();
            })
          })
          if ($('.chart-toogle .col-md-4').length == 0) {
            alert('暂无数据')
            $(".toogle").hide()
          }
        }
      })


    }

  })
}

function compare(property){
  return function(a,b){
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  }
}

function historyData(val, start, end) {
  var list1 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      animationDelay: 1000,
      animationDuration: 1000,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'red' // 0% 处的颜色
            }, {
              offset: 1, color: 'yellow' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          opacity: 0.9
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 136, 212, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,136,212)',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12

        }
      },
    }]

  }
  var list2 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      symbolSize: 3,//标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
      symbol: 'circle',//标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      smooth: true, //是否平滑曲线显示
      showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#1a9bfc'
          }, {
            offset: 0.8,
            color: 'rgba(255,255,255,0)'
          }], false),
          // shadowColor: 'rgba(255,255,255, 0.1)',
          shadowBlur: 10,
          opacity:0.3,
        }
      },
      itemStyle: {
        normal: {
          color: '#1a9bfc',
          lineStyle: {
            width: 1,
            type: 'solid' //'dotted'虚线 'solid'实线
          },
          borderColor: '#1a9bfc', //图形的描边颜色。支持的格式同 color
          borderWidth: 8 ,//描边线宽。为 0 时无描边。[ default: 0 ]
          barBorderRadius: 0,
          label: {
            show: false,
          },
          opacity:0.5,
        }
      },
    }]

  }
  var list3 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,235,238, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0,235,238, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {

          color: 'rgb(0,235,238)',
          borderColor: 'rgba(0,235,238,0.2)',
          borderWidth: 12
        }
      },
    }]

  }
  var list4 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true, //是否平滑曲线显示
      lineStyle: { //线条样式
        normal: {
          width: 1
        }
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 255, 255, 0.3)'
          }, {
            offset: 0.7,
            color: 'rgba(0, 255, 255, 0.6)'
          }], false),

          shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
          shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      itemStyle: { //折现拐点标志的样式
        normal: {
          color: 'rgb(0,255,255)'
        }
      },
    }]

  }
  var list5 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      color: ['#8B4513'],
      itemStyle : {
        normal : {
          lineStyle:{
            width:1,//折线宽度
          },
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 1,
            color: '#fbfa96' // 0% 处的颜色
          }, {
            offset: 0,
            color: '#f72806' // 100% 处的颜色
          }], false),
          opacity: 0.4
        }
      },
    }]

  }
  var list6 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,255,162)'
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,255,162, 0.8)'
          }, {
            offset: 0.8,
            color: 'rgba(0,255,162, 0.4)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.9)',
          shadowBlur: 10
        }
      },
    }]

  }
  var list7 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      showSymbol: false,
      symbol: false,
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0.7, color: '#993CED' // 0% 处的颜色
          }, {
            offset: 1, color: '#56D9FC' // 100% 处的颜色
          }], false),
          width: 1,
        },
      },
    }]

  }
  var list8 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      lineStyle:{normal:{color:'#3ea9f4',width:1}},
      smooth:true,
      symbol:'circle',
      //     symbol:"image://",
      symbolSize:10,
      showSymbol:false,
    }]

  }
  var list9 = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      x: 40,
      y: 30,
      x2: 20,
      y2: 40,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
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
    yAxis: {
      type: 'value',
      name:[],
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
      type: 'line',
      name: [],
      data: [],
      showSymbol: false,
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      smooth: true,
      symbolSize: 10,
      symbol: 'circle',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 136, 212, 0.3)'
          }, {
            offset: 0.8,
            color: 'rgba(0, 136, 212, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 1,
            color: 'rgba(127, 128, 225, 0.7)'
          }, {
            offset: 0.9,
            color: 'rgba(72, 73, 181, 0.7)'
          }, {
            offset: 0.25,
            color: 'rgba(226, 99, 74, 0.7)'
          }, {
            offset: 0,
            color: 'rgba(253, 200, 106, 0.7)'
          }], false),
          barBorderRadius: 0,
          label: {
            show: false,
            position: 'top',
            formatter: function(p) {
              return p.value > 0 ? (p.value) : '';
            }
          }
        }
      },
    }]

  }
  var listOption = [list1,list2,list3,list4,list5,list6,list7,list8,list9];
  $.ajax({
    url: 'http://124.133.238.162:20005/szx/onlinedata/online-data!onLineHistoryList.action?startTime=' + start + '&endTime=' + end + '&rows=100000&flag=1&waterPointCodes=' + val + '',
    dataType: 'json',
    type: 'get',
    success: function (data) {
      console.log(data)
      var codeList = [];
      var list = []
      var num = 0
      console.log(data.rows)
      for (var i = 0; i < data.rows.length; i++) {
        if (codeList.indexOf(parseInt(data.rows[i].itemCode)) != -1 && list.length > 0) {
          list[codeList.indexOf(parseInt(data.rows[i].itemCode))].push({
            name: data.rows[i].itemName,
            val: data.rows[i].avgValue,
            time: data.rows[i].date,
            unit: data.rows[i].unit
          })
          console.log(data.rows[i].date)
        } else {
          codeList.push(parseInt(data.rows[i].itemCode));
          list.push([{
            name: data.rows[i].itemName,
            val: data.rows[i].avgValue,
            time: data.rows[i].date,
            unit: data.rows[i].unit
          }])
          num++
        }
      }
      console.log(list)
      for(var k in list){
        list[k].sort(compare('time'))
      }
      $(".chart-toogle").html('')
      $('.chart-toogle').css('right', '0')
      var zsum = 0
      for (var i = 0; i < list.length; i++) {
        if (list[i].length > 0) {
          var xData = [];
          var yData = [];
          var str = '';
          var page = (Math.floor(list.length / 9))+1
          var num = 0
          var width = $('.right-chart').width()
          if (page > 1) {
            var a = "calc(100% - 50px)";
            $("#chart_box .right-box .right-chart .toogle").show()
            for (var k = 0; k < page + 1; k++) {
              var int = '<div style="left: ' + width * k + 'px" class="row"></div>'
              $('.right-chart .chart-toogle').append(int)
            }
            $("#chart_box .right-box .right-chart .row").css({height: a});

            $('#next').unbind('click').click(function () {
              if (page - 1 > num) {
                num++
                $('.chart-toogle').animate({'right': width * num + 'px'})
                $('#prevNum').text(num + 1)

              }
            })
            $('#prev').unbind('click').click(function () {
              if (num < 1) {
                num = 0
                return
              } else {
                --num;
                $('.chart-toogle').animate({'right': width * num + 'px'})
                $('#prevNum').text(num + 1)

              }
            })
            $("#nextNum").text(parseInt(page))
          } else {
            var a = "calc(100% - 20px)";
            for (var k = 0; k < page + 1; k++) {
              var int = '<div style="left: ' + width * k + 'px" class="row"></div>'
              $('.right-chart .chart-toogle').append(int)
            }
            $("#chart_box .right-box .right-chart .row").css({height: a});

            $("#chart_box .right-box .right-chart .toogle").hide()
          }
          for (var i = 0; i < list.length; i++) {
            var sum = (Math.floor(i / 9))
            console.log(sum)
            str = '<div class="col-md-4">\n' +
                '          <div class="chart_">\n' +
                '            <div class="chart-tit">\n' +
                '              <i></i>\n' +
                '              <span class="tit">' + list[i][0].name + '</span>\n' +
                '            </div>\n' +
                '            <div class="charts" id="chart' + i + '">\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>'
            $('.right-chart .row:eq(' + sum + ')').append(str)
            console.log($("#chart" + i))
            var myChart = echarts.init(document.getElementById('chart' + i + ''))
            var myChart1_ = document.getElementById('chart' + i + '')
            var width1 = $('#chart' + i + '').width() + "px";
            var height1 = $('#chart' + i + '').height() + "px";
            myChart1_.style.width = width1
            myChart1_.style.height = height1
            xData = []
            yData = []
            for (var q = 0; q < list[i].length; q++) {

              xData.push(getMyDate(list[i][q].time))
              yData.push(list[i][q].val)
            }

            var color = "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)


            if(zsum>8){
              zsum=0
            }
            listOption[zsum].xAxis.data = xData.map(function (str) {
              return str.replace(' ', '\n')
            })
            listOption[zsum].yAxis.name=list[i][0].unit
            listOption[zsum].series[0].name=list[i][0].unit
            listOption[zsum].series[0].data=yData
            myChart.setOption(listOption[zsum])
            xData=[]
            yData=[]
            zsum++
            /*   myChart.setOption({
                 color: ['' + color + ''],
                 tooltip: {
                   trigger: 'axis',
                 },
                 grid: {
                   x: 40,
                   y: 30,
                   x2: 20,
                   y2: 40,
                 },
                 xAxis: {
                   type: 'category',
                   boundaryGap: false,
                   data: xData.map(function (str) {
                     return str.replace(' ', '\n')
                   }),
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
                 yAxis: {
                   type: 'value',
                   name: list[i][0].unit,
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
                   type: 'line',
                   name: list[i][0].unit,
                   data: yData,
                   markPoint: {
                     data: [
                       {type: 'max', name: '最大值'},
                       {type: 'min', name: '最小值'}
                     ]
                   },
                 }]

               })*/
          }


        }
      }
      $('.right-chart .chart-tit').dblclick(function () {
        $(this).next('.charts').addClass('chart-qp')
        var id = $(this).next('.charts').attr('id')
        var compareChart = echarts.getInstanceByDom(document.getElementById(id));
        compareChart.resize();
        $("#" + id).dblclick(function () {
          $(this).removeClass('chart-qp')
          compareChart.resize();
        })
      })
      $('.chart-qp-icon').click(function () {
        $(this).parents('.chart-tit').next('.charts').addClass('chart-qp')
        var id = $(this).parents('.chart-tit').next('.charts').attr('id')
        var compareChart = echarts.getInstanceByDom(document.getElementById(id));
        compareChart.resize();
        $("#" + id).dblclick(function () {
          $(this).removeClass('chart-qp')
          compareChart.resize();
        })
      })
      if ($('.chart-toogle .col-md-4').length == 0) {
        alert('暂无数据')
      }
    }
  })
}