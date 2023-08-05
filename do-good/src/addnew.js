const submitButton = document.querySelector(`button[type="submit"]`);
const addNew = document.getElementById("addnew");

submitButton.addEventListener("onClick", () => {
  const inputField = document.querySelector(`input[name="new"]`);

  const fieldValue = inputField.value;

  console.log(fieldValue);
});
