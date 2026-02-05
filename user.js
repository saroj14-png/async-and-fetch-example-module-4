console.log();
async function main() {
  const id= localStorage.getItem("id");
  const posts = await fetch("https://jsonplaceholder.typicode.com/users");
  userListEl.innerHTML=posts.json();