/*!
 * Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  const url = `https://api.airtable.com/v0/${secrets.AirtableBase}/Cards?api_key=${secrets.ApiAirtable}&fields%5B%5D=Card+Name&fields%5B%5D=Rarity&fields%5B%5D=nowPrice&fields%5B%5D=nameID&fields%5B%5D=earlyPrice&filterByFormula=Rarity%3D%22common%22`;
  const url2 = `https://api.airtable.com/v0/${secrets.AirtableBase}/Cards?api_key=${secrets.ApiAirtable}&fields%5B%5D=Card+Name&fields%5B%5D=Rarity&fields%5B%5D=nowPrice&fields%5B%5D=nameID&fields%5B%5D=earlyPrice&filterByFormula=Rarity%3D%22uncommon%22`;
  const url3 = `https://api.airtable.com/v0/${secrets.AirtableBase}/Cards?api_key=${secrets.ApiAirtable}&fields%5B%5D=Card+Name&fields%5B%5D=Rarity&fields%5B%5D=nowPrice&fields%5B%5D=nameID&fields%5B%5D=earlyPrice&filterByFormula=Rarity%3D%22rare%22`;
  fetch(url)
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then((data) => {
      var theCards = data.records;
      var table = document.getElementById("marketPricing");
      var count = 1;
      theCards.forEach((element, index) => {
        var row = table.insertRow(index);
        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = element.fields["Card Name"];
        if (element.fields.nowPrice > element.fields.earlyPrice) {
          row.className = "table-success";
        } else if (element.fields.nowPrice < element.fields.earlyPrice) {
          row.className = "table-danger";
        }
        row.insertCell(2).innerHTML = element.fields.nameID;
        row.insertCell(3).innerHTML = element.fields.nowPrice;
        count++;
      });
    })
    .catch((error) => console.error(error));

  fetch(url2)
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then((data) => {
      var theCards = data.records;
      var table = document.getElementById("marketPricingTwo");
      var count = 1;
      theCards.forEach((element, index) => {
        var row = table.insertRow(index);
        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = element.fields["Card Name"];
        if (element.fields.nowPrice > element.fields.earlyPrice) {
          row.className = "table-success";
        } else if (element.fields.nowPrice < element.fields.earlyPrice) {
          row.className = "table-danger";
        }
        row.insertCell(2).innerHTML = element.fields.nameID;
        row.insertCell(3).innerHTML = element.fields.nowPrice;
        count++;
      });
    })
    .catch((error) => console.error(error));

  fetch(url3)
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    })
    .then((data) => {
      var theCards = data.records;
      var table = document.getElementById("marketPricingThree");
      var count = 1;
      theCards.forEach((element, index) => {
        var row = table.insertRow(index);
        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = element.fields["Card Name"];
        if (element.fields.nowPrice > element.fields.earlyPrice) {
          row.className = "table-success";
        } else if (element.fields.nowPrice < element.fields.earlyPrice) {
          row.className = "table-danger";
        }
        row.insertCell(2).innerHTML = element.fields.nameID;
        row.insertCell(3).innerHTML = element.fields.nowPrice;
        count++;
      });
    })
    .catch((error) => console.error(error));

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});