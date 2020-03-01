var TESTER;

function chart(){

/* 都道府県別 */
var data2 = [{
  type: 'bar',
  x: [1,1,1,1,1,1,1,1,1,1,1,2,2,3,4,5,6,11,11,20,27,27,65],
  y: ['宮城県','新潟県','栃木県','埼玉県','長野県','静岡県','岐阜県','滋賀県','三重県','奈良県','高知県','京都府','福岡県','沖縄県','石川県','熊本県','大阪府','千葉県','和歌山県','神奈川県','東京都','愛知県','北海道'],
  orientation: 'h'
}];

var layout2 = { title: '都道府県別統計' };

Plotly.newPlot('todouh', data2, layout2);


/* 年代別統計 */
/* 男性 */
var trace1 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [0,12,18,32,28,13,10,6,1,5],
  name: '男性',
  type: 'bar',
  orientation: 'h',
  marker: {
    color: '#A4C6FF'
  }
};

/* 女性 */
var trace2 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [2,3,13,13,12,9,4,11,1,1],
  name: '女性',
  type: 'bar',
  orientation: 'h',
  marker: {
    color: '#FFABCE'
  }
};

var data = [trace2, trace1];

var layout = {title: "年代別集計", showlegend: false};

Plotly.newPlot('nendai', data, layout);





}