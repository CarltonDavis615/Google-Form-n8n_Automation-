document.getElementById("quoteForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    service: e.target.service.value
  };

await fetch("http://localhost:5678/webhook-test/46d90e4d-0b01-4c65-a4d1-b2d3cfb9d25d", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Request sent!");
});
