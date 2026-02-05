// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list");

async function main() {
  const users= await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData =  await users.json();
  userListEl.innerHTML=usersData.map((user) => usersHTML(user)).join('');
}
main();

function showUserPosts(id) {
    localStorage.setItem("id",id)
  window.location.href = `${window.location.origin}/user.html`;
  
}
function usersHTML(user) {
  return `
    <div class="user-card" onclick="showUserPosts(${user.id})">
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> ${user.website}</p>
    </div>
  `;
}