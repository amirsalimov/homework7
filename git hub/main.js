const input = document.getElementById('input');
const box = document.querySelector('.box');

input.addEventListener('keyup', () => {

  const e = input.value
  let url = `https://api.github.com/users?q=${e}&per_page=200`;

  fetch(url)
    .then(res => res.json())
    .then(data => {

      const productList = data.map(user => {
        return {
          name: user.login,
          img: user.avatar_url,
          url: user.html_url
        };
      });
      
      const searchTerm = input.value.toLowerCase();
      
      const filteredList = productList.filter(user => {
        return user.name.toLowerCase().includes(searchTerm);
      });
