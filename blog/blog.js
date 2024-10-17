const articles = [
  {
    title: "The Beginners Guide to the Gym",
    date: "2024-10-14",
    link: "/ironlifters/articles/The_Beginners_Guide_to_the_Gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstLine:
      "Starting at the gym can feel both exciting and intimidating. You may have goals, but what if you step in and suddenly feel judged by everyone around you? Rest assured, that’s unlikely. Most gym communities are welcoming, and feeling unsure of what you’re doing is totally normal! You've already taken the first step, and that's something to be proud of. In this article, I’ll help clear up some of the uncertainty.",
  },
];

const main = document.querySelector("main");

const createHeaderArticle = (article) => {
  const headerElement = document.createElement("div");
  headerElement.classList.add("headerArticle");

  const firstLine = article.firstLine.split(" ").slice(0, 30).join(" ") + "...";

  headerElement.innerHTML = `
  <img src=${article.image}></img>
  <div>
    <div>
        <h1>${article.title}</h1>
        <p>${firstLine}</p>
    </div>
    <a href=${article.link}>Read More</a>
  </div>
  `;

  main.appendChild(headerElement);
};

createHeaderArticle(articles[0]);

const articleContainer = document.createElement("div");
articleContainer.classList.add("articleContainer");
main.appendChild(articleContainer);

while (articles.slice(1).length % 3 != 0) {
  articles.push({ name: "", image: "", firstLine: "", link: "" });
}

articles.slice(1).forEach((article) => {
  const articleElement = document.createElement("div");
  articleElement.classList.add("article");

  if (article.name == "") {
    articleElement.style.opacity = "0";
  }

  const firstLine = article.firstLine.split(" ").slice(0, 10).join(" ") + "...";

  articleElement.innerHTML = `
    <img src=${article.image}></img>
    <div>
    <h1>${article.title}</h1>
    <p>${firstLine}</p>
    </div>
    <a href=${article.link}>Read More</a>
  `;

  articleContainer.appendChild(articleElement);
});
