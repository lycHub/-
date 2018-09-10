// ui/collapseset/collapse/collapse.js
Component({
	relations: {
		'../collapseset': {
			type: 'parent',
			linked: function (target) {
				// 每次被插入到collapseset时执行，target是collapseset节点实例对象，触发在attached生命周期之后
				this.setData({collapseset: target});
				// console.log(this.data.collapseset);
			}
		}
	},

	ready() {
		//const collapseset = this.data.collapseset;
		if (this.data.collapseset) this.data.collapseset.addCollapse(this);
	},


	data: {
		collapseset: null,
		_active: false
	},
  properties: {
		hqActive: {
			type: Boolean,
			value: false,
			observer(newVal) {
			 // console.log(newVal);
				this.setData({ _active: newVal });
			}
		},
		hqDisabled: {
			type: Boolean,
			value: false
		},
		title: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
		controlPanel() {
			if (this.data.hqDisabled) return;
			this.setData({_active: !this.data._active});
		//	console.log(this.data.collapseset);
			if (this.data.collapseset) this.data.collapseset.changeCollapse(this);
		}
  }
})
