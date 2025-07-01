document.getElementById("quoteForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    service: e.target.service.value
  };

  await fetch("https://your-n8n-webhook-url-here", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Request sent!");
});
