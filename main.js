var x = 0;  
var arr = [
// October 	
['40',x,x,x,x,x,x,x], // 3-9
['41',x,x,x,x,x,x,x], // 10-16
['42',4,4,4,4,4,x,4], // 17-23
['43',4,4,4,x,4,4,4], // 24-30
// November 
['44',8,4,x,4,4,4,4], // 31-6
['45',8,2,x,x,x,x,x], // 7-13
['46',8,x,4,x,4,x,x], // 14-20
['47',x,x,x,x,x,x,x], // 21-27
// December 
['48',x,x,x,x,x,4,4], // 28-4
['49',4,x,x,x,4,x,4], // 5-11
['50',x,x,x,x,4,x,4], // 12-18
['51',4,4,x,4,4,4,x], // 19-25
['52',4,x,4,x,x,4,x],  // 26-1
// january
['1',x,4,8,4,x,x,x], // 2-8
['2',x,5,5,5,x,5,9], // 9-15
['3',x,5,10,5,5,10,7], // 16-22
['4',x,5,x,x,10,x,8], // 23-29
// February
['5',5,5,x,x,x,x,x], // 30-5
['6',x,x,x,x,5,x,8], // 6-12
['7',5,x,x,x,x,x,5], // 13-19
['8',x,5,x,5,x,x,7], // 20-26
// March
['9',5,5,x,x,5,5,5], // 27-5
['10',5,x,5,x,5,5,12], // 6-12
['11',5,5,5,5,9,8,9], // 13-19
['12',6,x,8,8,8,7,9], // 20-26
['13',8,x,15,x,12,x,x], // 27-2
// April
['14',10,7,x,10,x,6,4], // 3-9 - win 5km
['15',x,5,x,8,10,5,10], // 10-16, 10km - 43:26
['16',x,5,x,x,x,x,x], // 17-23
['17',x,x,x,x,x,x,x], // 24-30
// May
['18',x,x,x,x,x,x,x], // 
['19',x,x,x,x,x,x,x], // 
['20',x,x,x,x,x,x,x], // 
['21',x,x,x,x,x,x,x], //
// June
['22',x,x,x,x,x,x,x], // 
['23',x,x,x,x,x,x,x], // 
['24',x,x,x,x,x,x,x], // 
['25',x,x,x,x,x,x,x], //
['26',x,x,x,x,x,x,x], //
// July
['27',x,x,x,x,x,x,x], // 
['28',x,x,x,x,x,x,x], // 
['29',x,x,x,x,x,x,x], // 
['30',x,x,x,x,x,x,x], //
// August
['31',x,x,x,x,x,x,x], // 
['32',x,x,x,x,x,x,x], // 
['33',x,x,x,x,x,x,x], // 
['34',x,x,x,x,x,x,x], //
['35',x,x,x,x,x,x,x], //
// September
['36',x,x,x,x,x,x,x], // 
['37',x,x,x,x,x,x,x], // 
['38',x,x,x,x,x,x,x], // 
['39',x,x,x,x,x,x,x] //
		  ];

var test = document.getElementById('test');

for(var i = 0; i < arr.length; i++){
	var tmpWeek = arr[i].join('</li><li>');
	var week = '<ol><li>' + tmpWeek + '</li></ol>';

	test.innerHTML += week;
}

var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
	if(li[i].innerHTML == '0') {
		li[i].innerHTML = '';
	}
}

(function() {
	document.getElementsByTagName('ol')[35].children[6].style.background = 'gold'; // ;)
})();
