const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrige la llamada a la clase name 
const $n = document.querySelector('.name');
// Se corrige la llamada a la clase blog
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//Se agrega async a la funcion  para que pueda esperar a que se resuelva la promesa
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Se agrega la constante data y response se convierte a json 
  const data = await  response.json();
  console.log(data);
  //Se cambian las comillas dobles por backticks de las tres asignaciones de valores
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);