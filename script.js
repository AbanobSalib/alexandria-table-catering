const CHEF_WHATSAPP_NUMBER = "201000000000";

const quoteForm = document.querySelector("#quoteForm");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const details = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    date: formData.get("date"),
    guests: formData.get("guests"),
    message: formData.get("message") || "I would like help choosing a menu.",
  };

  const text = [
    "Hello Alexandria Table, I would like a catering quote.",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Event date: ${details.date}`,
    `Guests: ${details.guests}`,
    `Menu notes: ${details.message}`,
  ].join("\n");

  const url = `https://wa.me/${CHEF_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
