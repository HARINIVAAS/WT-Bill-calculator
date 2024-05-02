const clothingItems = {
    "T-Shirt": 500,
    "Jeans": 1500,
    "Sneakers": 2000,
    "Shorts": 800,
    "Shirts": 1000
};

function createItemButtons() {
    const itemsDiv = document.getElementById("items");
    for (let item in clothingItems) {
        const container = document.createElement("div");
        container.classList.add("itemContainer");

        container.innerHTML = `
            <span>${item}</span>
            <input type="number" min="0" value="0" class="quantityInput">
            <span>₹${clothingItems[item].toFixed(2)}</span>
        `;

        itemsDiv.appendChild(container);
    }
}

function calculateTotal() {
    const totalAmountSpan = document.getElementById("totalAmount");
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value);
        total += quantity * clothingItems[item];
    });

    totalAmountSpan.textContent = `₹${total.toFixed(2)}`;
}

function generateBill() {
    let bill = "Men's Clothing Store Bill:\n";
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value);
        if (quantity > 0) {
            const itemPrice = clothingItems[item];
            const subtotal = quantity * itemPrice;
            bill += `${item}: ${quantity} x ₹${itemPrice.toFixed(2)} = ₹${subtotal.toFixed(2)}\n`;
            total += subtotal;
        }
    });

    bill += `Total: ₹${total.toFixed(2)}`;
    alert(bill);
}

window.onload = createItemButtons;
