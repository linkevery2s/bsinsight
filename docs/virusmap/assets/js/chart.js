var TESTER;

function chart(){
get_kansen();

/* 年代別統計 */
/* 男性 */
var trace1 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [10,39,118,149,207,259,248,150,10,9],
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
  x: [9,33,58,53,86,95,151,165,19,7],
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


}