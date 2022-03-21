const form = document.querySelector("#formulario");
const enviarFormulario = (event) => {
  event.preventDefault();
  const { name, email, password } = event.target;
  console.log(name.value, email.value, password.value);
  if (name.value.length === 0) alert("El nombre no es valido");
  if (email.value.length === 0) alert("El email no es valido");
  if (password.value.length === 0) alert("La contraseña no es valida");
};
form.addEventListener("submit", enviarFormulario);
