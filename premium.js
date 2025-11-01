let isPremium = false; // initially false

// Check if user has paid
async function checkPremiumStatus() {
  const token = localStorage.getItem("token");
  const res = await fetch("/user/premium-status", {
    headers: { "Authorization": "Bearer " + token }
  });
  const data = await res.json();
  isPremium = data.isPremium;

  document.querySelectorAll(".premium-btn").forEach(btn => {
    btn.disabled = !isPremium; // disable premium buttons if not paid
    if (!isPremium) btn.title = "Premium feature - unlock to use";
  });
}

// Payment button
document.getElementById("pay_btn").addEventListener("click", async () => {
  // Example: call backend to initiate payment
  const token = localStorage.getItem("token");
  const res = await fetch("/user/pay", {
    method: "POST",
    headers: { "Authorization": "Bearer " + token }
  });
  const data = await res.json();
  if (data.success) {
    alert("Payment successful! Premium features unlocked.");
    isPremium = true;
    checkPremiumStatus(); // refresh buttons
  }
});
