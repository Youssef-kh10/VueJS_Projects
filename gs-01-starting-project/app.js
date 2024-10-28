Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const ulEl = document.querySelector("ul");
//
// function addGoal() {
//   const goal = inputEl.value;
//   const liEl = document.createElement("li");
//   liEl.innerText = goal;
//   ulEl.appendChild(liEl);
//   inputEl.value = " ";
// }
//
// buttonEl.addEventListener("click", addGoal);
