const itemsContainer = document.querySelector(".items");

// ------------------------adding each item dynamically

const allItems = [
  {
    id: 1,
    img: "b1.avif",
    name: "Roses Bouquet",
    rating: "★★★☆☆",
    price: "1999",
  },
  {
    id: 2,
    img: "b2.avif",
    name: "Roses Bouquet",
    rating: "★★★★☆",
    price: "1,999",
  },
  {
    id: 3,
    img: "b3.avif",
    name: "Roses Bouquet",
    rating: "★★☆☆☆",
    price: "999",
  },
  {
    id: 4,
    img: "b4.avif",
    name: "Roses Bouquet",
    rating: "★★★★★",
    price: "499",
  },
  {
    id: 5,
    img: "b5.avif",
    name: "Roses Bouquet",
    rating: "★★☆☆☆",
    price: "599",
  },
  {
    id: 6,
    img: "b6.avif",
    name: "Roses Bouquet",
    rating: "★★★☆☆",
    price: "349",
  },
  {
    id: 7,
    img: "b7.avif",
    name: "Roses Bouquet",
    rating: "★★★★☆",
    price: "799",
  },
  {
    id: 8,
    img: "b8.avif",
    name: "Roses Bouquet",
    rating: "★★★★☆",
    price: "1199",
  },
  {
    id: 9,
    img: "b9.avif",
    name: "Roses Bouquet",
    rating: "★★★☆☆",
    price: "899",
  },
  {
    id: 10,
    img: "b10.avif",
    name: "Roses Bouquet",
    rating: "★☆☆☆☆",
    price: "599",
  },
  {
    id: 11,
    img: "b11.avif",
    name: "Roses Bouquet",
    rating: "★★★☆☆",
    price: "399",
  },
  {
    id: 12,
    img: "b12.avif",
    name: "Roses Bouquet",
    rating: "★☆☆☆☆",
    price: "599",
  },
  {
    id: 13,
    img: "b13.avif",
    name: "Roses Bouquet",
    rating: "★★★★☆",
    price: "449",
  },
  {
    id: 14,
    img: "b14.avif",
    name: "Roses Bouquet",
    rating: "★★★★☆",
    price: "399",
  },
  {
    id: 15,
    img: "b15.avif",
    name: "Roses Bouquet",
    rating: "★★★☆☆",
    price: "149",
  },
  {
    id: 16,
    img: "b16.avif",
    name: "Roses Bouquet",
    rating: "★★★★★",
    price: "299",
  },
];

function addItems() {
  let items = "";
  allItems.forEach((item) => {
    items += `
    <article class="item">
      <img src="${item.img}" alt="${item.name}" />
      <h5>${item.name}</h5>
      <p id="rating">${item.rating}</p>
      <p>₹ <span id="price">${item.price}</span></p>
      <button id="${item.id}" value="${item.price}" class="cartBtn">Add to Cart</button>
      <button id="${item.id}" value="${item.price}" class="wishBtn">Add To Wishlist</button>
    </article>
    `;
    // console.log(items);
  });
  itemsContainer.innerHTML = items;
}
addItems();

// ------------------------------------------------------------

const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");
const about = document.getElementById("aboutbtn");
const coContainer = document.querySelectorAll(".co-container > section");
const items = document.querySelectorAll(".items > .item");
const itemImages = document.querySelectorAll(".item > img");
// const cartBtns = document.querySelectorAll(".item > .cartBtn");
const singleCartBtns = document.querySelectorAll(".cartBtn");
const singleWishBtns = document.querySelectorAll(".wishBtn");

const wishlist = document.getElementById("wishlist");
const cart = document.getElementById("cart");
const mobileCartBtn = document.getElementById("cartbtn");
const mobileWishBtn = document.getElementById("wishlistbtn");
const aboutFirstPic = document.getElementById("firstpic");
const aboutSecondPic = document.getElementById("secondpic");

// ---------------------------------------------------------------

function closeMobileNav() {
  mobileNav.style.left = "-100%";
  if (window.innerWidth <= 768) {
    menuIcon.style.display = "block";
  } else {
    menuIcon.style.display = "none";
  }
  for (let i = 0; i < coContainer.length; i++) {
    coContainer[i].addEventListener("mouseover", () => {
      coContainer[i].style.transform = "scale(1.1)";
      coContainer[i].style.boxShadow = "-1px 1px 2px #ff6e4e";
    });

    coContainer[i].addEventListener("mouseout", () => {
      coContainer[i].style.transform = "none";
      coContainer[i].style.boxShadow = "none";
    });
  }

  aboutFirstPic.addEventListener("mouseover", () => {
    aboutFirstPic.style.transform = "scale(1.1)";
    aboutFirstPic.style.boxShadow = "-1px 1px 2px #ff6e4e";
  });

  aboutFirstPic.addEventListener("mouseout", () => {
    aboutFirstPic.style.transform = "none";
    aboutFirstPic.style.boxShadow = "none";
  });

  aboutSecondPic.addEventListener("mouseover", () => {
    aboutSecondPic.style.transform = "scale(1.1)";
    aboutSecondPic.style.boxShadow = "-1px 1px 2px #ff6e4e";
  });

  aboutSecondPic.addEventListener("mouseout", () => {
    aboutSecondPic.style.transform = "none";
    aboutSecondPic.style.boxShadow = "none";
  });
}

