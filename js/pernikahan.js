// Fungsi untuk menampilkan pop-up
function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
    document.getElementById("overlay" + popupId.slice(-1)).style.display =
      "block";
  }
  
  // Fungsi untuk menyembunyikan pop-up
  function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.getElementById("overlay" + popupId.slice(-1)).style.display = "none";
  }
  
  // Mengatur event listener pada button untuk menampilkan pop-up
  document.querySelectorAll(".popupButton").forEach(function (button) {
    button.addEventListener("click", function () {
      var popupId = this.getAttribute("data-popup-id");
      showPopup(popupId);
    });
  });
  
  // Mengatur event listener pada latar belakang untuk menyembunyikan pop-up
  document.querySelectorAll(".overlay").forEach(function (overlay) {
    overlay.addEventListener("click", function () {
      var popupId = this.getAttribute("id").replace("overlay", "popup");
      hidePopup(popupId);
    });
  });
  
  function searchProducts() {
    var input, filter, products, product, title, i, noResults;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    products = document.getElementsByClassName("product");
    noResults = document.getElementById("noResults");
    noResults.style.display = "none";
  
    var found = false;
  
    for (i = 0; i < products.length; i++) {
      title = products[i].getElementsByTagName("h3")[0];
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        products[i].style.display = "";
        found = true;
      } else {
        products[i].style.display = "none";
      }
    }
  
    if (!found) {
      noResults.style.display = "block";
    }
  }
  
  function filterProducts() {
    var filter, products, product, category, i, noResults;
    filter = document.getElementById("categoryFilter").value;
    products = document.getElementsByClassName("product");
    noResults = document.getElementById("noResults");
    noResults.style.display = "none";
  
    if (filter === "all") {
      for (i = 0; i < products.length; i++) {
        products[i].style.display = "";
      }
    } else {
      var found = false;
      for (i = 0; i < products.length; i++) {
        category = products[i]
          .getElementsByTagName("h3")[0]
          .innerText.toLowerCase();
        if (category.indexOf(filter) > -1) {
          products[i].style.display = "";
          found = true;
        } else {
          products[i].style.display = "none";
        }
      }
  
      if (!found) {
        noResults.style.display = "block";
      }
    }
  }
  
  let arrow = document.querySelectorAll(".arrow");
  
  for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
          let arrowParent = e.target.parentElement.parentElement; // selecting main parent of arrow
          arrowParent.classList.toggle("showMenu");
      });
  }
  
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu-alt-left");
  
  sidebarBtn.addEventListener("click", () => {
      // Tambahkan kondisi untuk memeriksa lebar layar sebelum mengaktifkan atau menonaktifkan sidebar
      if (window.innerWidth > 768) {
          sidebar.classList.toggle("close");
      }
  });
  
  // Tambahan: Menutup sidebar saat layar mobile di-rotate (landscape/portrait change)
  window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
          sidebar.classList.remove("close");
      }
  });
  
  