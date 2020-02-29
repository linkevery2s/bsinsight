var TESTER;

function chart(){


TESTER = document.getElementById('tester');

/*Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } }, {showSendToCloud:true} );*/

var trace1 = {
  y: ['giraffes', 'orangutans', 'monkeys'],
  x: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar',
  orientation: 'h'
};

var trace2 = {
  y: ['giraffes', 'orangutans', 'monkeys'],
  x: [12, 18, 29],
  name: 'LA Zoo',
  type: 'bar',
  orientation: 'h'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot(TESTER, data, layout);


var data2 = [{
  type: 'bar',
  x: [20, 14, 23],
  y: ['青森県', '東京都', '北海道'],
  orientation: 'h'
}];

Plotly.newPlot('todouh', data2);


}