       // 검색창
       
var search = $('.search');
var scmore = $('.sc_more');
var close = $('.close');

search.click(function(){
    scmore.css('display', 'block');
}) /* 검색창 클릭시 리스트 표시 */

close.click(function(){
    scmore.css('display', 'none');
}) /* 검색창 클릭시 리스트 숨기기 */
