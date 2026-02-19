const app = document.querySelector(".app");
const url = app.dataset.pdf;

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const canvas = document.getElementById("pdfCanvas");
const ctx = canvas.getContext("2d");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");

const pageNumEl = document.getElementById("pageNum");
const pageCountEl = document.getElementById("pageCount");

let pdfDoc = null;
let pageNum = 1;
let scale = 1.2;

function renderPage(num) {
  if (!pdfDoc) return;

  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });

    pageNumEl.textContent = num;

    prevBtn.disabled = num <= 1;
    nextBtn.disabled = num >= pdfDoc.numPages;
  });
}

function loadPDF() {
  pdfjsLib.getDocument(url).promise.then((pdf) => {
    pdfDoc = pdf;
    pageCountEl.textContent = pdf.numPages;
    renderPage(pageNum);
  });
}

loadPDF();

prevBtn.onclick = () => {
  if (pageNum <= 1) return;
  pageNum--;
  renderPage(pageNum);
};

nextBtn.onclick = () => {
  if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
  pageNum++;
  renderPage(pageNum);
};

zoomIn.onclick = () => {
  scale += 0.2;
  renderPage(pageNum);
};

zoomOut.onclick = () => {
  if (scale <= 0.4) return;
  scale -= 0.2;
  renderPage(pageNum);
};

// Forum
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

let messages = JSON.parse(localStorage.getItem("forumChat")) || [];

function renderMessages() {
  chatMessages.innerHTML = "";
  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);
    div.textContent = msg.text;
    chatMessages.appendChild(div);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  messages.push({ text, type: "user" });

  // Simulasi balasan forum
  setTimeout(() => {
    messages.push({ text: "Pesan diterima: " + text, type: "other" });
    localStorage.setItem("forumChat", JSON.stringify(messages));
    renderMessages();
  }, 500);

  localStorage.setItem("forumChat", JSON.stringify(messages));
  messageInput.value = "";
  renderMessages();
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

renderMessages();
