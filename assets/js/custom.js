document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = Array.from(document.querySelectorAll(".js-tab-btn"));
  var tabContent = document.getElementById("product-tab-content");

  if (!tabButtons.length || !tabContent) {
    return;
  }

  var productsByTab = {
    pea: [
      {
        title: "Pea Microgreens",
        description: "Sweet, crunchy, and rich in vitamins A, C, and folate.",
        price: "$141.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Pea Protein Mix",
        description: "A tender blend perfect for salads, wraps, and smoothies.",
        price: "$149.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Pea Shoots Premium",
        description: "Freshly harvested shoots with bright flavor and texture.",
        price: "$155.00",
        image: "assets/images/tab-3.webp",
      },
         {
        title: "Pea Shoots Premium",
        description: "Freshly harvested shoots with bright flavor and texture.",
        price: "$155.00",
        image: "assets/images/tab-3.webp",
      },

         {
        title: "Pea Shoots Premium",
        description: "Freshly harvested shoots with bright flavor and texture.",
        price: "$155.00",
        image: "assets/images/tab-3.webp",
      },

         {
        title: "Pea Shoots Premium",
        description: "Freshly harvested shoots with bright flavor and texture.",
        price: "$155.00",
        image: "assets/images/tab-3.webp",
      },
    ],
    radish: [
      {
        title: "Radish Blaze",
        description: "Peppery microgreens that add a spicy kick to any dish.",
        price: "$129.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Radish Fresh Cut",
        description: "Crisp stems and bold flavor, harvested at peak freshness.",
        price: "$139.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Radish Vital Pack",
        description: "Loaded with antioxidants and perfect for daily meals.",
        price: "$147.00",
        image: "assets/images/tab-3.webp",
      },
    ],
    sunflower: [
      {
        title: "Sunflower Crunch",
        description: "Nutty taste with a tender bite and dense nutrition.",
        price: "$133.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Sunflower Gold",
        description: "Bright, hearty greens ideal for sandwiches and bowls.",
        price: "$143.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Sunflower Daily",
        description: "A clean and energizing option for everyday wellness.",
        price: "$151.00",
        image: "assets/images/tab-3.webp",
      },
    ],
    wheatgrass: [
      {
        title: "Wheatgrass Classic",
        description: "Fresh-cut wheatgrass for nutrient-dense juice shots.",
        price: "$125.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Wheatgrass Boost",
        description: "A vibrant green option to support your daily routine.",
        price: "$136.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Wheatgrass Vital",
        description: "Carefully grown and harvested for clean flavor.",
        price: "$144.00",
        image: "assets/images/tab-3.webp",
      },
    ],
    marijuana: [
      {
        title: "Herbal Micro Mix",
        description: "A specialty blend crafted for aroma and freshness.",
        price: "$159.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Premium Herbal Cut",
        description: "Locally grown greens with smooth texture and depth.",
        price: "$169.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Signature Herbal Pack",
        description: "High-quality specialty greens for curated recipes.",
        price: "$179.00",
        image: "assets/images/tab-3.webp",
      },
    ],
    "bamboo-gras": [
      {
        title: "Bamboo Grass Fresh",
        description: "Light, clean flavor with a refreshing finish.",
        price: "$122.00",
        image: "assets/images/tab-1.webp",
      },
      {
        title: "Bamboo Vital Blend",
        description: "Soft texture and balanced taste for daily use.",
        price: "$132.00",
        image: "assets/images/tab-2.webp",
      },
      {
        title: "Bamboo Green Pack",
        description: "Chemical-free greens grown with consistent quality.",
        price: "$142.00",
        image: "assets/images/tab-3.webp",
      },
    ],
  };

  function productCardMarkup(product) {
    return (
      '<div class="border border-[#C1CBDE] rounded-[40px]">' +
      '<figure class="block mb-[26px] rounded-[38px] overflow-hidden">' +
      '<img src="' +
      product.image +
      '" alt="' +
      product.title +
      '" loading="lazy" />' +
      "</figure>" +
      '<div class="p-[0px_15px_62px] text-center">' +
      '<h3 class="text-[24px] font-semibold text-darklight mb-[10px]">' +
      product.title +
      "</h3>" +
      '<p class="text-secondary font-normal text-[14px] landig-[22px] mb-[22px]">' +
      product.description +
      "</p>" +
      '<span class="text-darklight font-semibold text-[24px]">' +
      product.price +
      "</span>" +
      '<div class="mt-[36px]">' +
      '<a href="#" class="text-[18px] py-[3px] pr-[3px] pl-[29px] rounded-full inline-flex items-center gap-[14px] text-dark font-semibold border border-accent">Buy Now' +
      '<span class="bg-accent rounded-full w-[47px] h-[47px] inline-flex items-center justify-center">' +
      '<svg class="w-[22px] h-[22px]" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M13.2275 5.43585L18.7917 11L13.2275 16.5642" stroke="#fff" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />' +
      '<path d="M3.20837 11H18.6359" stroke="#fff" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />' +
      "</svg></span></a></div></div></div>"
    );
  }

  function setActiveTab(tabName) {
    var activeProducts = productsByTab[tabName] || [];

    tabButtons.forEach(function (button) {
      var isActive = button.dataset.tab === tabName;
      button.setAttribute("aria-selected", String(isActive));
      button.classList.toggle("bg-accent", isActive);
      button.classList.toggle("text-white", isActive);
      button.classList.toggle("text-[#484A57]", !isActive);
    });

    tabContent.innerHTML = activeProducts.map(productCardMarkup).join("");
  }

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setActiveTab(button.dataset.tab);
    });

    button.addEventListener("keydown", function (event) {
      var currentIndex = tabButtons.indexOf(button);

      if (event.key === "ArrowRight") {
        event.preventDefault();
        var nextButton = tabButtons[(currentIndex + 1) % tabButtons.length];
        nextButton.focus();
        setActiveTab(nextButton.dataset.tab);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        var previousIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
        var previousButton = tabButtons[previousIndex];
        previousButton.focus();
        setActiveTab(previousButton.dataset.tab);
      }
    });
  });

  setActiveTab(tabButtons[0].dataset.tab);
});
