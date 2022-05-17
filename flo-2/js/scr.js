// 검색창
var search = $('.search');
var scmore = $('.sc_more');
var close = $('.close');

// row2 음악리스트
var ko = $('.lang_ko');
var en = $('.lang_en');
var listko = $('.new_list');
var listen = $('.new_list2');

search.click(function(){
	scmore.css('display', 'block');
}) /* 검색창 클릭시 리스트 표시 */

close.click(function(){
	scmore.css('display', 'none');
}) /* 검색창 클릭시 리스트 숨기기 */


ko.click(function(){
	ko.css('color', 'red');
	en.css('color', 'black');
	listko.css('display', 'block');
	listen.css('display', 'none');
})
en.click(function(){
	ko.css('color', 'black');
	en.css('color', 'red');
	listko.css('display', 'none');
	listen.css('display', 'block');
}) 