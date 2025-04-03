document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtns = document.querySelectorAll(".decrease");
    const increaseBtns = document.querySelectorAll(".increase");
    const qtyInputs = document.querySelectorAll(".qty");
    const priceElems = document.querySelectorAll(".price");
    const totalElems = document.querySelectorAll(".total");
    const subtotalElem = document.getElementById("subtotal");
    const totalCostElem = document.getElementById("total-cost");
    const shippingElem = document.getElementById("shipping");

    function updateTotal() {
        let subtotal = 0;
        qtyInputs.forEach((input, index) => {
            const qty = parseInt(input.value);
            const price = parseFloat(priceElems[index].innerText.replace("£", ""));
            const total = qty * price;
            totalElems[index].innerText = `£${total.toFixed(2)}`;
            subtotal += total;
        });

        subtotalElem.innerText = `£${subtotal.toFixed(2)}`;
        totalCostElem.innerText = `£${(subtotal + parseFloat(shippingElem.value)).toFixed(2)}`;
    }

    decreaseBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (qtyInputs[index].value > 1) {
                qtyInputs[index].value--;
                updateTotal();
            }
        });
    });

    increaseBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            qtyInputs[index].value++;
            updateTotal();
        });
    });

    shippingElem.addEventListener("change", updateTotal);

    updateTotal();
});

