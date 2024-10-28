const App = Vue.createApp({
  data() {
    return {
      score: 1,
      name: "",
      name1: "",
    };
  },

  methods: {
    add(num) {
      this.score = this.score + num;
    },

    reduce(num1) {
      this.score = this.score - num1;
    },

    setname(event) {
      this.name = event.target.value;
    },

    reset() {
      this.name = "";
      this.name1 = "";
    },
    setnamee() {
      this.name1 = this.name;
    },
  },
});

App.mount("#achraf");
