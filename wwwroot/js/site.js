"use strict"

Vue.use(VueMaterial.default); 





var navbar = {
  name: "PersistentMini",
  data: function data() {  
    return {
        showNavigation: false,  
        showSidepanel: false,
        expandNews: false,
        expandSingle: false
    }
  }, 
  methods: {
    toggleMenu: function toggleMenu() {
      this.showNavigation = !this.showNavigation
    },
       toggleMenu2: function toggleMenu2() {
      this.showSidepanel = !this.showSidepanel
    }
  }
  };



var app = new Vue(navbar);
///var table = new Vue(TableObject);

app.$mount("#app")       ;
//table.$mount("#table");



