// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Placeholder action for the sponsor packet button
const sponsorBtn = document.getElementById("sponsor-packet-btn");
if (sponsorBtn) {
  sponsorBtn.addEventListener("click", function () {
    // Replace this with a real link to your PDF when you have it
    alert("Soon this button will download our sponsor packet PDF.");
  });
}
