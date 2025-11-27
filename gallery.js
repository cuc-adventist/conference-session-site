
// Replace 'yourusername' and 'repo' with the user's GitHub repo
const repoUser = "yourusername";
const repoName = "conference-session-site";

fetch(`https://api.github.com/repos/${repoUser}/${repoName}/contents/photos`)
  .then(res => res.json())
  .then(files => {
    const gallery = document.getElementById("gallery");
    files.forEach(file => {
      if (file.name.match(/.(jpg|jpeg|png|gif)$/i)) {
        const img = document.createElement("img");
        img.src = file.download_url;
        img.style.width = "100%";
        img.style.borderRadius = "8px";
        gallery.appendChild(img);
      }
    });
  })
  .catch(err => console.error("Error loading gallery:", err));
