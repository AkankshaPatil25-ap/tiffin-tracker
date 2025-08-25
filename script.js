// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("customerForm");
//     const customerList = document.getElementById("customerList");

//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerList.innerHTML = "";
//         customers.forEach(cust => {
//             const li = document.createElement("li");
//             li.textContent = `${cust.name} (Full: ₹${cust.fullPrice}, Half: ₹${cust.halfPrice})`;
//             customerList.appendChild(li);
//         });
//     }

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const name = document.getElementById("customerName").value;
//         const fullPrice = document.getElementById("fullPrice").value;
//         const halfPrice = document.getElementById("halfPrice").value;

//         let customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customers.push({ name, fullPrice, halfPrice });
//         localStorage.setItem("customers", JSON.stringify(customers));

//         form.reset();
//         loadCustomers();
//     });

//     loadCustomers();
// });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customerForm");
    const customerList = document.getElementById("customerList");

    function loadCustomers() {
        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        customerList.innerHTML = "";
        customers.forEach(cust => {
            const li = document.createElement("li");
            li.textContent = `${cust.name} (Full: ₹${cust.fullPrice}, Half: ₹${cust.halfPrice}, Mobile: ${cust.mobile || 'N/A'})`;
            customerList.appendChild(li);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("customerName").value;
        const fullPrice = document.getElementById("fullPrice").value;
        const halfPrice = document.getElementById("halfPrice").value;
        const mobile = document.getElementById("customerMobile").value; // added mobile number

        let customers = JSON.parse(localStorage.getItem("customers")) || [];
        customers.push({ 
            id: Date.now(),         // unique ID for each customer
            name, 
            fullPrice, 
            halfPrice, 
            mobile,                 // save mobile number
            deviceToken: ""         // for push notifications (empty initially)
        });
        localStorage.setItem("customers", JSON.stringify(customers));

        form.reset();
        loadCustomers();
    });

    loadCustomers();
});

