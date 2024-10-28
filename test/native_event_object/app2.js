const App = Vue.createApp({
  data() {
    return {
      score: 0,
      name: "",
      confname: "",
    };
  },

  methods: {
    add(num) {
      this.score = this.score + num;
    },

    reduce(num) {
      this.score = this.score - num;
    },
    reset() {
      this.score = this.score * 0;
    },

    setName(event, last_name) {
      this.name = event.target.value + " " + last_name;
    },

    rigl(event) {
      event.preventDefault();
      alert("heyy achraf");
    },

    riglnda() {
      this.confname = this.name;
    },
  },
});

App.mount("#body");
