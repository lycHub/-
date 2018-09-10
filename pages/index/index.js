const format = require('../../miniprogram_npm/date-fns/format/index.js');
Page({
	data: {
		 collaspeData: [
			 {
				 title: '面板一',
				 content: '内容一'
			 },
			 {
				 title: '面板二',
				 content: '内容二'
			 },
			 {
				 title: '面板三',
				 content: '内容三'
			 }
		 ]
	},

  onReady(){
    console.log(format(new Date(2014, 1, 11), 'm/d/YYYY'));
  },
	onScroll(evt) {
		console.log(evt);
	}
})