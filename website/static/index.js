document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded!");

  // Menghapus alert flash message setelah beberapa detik
  setTimeout(function () {
    let alerts = document.querySelectorAll(".alert");
    alerts.forEach((alert) => {
      alert.style.transition = "opacity 0.5s";
      alert.style.opacity = "0";
      setTimeout(() => alert.remove(), 500);
    });
  }, 3000); // Flash message hilang setelah 3 detik

  // Tombol "close" flash message tanpa reload halaman
  document.querySelectorAll(".alert .close").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      let alert = this.parentElement;
      alert.style.transition = "opacity 0.5s";
      alert.style.opacity = "0";
      setTimeout(() => alert.remove(), 500);
    });
  });

  // Tambahkan efek hover pada navbar
  let navItems = document.querySelectorAll(".navbar-nav .nav-item");
  navItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#555";
    });
    item.addEventListener("mouseout", function () {
      this.style.backgroundColor = "transparent";
    });
  });

  // Cek apakah halaman ini adalah halaman "Sign Up"
  if (window.location.pathname === "/sign-up") {
    console.log("Kamu berada di halaman Sign Up!");
  }
});
