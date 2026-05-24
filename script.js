const CHEF_WHATSAPP_NUMBER = "";

const priceRanges = {
  family: [185, 245],
  sea: [285, 420],
  office: [160, 230],
};

const extraRanges = {
  none: [0, 0],
  dessert: [35, 65],
  serving: [55, 100],
};

const quoteForm = document.querySelector("#quoteForm");
const estimateForm = document.querySelector("#estimateForm");
const estimateOutput = document.querySelector("#estimateOutput");

const formatEgp = (amount) =>
  new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(amount);

const updateEstimate = () => {
  if (!estimateForm || !estimateOutput) return;

  const formData = new FormData(estimateForm);
  const selectedPackage = formData.get("package") || "family";
  const selectedExtras = formData.get("extras") || "none";
  const guests = Math.max(Number(formData.get("estimateGuests")) || 0, 6);
  const packageRange = priceRanges[selectedPackage] || priceRanges.family;
  const extraRange = extraRanges[selectedExtras] || extraRanges.none;
  const low = guests * (packageRange[0] + extraRange[0]);
  const high = guests * (packageRange[1] + extraRange[1]);

  estimateOutput.value = `Estimated range: ${formatEgp(low)}-${formatEgp(high)}`;
};

estimateForm?.addEventListener("input", updateEstimate);
updateEstimate();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".chef-section, .intro, .section-heading, .package, .menu-category, .estimate-section, .steps li, .trust-grid article, .contact")
  .forEach((element) => {
    element.setAttribute("data-reveal", "");
    revealObserver.observe(element);
  });

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
    "Hello Sofret Mariane, I would like a catering quote.",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Event date: ${details.date}`,
    `Guests: ${details.guests}`,
    `Menu notes: ${details.message}`,
  ].join("\n");

  if (CHEF_WHATSAPP_NUMBER) {
    const url = `https://wa.me/${CHEF_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  navigator.clipboard?.writeText(text);
  alert("Your catering message is ready. The chef's WhatsApp number will be added before paid orders open.");
});
