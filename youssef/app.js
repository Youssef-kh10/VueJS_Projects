const App = Vue.createApp({
  data() {
    return {
      count: 0,
      name: "<h1 style='color:red'> Tu es youssef </h1>",
      name1: "Tu es achraf",
    };
  },

  methods: {
    youssef() {
      const age = prompt("Ecrivez ton age");
      if (age > 22 && age < 24) {
        return this.name;
      } else {
        return this.name1;
      }
    },
  },
});

App.mount("#body");
