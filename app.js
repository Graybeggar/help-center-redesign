const ARTICLES = [
  { cat: "Billing", q: "I was charged twice. What do I do?",
    a: "One of the charges is usually a temporary hold that drops off within 3 to 5 business days. If both charges still show as settled after that, contact us with your account email and the two charge dates and we will refund the duplicate." },
  { cat: "Billing", q: "How do I get a copy of my invoice?",
    a: "Open Settings, then Billing history. Every invoice from the last 12 months is there as a PDF. For anything older, contact support and we will pull it from the archive for you." },
  { cat: "Billing", q: "How do I cancel my plan?",
    a: "Open Settings, then Plan, then Cancel. You keep access until the end of the current billing period, and we email a confirmation right away so you have it in writing." },
  { cat: "Login", q: "How do I reset my password?",
    a: "On the sign-in page, choose Forgot password. We email you a link that stays valid for 15 minutes. If no email arrives, check spam, then make sure you are checking the inbox for the email address on your account." },
  { cat: "Login", q: "My two-factor code never arrives. Help?",
    a: "Wait a full 10 minutes before requesting a new code, because asking again can cancel the first one. Still nothing? Your carrier may be filtering short codes. Contact us and we will verify you another way." },
  { cat: "Login", q: "I am locked out after too many tries",
    a: "Locks clear on their own after 30 minutes. If you need in sooner, contact support from the email address on the account and we can unlock it after a quick identity check." },
  { cat: "Account", q: "How do I change the email on my account?",
    a: "Open Settings, then Account, then Email. We send a confirmation link to the new address. Lost access to the old inbox too? Contact support; the manual route takes 2 to 3 business days for your security." },
  { cat: "Account", q: "Can I merge two accounts into one?",
    a: "Yes. Contact support with both account emails. We confirm you own both, then move everything into the one you keep. Merges cannot be undone, so we double-check the details with you first." },
  { cat: "Troubleshooting", q: "The app keeps crashing. What fixes it?",
    a: "Update the app, restart your device, then clear the app cache. Still crashing? Note what page you were on when it happened and send that with your device model; it helps us find the cause fast." },
  { cat: "Troubleshooting", q: "The export downloads an empty file",
    a: "Exports longer than 30 days can time out on large accounts. Try splitting the range into two shorter exports. If the file is still empty, contact us and we will generate it for you." },
];

const list = document.getElementById("articles");
const empty = document.getElementById("no-results");
const searchBox = document.getElementById("search");
let activeCat = "All";

function render() {
  const q = searchBox.value.trim().toLowerCase();
  const matches = ARTICLES.filter((a) =>
    (activeCat === "All" || a.cat === activeCat) &&
    (q === "" || (a.q + " " + a.a).toLowerCase().includes(q))
  );
  list.innerHTML = matches.map((a) => `
    <details class="card">
      <summary><span class="tag">${a.cat}</span> ${a.q}</summary>
      <p>${a.a}</p>
    </details>`).join("");
  empty.hidden = matches.length > 0;
}

searchBox.addEventListener("input", render);
document.querySelectorAll(".cat").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeCat = btn.dataset.cat;
    render();
  });
});
render();
