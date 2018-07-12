// Solve the below problems:

// #1) Convert the below promise into async await
async function getStarship() {
  const resp = await fetch('https://swapi.co/api/starships/9/');
  const starship = await resp.json();
  console.log(starship);
}
getStarship();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(
      async function(url) {
        const resp = await fetch(url);
        return resp.json();
      }
    ));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err){
    console.log('boooo');
  }
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

async function getPokemon(id) {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await resp.json();
      console.log(pokemon.name);
    } catch (error){
    console.log('Why no pokemon?', error);
  }
}