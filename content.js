function getArticleText() {
  const article = document.querySelector("article");
  if (article && article.innerText.trim()) {
    return article.innerText.trim();
  }

  const paragraphs = Array.from(document.querySelectorAll("p"))
    .map((p) => p.innerText.trim())
    .filter((text) => text.length > 50);

  return paragraphs.join("\n\n").trim();
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_ARTICLE_TEXT") {
    const text = getArticleText();
    sendResponse({ text });
  }
   return true;
});