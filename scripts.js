const usernameInput = document.getElementById("username");
const searchButton = document.getElementById("search");
const repoList = document.getElementById("repo-list");

searchButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        repoList.innerHTML = "";
        data.forEach((repo) => {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          link.href = repo.html_url;
          link.textContent = repo.name;
          listItem.appendChild(link);
          repoList.appendChild(listItem);
        });
      })
      .catch((error) => {
        repoList.innerHTML = "<li>Error: User not found</li>";
      });
  }
});