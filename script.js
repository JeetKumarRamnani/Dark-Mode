const d = document;
const section = d.querySelector("section");
const toggleBtn = d.querySelector("#toggleBtn");
const headerTitle = d.querySelector("#headerTitle");
const body = d.body;
const articleTitle = d.querySelector("#articleTitle");
const dateSpan = d.querySelector("#dateSpan");
const durationSpan = d.querySelector("#durationSpan");
const para = d.querySelector("#para");

async function createArticle() {
  const dataSet = await fetchData();
  dataSet.forEach((data) => {
    const article = d.createElement("article");
    article.classList.add("flex", "flex-col", "gap-3");
    const h2 = d.createElement("h2");
    h2.classList.add("text-pink-600", "text-3xl", "font-bold");
    h2.id = "articleTitle";
    const div = d.createElement("div");
    div.classList.add("date-duration", "text-gray-500");

    const dateSpan = d.createElement("span");
    dateSpan.id = "dateSpan";
    const durationSpan = d.createElement("span");
    durationSpan.id = "durationSpan";
    dateSpan.classList.add("mr-2");
    div.append(dateSpan, durationSpan);
    const para = d.createElement("p");
    para.id = "para";
    para.classList.add("text-gray-700");
    article.append(h2, div, para);
    section.appendChild(article);
    // console.log(div[0]);
    //   console.log(h2, div, para);
    bindData(h2, dateSpan, durationSpan, para, data);
  });
}

function bindData(heading, date, duration, paragraph, data) {
  heading.innerHTML = data.title;
  date.innerHTML = data.date;
  duration.innerHTML = data.duration;
  paragraph.innerHTML = data.content;
}

async function fetchData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

createArticle();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("bg-[#282c35]");
  headerTitle.classList.toggle("text-white");
  toggleBtn.classList.toggle("text-black");
  para.classList.toggle("text-white");
  para.innerHTML = "hello";
});
