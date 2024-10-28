const App = Vue.createApp({
  data() {
    return {
      alex: " <h1 style='color:red'> Welcome youssef </h1>",
      youx: " <h1 style='color:green'> Welcome achraf </h2>",
      count: 0,
      link: "https://facebook.com",
    };
  },

  methods: {
    add(num) {
      this.count = this.count + num;
    },
    reduce(num) {
      this.count = this.count - num;
    },
    resset(num) {
      this.count = this.count * 0;
    },
  },
});

App.mount("#rigl");
