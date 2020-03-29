var TESTER;

function chart(){

/* 年代別統計 */
/* 男性 */
var trace1 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [6,12,48,42,38,57,30,18,1,3],
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
  x: [3,6,17,9,16,16,18,14,3,1],
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

}