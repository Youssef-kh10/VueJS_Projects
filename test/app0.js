const a = 0;
const app = Vue.createApp({
  //el: "#achraf",
  data() {
    return {
      myGoal: "<h1 style='color: red'> Achraf </h1>",
      myGoalA: " Achraf ",
      myGoalB: "Hassan",
      link: "https://soolma.store/",
    };
  },

  methods: {
    pirora() {
      const random = Math.random();
      if (random > 0.5) {
        return this.myGoalA;
      } else {
        return this.myGoalB;
      }
    },
  },
});

app.mount("#achraf");
