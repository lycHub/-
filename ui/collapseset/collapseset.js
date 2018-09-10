// ui/collapseset/collapseset.js
Component({
	relations: {
		'./collapse/collapse': {
			type: 'child'
		}
	},
  properties: {
		hqAccordion:{
			type: Boolean,
			value: false
		}
  },

	ready() {
		// 使用getRelationNodes可以获得nodes数组，包含所有已关联的collapse，且是有序的
		const nodes = this.getRelationNodes('./collapse/collapse');
		// console.log(nodes);
	},
  data: {
		_collapses: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
		// 添加collapses组件
		addCollapse(collapse) {
			this.data._collapses.push(collapse);
			// this.setData({ _collapses: collapse });
		//	console.log(this.data._collapses);
		},

		// 当某个组件被点击后，更新_collapses，使其他组件的isOpen = false
		changeCollapse(collapse) {
			if (!collapse.data._active || !this.data.hqAccordion) return;

			this.data._collapses.map(item => item.setData({_active: item.data.title === collapse.data.title}));
			
			//this.setData({ _collapses: this.data._collapses});
			//console.log(this.data._collapses);
		}
  }
})
