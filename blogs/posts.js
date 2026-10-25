/**
 * Blog posts, shared by the home page (3 most recent) and blogs/index.html (all).
 * To add a post: copy blogs/hello-world.html, rename it, then add an entry here.
 * date is YYYY-MM-DD; posts are sorted newest first automatically.
 */
const BLOG_POSTS = [
  {
    file: "hello-world.html",
    title: "Hello World",
    date: "2026-10-25",
    summary: "This is a sample post."
  }
];

/**
 * Render post cards into the element with the given id.
 * basePath is the path from the current page to the blogs folder ("" or "blogs/").
 */
function renderBlogPosts(containerId, basePath, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const posts = BLOG_POSTS.slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit || BLOG_POSTS.length);

  posts.forEach(post => {
    const href = basePath + post.file;
    const date = new Date(post.date).toLocaleDateString("en-GB", {
      day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
    });

    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6";
    col.innerHTML = `
      <article class="blog-card">
        <div class="blog-meta"><i class="bi bi-calendar3"></i> <span class="date"></span></div>
        <h3><a></a></h3>
        <p></p>
        <a class="read-more">Read more <i class="bi bi-arrow-right"></i></a>
      </article>`;
    col.querySelector(".date").textContent = date;
    col.querySelector("h3 a").textContent = post.title;
    col.querySelector("h3 a").href = href;
    col.querySelector("p").textContent = post.summary;
    col.querySelector(".read-more").href = href;
    container.appendChild(col);
  });
}
