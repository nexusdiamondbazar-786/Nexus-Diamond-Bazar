/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {
    const nav = document.getElementById("navbar");

    if(nav){
        nav.classList.toggle("active");
    }
}

/* =====================================
   ORDER VARIABLES
===================================== */

let selectedItem = "";
let selectedPrice = 0;

/* =====================================
   START SHOP
===================================== */

function startShop() {

    const uid = document.getElementById("uid");

    if(!uid) return;

    if(uid.value.trim() === "") {

        alert("Please enter your Free Fire UID");
        return;

    }

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("packages").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("packages").offsetTop - 80,
        behavior: "smooth"
    });
}

/* =====================================
   PACKAGE SELECT
===================================== */

function selectItem(item, price, btn) {

    selectedItem = item;
    selectedPrice = price;

    document
    .querySelectorAll(".grid button")
    .forEach(button => {

        button.style.border = "1px solid #333";
        button.style.background = "#181818";
        button.style.color = "#fff";

    });

    document
    .querySelectorAll(".deal-card")
    .forEach(card => {

        card.classList.remove("selected");

    });

    if(btn.classList.contains("deal-card")){

        btn.classList.add("selected");

    }else{

        btn.style.border = "2px solid gold";
        btn.style.background = "gold";
        btn.style.color = "#000";

    }

    document.getElementById("sumUID").innerText =
    document.getElementById("uid").value;

    document.getElementById("sumItem").innerText =
    selectedItem;

    document.getElementById("sumPrice").innerText =
    "Rs " + selectedPrice;

    document
    .getElementById("summary")
    .classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("summary").offsetTop - 80,
        behavior: "smooth"
    });

}

/* =====================================
   GO PAYMENT
===================================== */

function goPayment() {

    if(selectedItem === "") {

        alert("Please select a package");
        return;

    }

    document
    .getElementById("payment")
    .classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("payment").offsetTop - 80,
        behavior: "smooth"
    });

}

/* =====================================
   WHATSAPP ORDER
===================================== */

function sendOrder() {

    const uid =
    document.getElementById("uid").value.trim();

    const transactionId =
    document.getElementById("paymentRef").value.trim();

    if(uid === "") {

        alert("UID is required");
        return;

    }

    if(selectedItem === "") {

        alert("Please select a package");
        return;

    }

    if(transactionId === "") {

        alert("Please enter Transaction ID");
        return;

    }

    const whatsappMessage =
`💎 NEXUS DIAMOND BAZAR ORDER

🎮 UID: ${uid}

📦 Package: ${selectedItem}

💰 Amount: Rs ${selectedPrice}

🧾 Transaction ID: ${transactionId}

✅ Please verify my payment and process my order.`;

    const whatsappNumber = "923222191701";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

}

/* =====================================
   CONTACT FORM WHATSAPP
===================================== */

function sendWhatsApp(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const subject =
    document.getElementById("subject").value;

    const message =
    document.getElementById("message").value;

    const whatsappText =
`📩 NEW CONTACT MESSAGE

👤 Name: ${name}

📧 Email: ${email}

📌 Subject: ${subject}

💬 Message:
${message}`;

    const whatsappNumber = "923222191701";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

    window.open(url, "_blank");

}

/* =====================================
   ENTER KEY SUPPORT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const uidInput =
    document.getElementById("uid");

    if(uidInput){

        uidInput.addEventListener("keypress", e => {

            if(e.key === "Enter"){

                startShop();

            }

        });

    }

});

/* =====================================
   AUTO CLOSE MOBILE MENU
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const links =
    document.querySelectorAll(".navbar a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            const nav =
            document.getElementById("navbar");

            if(nav){

                nav.classList.remove("active");

            }

        });

    });

});

/* =====================================
   SCROLL ANIMATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },{
        threshold:0.1
    });

    const elements =
    document.querySelectorAll(
    ".card, .about-card, .faq-card, .contact-card, .box, .deal-card"
    );

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all .6s ease";

        observer.observe(el);

    });

});