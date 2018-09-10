// ui/dialog/dialog.js
Component({
  properties: {
		showDialog: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: '标题'
		},
		cancelTxt: {
			type: String,
			value: '取消'
		},
		confirmTxt: {
			type: String,
			value: '确定'
		}
  },

 
  methods: {
		cancel(evt) {
			this.triggerEvent("cancel", {show: false,  text: '关闭'});
		}
  }
})
