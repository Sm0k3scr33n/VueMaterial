"use strict"

Vue.use(VueMaterial.default); 



var navbar = {
  name: "PersistentMini",
  data: function data() {  
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  }
};

var app = new Vue(navbar);

app.$mount("#app")       ;
 