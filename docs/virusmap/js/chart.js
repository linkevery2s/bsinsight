var TESTER;

function chart(){

/* 都道府県別 */
var data2 = [{
  type: 'bar',
  x: [1,1,1,1,1,1,1,1,1,1,2,2,3,3,3,3,3,5,5,6,7,11,13,16,25,42,49,78],
  y: ['宮城県','長野県','静岡県','岐阜県','三重県','奈良県','山口県','愛媛県','大分県','宮崎県','栃木県','滋賀県','埼玉県','石川県','兵庫県','福岡県','沖縄県','新潟県','熊本県','京都府','高知県','和歌山県','千葉県','大阪府','神奈川県','東京都','愛知県','北海道'],
  orientation: 'h'
}];

var layout2 = { title: '都道府県別統計' };

Plotly.newPlot('todouh', data2, layout2);


/* 年代別統計 */
/* 男性 */
var trace1 = {
  y: ['90代', '80代', '70代','60代', '50代', '40代', '30代', '20代', '10代', '10歳未満'],
  x: [1,18,22,41,39,20,13,7,1,5],
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
  x: [1,7,18,24,23,17,12,15,1,1],
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

aichi_ini();



}