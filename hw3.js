const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};
const ok =() => {alert("You agreed.")};
const no =() => {alert("You canceled the execution.")}

ask("Do you agree?",ok,no);