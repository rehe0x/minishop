Component({
  data: {

  },
  properties: {
    showDialog: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    closeDialog() {
      this.setData({
        showDialog: false
      })
    },
  }
})