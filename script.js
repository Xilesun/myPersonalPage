new Vue({
  el: '#container',
  data: {
    name: 'Qia Yang',
    info: 'Qia',
    navShow: false,
    nav: [
      { title: 'Home' },
      { title: 'My Skills' },
      { title: 'Old Version' }
    ],
    chose: 'Home',
    tools: ['JQuery', 'Stylus', 'Vue', 'Webpack', 'Photoshop', 'Sublime Text']
  },
  methods: {
    showNavBar () {
      this.navShow = ! this.navShow;
    },
    choose (item) {
      this.chose = item.title;
      this.navShow = ! this.navShow;
    }
  }
})