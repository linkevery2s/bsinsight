var TESTER;

function chart(){

/* 年代別統計 */
/* 男性 */
var trace1 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [10,25,71,83,90,124,114,54,5,6],
  name: '男性',
  type: 'bar',
  orientation: 'h',
  marker: {
    color: '#4169e1'
  }
};

/* 女性 */
var trace2 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [4,12,41,20,39,52,58,70,11,2],
  name: '女性',
  type: 'bar',
  orientation: 'h',
  marker: {
    color: '#ffb6c1'
  }
};

var data = [trace2, trace1];

var layout = {showlegend: false};

Plotly.newPlot('nendai', data, layout);

w_ini();

ni_ini();

get_kansen();

}