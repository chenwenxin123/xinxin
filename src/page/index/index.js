//通过require请求加载cats.js模块
'use strict';
require('./index.js');
require('@/common/nav-simple/index.js');
require('@/common/nav/index.js');
require('@/common/header/index.js');
require('@/common/nav-side/index.js');

var _mm=require('util/mm.js');
var  navSide=require('@/common/nav-side/index.js');
navSide.init({
	name:'user-center'
});

/*_mm.require({
	url:'/product/list.do?keyword=1',
	success:function(res){
		console.log(res);


	},
	error:function(errMsg){
		console.log(errMsg);
	}
});
console.log(_mm.getUrlparam('text'));*/
/*var html='<div>{{ data }}</div>';
var data={
	data:123
}
console.log(_mm.renderHtml(html,data));*/
 