menuIcon.addEventListener("click", () => {
  mobileNav.style.left = "0";
  menuIcon.style.display = "none";
  // console.log(coContainer);
  for (let i = 0; i < coContainer.length; i++) {
    coContainer[i].addEventListener("mouseover", () => {
      coContainer[i].style.transform = "none";
      coContainer[i].style.boxShadow = "none";
    });
  }

  aboutFirstPic.addEventListener("mouseover", () => {
    aboutFirstPic.style.transform = "none";
    aboutFirstPic.style.boxShadow = "none";
  });

  aboutSecondPic.addEventListener("mouseover", () => {
    aboutSecondPic.style.transform = "none";
    aboutSecondPic.style.boxShadow = "none";
  });
});

closeBtn.addEventListener("click", () => {
  closeMobileNav();
});

about.addEventListener("click", () => {
  closeMobileNav();
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", () => {
    items[i].style.transform = "scale(1.02)";
    items[i].style.boxShadow = "-1px 1px 2px #ff6e4e";
  });

  items[i].addEventListener("mouseout", () => {
    items[i].style.transform = "none";
    items[i].style.boxShadow = "none";
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuIcon.style.display = "none";
    mobileNav.style.left = "-100%";
  } else {
    menuIcon.style.display = "block";
  }
});

// --------------------WishList & cart Count----------------------------------------------------------


if (!localStorage.getItem("cartCount")) {
  localStorage.setItem("cartCount", 0);
}

if (!localStorage.getItem("wishCount")) {
  localStorage.setItem("wishCount", 0);
}

cartinnerHTML = `<sup
              ><sup id= "wish-count" style="
                  background-color: red;
                  color: white;
                  padding: 0.5vmin;
                  border-radius: 50%;
                "
                >${localStorage.getItem("cartCount")}</sup
              ></sup
            >`;
cart.innerHTML = cartinnerHTML;
mobileCartBtn.innerHTML = `Cart${cartinnerHTML}`;

wishlistinnerHTML = `<sup
              ><sup id= "wish-count" style="
                  background-color: red;
                  color: white;
                  padding: 0.5vmin;
                  border-radius: 50%;
                "
                >${localStorage.getItem("wishCount")}</sup
              ></sup
            >`;
wishlist.innerHTML = wishlistinnerHTML;
mobileWishBtn.innerHTML = `Wishlist${wishlistinnerHTML}`;

singleCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem(
      "cartCount",
      Number(localStorage.getItem("cartCount")) + 1
    );
    cartinnerHTML = `<sup
              ><sup id= "wish-count" style="
                  background-color: red;
                  color: white;
                  padding: 0.5vmin;
                  border-radius: 50%;
                "
                >${localStorage.getItem("cartCount")}</sup
              ></sup
            >`;

    cart.innerHTML = cartinnerHTML;
    mobileCartBtn.innerHTML = `Cart${cartinnerHTML}`;
  });
});

singleWishBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.setItem(
      "wishCount",
      Number(localStorage.getItem("wishCount")) + 1
    );
    wishlistinnerHTML = `<sup
              ><sup id= "wish-count" style="
                  background-color: red;
                  color: white;
                  padding: 0.5vmin;
                  border-radius: 50%;
                "
                >${localStorage.getItem("wishCount")}</sup
              ></sup
            >`;

    wishlist.innerHTML = wishlistinnerHTML;
    mobileWishBtn.innerHTML = `Wishlist${wishlistinnerHTML}`;
  });
});




// ----------cart items adding-----------------------

const cartItems = document.querySelector(".cartitems");

let selectedItem = "";

singleCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedItemId = btn.getAttribute("id");
    const item = allItems[selectedItemId - 1];
    console.log(item);

    selectedItem = `
    <article class="item">
      <img src="${item.img}" alt="${item.name}" />
      <h5>${item.name}</h5>
      <p id="rating">${item.rating}</p>
      <p>₹ <span id="price">${item.price}</span></p>
      <button id="${item.id}" value="${item.price}" class="cartBtn">Add to Cart</button>
      <button id="${item.id}" value="${item.price}" class="wishBtn">Add To Wishlist</button>
    </article></br>
    `;

  });
  console.log(selectedItem);
});


