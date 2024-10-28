const App = Vue.createApp({
  data() {
    return {
      count: 2,
      name: "",
      name1: "",
      name2: "<h2 style:color='bleu'> Tu es Youssef </h2>",
      neme3: " <h2 style='color: green'> Tu es achraf </h2>",
    };
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    },
    reduce(num1) {
      this.count = this.count - num1;
    },

    rigl(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },

    rigl1() {
      this.name1 = this.name;
    },

    sub(event) {
      event.preventDefault();
      alert("hey lwalida");
    },

    hey() {
      const age = prompt("write your age");
      if (age > 24 && age < 26) {
        return this.neme3;
      } else if (age > 22 && age < 24) {
        return this.name2;
      } else {
        return "<h2 style='color: red'> Wrong age </h2>";
      }
    },
  },
});

App.mount("#body");
