document.getElementById("quoteForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    service: e.target.service.value
  };

await fetch("http://localhost:5678/webhook-test/quote-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Request sent!");
});
