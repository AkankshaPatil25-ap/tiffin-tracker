// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const tableContainer = document.getElementById("tableContainer");
//     const generateTableBtn = document.getElementById("generateTable");

//     // Load customers into dropdown
//     const customers = JSON.parse(localStorage.getItem("customers")) || [];

//     function loadCustomers() {
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     // Populate month dropdown
//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1; // month number
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     // Populate year dropdown (last 10 years)
//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price boxes when customer is selected
//     customerSelect.addEventListener("change", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             priceBox.style.display = "block";
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             priceBox.style.display = "none";
//         }
//     });

//     // Generate table for selected month and year
//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);

//         if (selectedIndex === "" || !month || !year) {
//             alert("Please select customer, month, and year.");
//             return;
//         }

//         const cust = customers[selectedIndex];
//         const fullPrice = parseInt(cust.fullPrice);
//         const halfPrice = parseInt(cust.halfPrice);

//         const daysInMonth = new Date(year, month, 0).getDate();

//         let table = `<table border="1" cellspacing="0" cellpadding="5">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Day Full</th>
//                     <th>Day Half</th>
//                     <th>Night Full</th>
//                     <th>Night Half</th>
//                     <th>Total Quantity</th>
//                     <th>Total Amount</th>
//                 </tr>
//             </thead>
//             <tbody>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             let dayFull = 0;
//             let dayHalf = 0;
//             let nightFull = 0;
//             let nightHalf = 0;

//             const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//             const totalAmount = dayFull * fullPrice + dayHalf * halfPrice + nightFull * fullPrice + nightHalf * halfPrice;

//             table += `<tr>
//                 <td>${day}/${month}/${year}</td>
//                 <td>${dayFull}</td>
//                 <td>${dayHalf}</td>
//                 <td>${nightFull}</td>
//                 <td>${nightHalf}</td>
//                 <td>${totalQuantity}</td>
//                 <td>₹${totalAmount}</td>
//             </tr>`;
//         }

//         table += `</tbody></table>`;
//         tableContainer.innerHTML = table;
//     });

//     // Initial load
//     loadCustomers();
//     loadMonths();
//     loadYears();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber"); // new element to show mobile
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     // Populate month dropdown
//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1; // month number
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     // Populate year dropdown (last 10 years)
//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price and mobile when customer is selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile || "N/A";
//             priceBox.style.display = "block";
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = "";
//             priceBox.style.display = "none";
//         }
//     });

//     // Initial load
//     loadCustomers();
//     loadMonths();
//     loadYears();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber"); // mobile number element
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     // Populate months
//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     // Populate years (last 10)
//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price and mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile; // display admin-entered number
//             priceBox.style.display = "block";
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//         }
//     });

//     // Initial load
//     loadCustomers();
//     loadMonths();
//     loadYears();
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     // Populate months
//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     // Populate years (last 10)
//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price and mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile;
//             priceBox.style.display = "block";
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//         }
//         tableContainer.innerHTML = ""; // clear old table
//     });

//     // Generate table for selected month/year
//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") {
//             alert("Please select a customer first!");
//             return;
//         }

//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) {
//             alert("Please select month and year!");
//             return;
//         }

//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[selectedIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         // Build table
//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true"></td>
//                 <td contenteditable="true"></td>
//                 <td contenteditable="true"></td>
//                 <td contenteditable="true"></td>
//                 <td>0</td>
//                 <td>0</td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;
//     });

//     // Initial load
//     loadCustomers();
//     loadMonths();
//     loadYears();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     // Populate months
//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     // Populate years (last 10)
//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price and mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile;
//             priceBox.style.display = "block";

//             // Load saved table if exists
//             loadSavedTable(selectedIndex);
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//             tableContainer.innerHTML = "";
//         }
//     });

//     // Generate table for selected month/year
//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") {
//             alert("Please select a customer first!");
//             return;
//         }

//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) {
//             alert("Please select month and year!");
//             return;
//         }

//         generateTable(selectedIndex, month, year);
//     });

//     // Function to generate table
//     function generateTable(customerIndex, month, year) {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td>0</td>
//                 <td>0</td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         // Add event listeners for calculation and saving
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     // Add input listeners to calculate totals and save
//     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//         const table = tableContainer.querySelector("table");
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return;
//             const cells = row.querySelectorAll("td");
//             const quantityCells = [1,2,3,4];

//             quantityCells.forEach(i => {
//                 cells[i].addEventListener("input", () => {
//                     const dayFull = parseInt(cells[1].textContent) || 0;
//                     const dayHalf = parseInt(cells[2].textContent) || 0;
//                     const nightFull = parseInt(cells[3].textContent) || 0;
//                     const nightHalf = parseInt(cells[4].textContent) || 0;

//                     const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//                     const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;

//                     cells[5].textContent = totalQuantity;
//                     cells[6].textContent = totalAmount;

//                     saveTable(customerIndex, month, year);
//                 });
//             });
//         });
//     }

//     // Save table in localStorage
//     function saveTable(customerIndex, month, year) {
//         const tableData = [];
//         const table = tableContainer.querySelector("table");
//         if (!table) return;

//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return;
//             const cells = row.querySelectorAll("td");
//             tableData.push({
//                 date: cells[0].textContent,
//                 dayFull: cells[1].textContent,
//                 dayHalf: cells[2].textContent,
//                 nightFull: cells[3].textContent,
//                 nightHalf: cells[4].textContent,
//                 totalQuantity: cells[5].textContent,
//                 totalAmount: cells[6].textContent
//             });
//         });

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         if (!savedTables[customerIndex]) savedTables[customerIndex] = {};
//         savedTables[customerIndex][`${month}-${year}`] = tableData;
//         localStorage.setItem("tables", JSON.stringify(savedTables));
//     }

//     // Load saved table if exists
//     function loadSavedTable(customerIndex) {
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) return;

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
//         if (!tableData) return;

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//             </tr>`;

//         tableData.forEach(row => {
//             tableHTML += `<tr>
//                 <td>${row.date}</td>
//                 <td contenteditable="true">${row.dayFull}</td>
//                 <td contenteditable="true">${row.dayHalf}</td>
//                 <td contenteditable="true">${row.nightFull}</td>
//                 <td contenteditable="true">${row.nightHalf}</td>
//                 <td>${row.totalQuantity}</td>
//                 <td>${row.totalAmount}</td>
//             </tr>`;
//         });

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         // Re-attach listeners for calculation and saving
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     // Initial load
//     loadCustomers();
//     loadMonths();
//     loadYears();
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price & mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile;
//             priceBox.style.display = "block";
//             loadSavedTable(selectedIndex);
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//             tableContainer.innerHTML = "";
//         }
//     });

//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") return alert("Select customer first!");
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) return alert("Select month & year!");
//         generateTable(selectedIndex, month, year);
//     });

//     function generateTable(customerIndex, month, year) {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Notify</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>pending</td>
//                 <td><button class="notifyBtn">Send</button></td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//         const table = tableContainer.querySelector("table");
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return; // skip header
//             const cells = row.querySelectorAll("td");
//             const quantityCells = [1,2,3,4];
            
//             // Make row read-only if approved
//             if(cells[7].textContent === "approved") {
//                 quantityCells.forEach(i => cells[i].contentEditable = false);
//             } else {
//                 quantityCells.forEach(i => {
//                     cells[i].contentEditable = true;
//                     cells[i].addEventListener("input", () => {
//                         const dayFull = parseInt(cells[1].textContent) || 0;
//                         const dayHalf = parseInt(cells[2].textContent) || 0;
//                         const nightFull = parseInt(cells[3].textContent) || 0;
//                         const nightHalf = parseInt(cells[4].textContent) || 0;
//                         const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//                         const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//                         cells[5].textContent = totalQuantity;
//                         cells[6].textContent = totalAmount;
//                         saveTable(customerIndex, month, year);
//                     });
//                 });
//             }

//             // Notify button
//             const notifyBtn = cells[8].querySelector(".notifyBtn");
//             notifyBtn.addEventListener("click", () => {
//                 const customers = JSON.parse(localStorage.getItem("customers")) || [];
//                 const customer = customers[customerIndex];
                
//                 const msg = [
//                                `Hello ${customer.name}, please approve your tiffin order for ${cells[0].textContent}:`,
//                                `Day Full: ${cells[1].textContent}`,
//                                `Day Half: ${cells[2].textContent}`,
//                                `Night Full: ${cells[3].textContent}`,
//                                `Night Half: ${cells[4].textContent}`
//                                ].join('%0A'); // join each line with URL-encoded line break


//                 const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
//                 window.open(whatsappLink, "_blank");

//             });
//         });
//     }

//     function saveTable(customerIndex, month, year) {
//         const table = tableContainer.querySelector("table");
//         if(!table) return;
//         const tableData = [];
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if(index === 0) return;
//             const cells = row.querySelectorAll("td");
//             tableData.push({
//                 date: cells[0].textContent,
//                 dayFull: cells[1].textContent,
//                 dayHalf: cells[2].textContent,
//                 nightFull: cells[3].textContent,
//                 nightHalf: cells[4].textContent,
//                 totalQuantity: cells[5].textContent,
//                 totalAmount: cells[6].textContent,
//                 status: cells[7].textContent
//             });
//         });
//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
//         savedTables[customerIndex][`${month}-${year}`] = tableData;
//         localStorage.setItem("tables", JSON.stringify(savedTables));
//     }

//     function loadSavedTable(customerIndex) {
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if(!month || !year) return;

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
//         if(!tableData) return;

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Notify</th>
//             </tr>`;

//         tableData.forEach(row => {
//             tableHTML += `<tr>
//                 <td>${row.date}</td>
//                 <td contenteditable="true">${row.dayFull}</td>
//                 <td contenteditable="true">${row.dayHalf}</td>
//                 <td contenteditable="true">${row.nightFull}</td>
//                 <td contenteditable="true">${row.nightHalf}</td>
//                 <td>${row.totalQuantity}</td>
//                 <td>${row.totalAmount}</td>
//                 <td>${row.status}</td>
//                 <td><button class="notifyBtn">Send</button></td>
//             </tr>`;
//         });

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     loadCustomers();
//     loadMonths();
//     loadYears();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price & mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile || "N/A";
//             priceBox.style.display = "block";
//             loadSavedTable(selectedIndex);
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//             tableContainer.innerHTML = "";
//         }
//     });

//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") return alert("Select customer first!");
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) return alert("Select month & year!");
//         generateTable(selectedIndex, month, year);
//     });

//     function generateTable(customerIndex, month, year) {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>pending</td>
//                 <td>
//                     <button class="notifyBtn">Send</button>
//                     <button class="doneBtn">Done</button>
//                 </td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//         const table = tableContainer.querySelector("table");
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return; // skip header
//             const cells = row.querySelectorAll("td");
//             const quantityCells = [1,2,3,4];

//             // Make row read-only if approved
//             if(cells[7].textContent === "approved") {
//                 quantityCells.forEach(i => cells[i].contentEditable = false);
//             } else {
//                 quantityCells.forEach(i => {
//                     cells[i].contentEditable = true;
//                     cells[i].addEventListener("input", () => {
//                         const dayFull = parseInt(cells[1].textContent) || 0;
//                         const dayHalf = parseInt(cells[2].textContent) || 0;
//                         const nightFull = parseInt(cells[3].textContent) || 0;
//                         const nightHalf = parseInt(cells[4].textContent) || 0;
//                         const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//                         const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//                         cells[5].textContent = totalQuantity;
//                         cells[6].textContent = totalAmount;
//                         saveTable(customerIndex, month, year);
//                     });
//                 });
//             }

//             // Notify button
//             const notifyBtn = cells[8].querySelector(".notifyBtn");
//             notifyBtn.addEventListener("click", () => {
//                 const customers = JSON.parse(localStorage.getItem("customers")) || [];
//                 const customer = customers[customerIndex];
                
//                 const msg = [
//                     `Hello ${customer.name}, please approve your tiffin order for ${cells[0].textContent}:`,
//                     `Day Full: ${cells[1].textContent}`,
//                     `Day Half: ${cells[2].textContent}`,
//                     `Night Full: ${cells[3].textContent}`,
//                     `Night Half: ${cells[4].textContent}`
//                 ].join('%0A');

//                 const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
//                 window.open(whatsappLink, "_blank");
//             });

//             // Done button
//             const doneBtn = cells[8].querySelector(".doneBtn");
//             doneBtn.addEventListener("click", () => {
//                 cells[7].textContent = "approved";
//                 quantityCells.forEach(i => cells[i].contentEditable = false);
//                 saveTable(customerIndex, month, year);
//             });
//         });
//     }

//     function saveTable(customerIndex, month, year) {
//         const table = tableContainer.querySelector("table");
//         if(!table) return;
//         const tableData = [];
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if(index === 0) return;
//             const cells = row.querySelectorAll("td");
//             tableData.push({
//                 date: cells[0].textContent,
//                 dayFull: cells[1].textContent,
//                 dayHalf: cells[2].textContent,
//                 nightFull: cells[3].textContent,
//                 nightHalf: cells[4].textContent,
//                 totalQuantity: cells[5].textContent,
//                 totalAmount: cells[6].textContent,
//                 status: cells[7].textContent
//             });
//         });
//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
//         savedTables[customerIndex][`${month}-${year}`] = tableData;
//         localStorage.setItem("tables", JSON.stringify(savedTables));
//     }

//     function loadSavedTable(customerIndex) {
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if(!month || !year) return;

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
//         if(!tableData) return;

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//             </tr>`;

//         tableData.forEach(row => {
//             tableHTML += `<tr>
//                 <td>${row.date}</td>
//                 <td contenteditable="true">${row.dayFull}</td>
//                 <td contenteditable="true">${row.dayHalf}</td>
//                 <td contenteditable="true">${row.nightFull}</td>
//                 <td contenteditable="true">${row.nightHalf}</td>
//                 <td>${row.totalQuantity}</td>
//                 <td>${row.totalAmount}</td>
//                 <td>${row.status}</td>
//                 <td>
//                     <button class="notifyBtn">Send</button>
//                     <button class="doneBtn">Done</button>
//                 </td>
//             </tr>`;
//         });

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     loadCustomers();
//     loadMonths();
//     loadYears();
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile || "N/A";
//             priceBox.style.display = "block";
//             loadSavedTable(selectedIndex);
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//             tableContainer.innerHTML = "";
//         }
//     });

//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") return alert("Select customer first!");
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) return alert("Select month & year!");
//         generateTable(selectedIndex, month, year);
//     });

//     function generateTable(customerIndex, month, year) {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Notify</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>pending</td>
//                 <td><button class="notifyBtn">Send</button></td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//         const table = tableContainer.querySelector("table");
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return;
//             const cells = row.querySelectorAll("td");
//             const quantityCells = [1,2,3,4];

//             if(cells[7].textContent === "approved") {
//                 quantityCells.forEach(i => cells[i].contentEditable = false);
//             } else {
//                 quantityCells.forEach(i => {
//                     cells[i].contentEditable = true;
//                     cells[i].addEventListener("input", () => {
//                         const dayFull = parseInt(cells[1].textContent) || 0;
//                         const dayHalf = parseInt(cells[2].textContent) || 0;
//                         const nightFull = parseInt(cells[3].textContent) || 0;
//                         const nightHalf = parseInt(cells[4].textContent) || 0;
//                         const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//                         const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//                         cells[5].textContent = totalQuantity;
//                         cells[6].textContent = totalAmount;
//                         saveTable(customerIndex, month, year);
//                     });
//                 });
//             }

//             // Notify button opens WhatsApp with Done link
//             const notifyBtn = cells[8].querySelector(".notifyBtn");
//             notifyBtn.addEventListener("click", () => {
//                 const customers = JSON.parse(localStorage.getItem("customers")) || [];
//                 const customer = customers[customerIndex];

//                 const doneLink = `http://yourdomain.com/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${month}&year=${year}&row=${index}`;

//                 const msg = [
//                     `🍽️ Hello ${customer.name}, please approve your tiffin order for ${cells[0].textContent}:`,
//                     `Day Full: ${cells[1].textContent}`,
//                     `Day Half: ${cells[2].textContent}`,
//                     `Night Full: ${cells[3].textContent}`,
//                     `Night Half: ${cells[4].textContent}`,
//                     `Click here when done: ${doneLink}`
//                 ].join('%0A');

//                 const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
//                 window.open(whatsappLink, "_blank");
//             });
//         });
//     }

//     function saveTable(customerIndex, month, year) {
//         const table = tableContainer.querySelector("table");
//         if(!table) return;
//         const tableData = [];
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if(index === 0) return;
//             const cells = row.querySelectorAll("td");
//             tableData.push({
//                 date: cells[0].textContent,
//                 dayFull: cells[1].textContent,
//                 dayHalf: cells[2].textContent,
//                 nightFull: cells[3].textContent,
//                 nightHalf: cells[4].textContent,
//                 totalQuantity: cells[5].textContent,
//                 totalAmount: cells[6].textContent,
//                 status: cells[7].textContent
//             });
//         });
//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
//         savedTables[customerIndex][`${month}-${year}`] = tableData;
//         localStorage.setItem("tables", JSON.stringify(savedTables));
//     }

//     function loadSavedTable(customerIndex) {
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if(!month || !year) return;

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
//         if(!tableData) return;

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Notify</th>
//             </tr>`;

//         tableData.forEach((row, idx) => {
//             tableHTML += `<tr>
//                 <td>${row.date}</td>
//                 <td contenteditable="true">${row.dayFull}</td>
//                 <td contenteditable="true">${row.dayHalf}</td>
//                 <td contenteditable="true">${row.nightFull}</td>
//                 <td contenteditable="true">${row.nightHalf}</td>
//                 <td>${row.totalQuantity}</td>
//                 <td>${row.totalAmount}</td>
//                 <td>${row.status}</td>
//                 <td><button class="notifyBtn">Send</button></td>
//             </tr>`;
//         });

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     loadCustomers();
//     loadMonths();
//     loadYears();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const customerSelect = document.getElementById("customerSelect");
//     const fullPriceEl = document.getElementById("fullPrice");
//     const halfPriceEl = document.getElementById("halfPrice");
//     const mobileEl = document.getElementById("mobileNumber");
//     const priceBox = document.getElementById("priceBox");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearSelect = document.getElementById("yearSelect");
//     const generateTableBtn = document.getElementById("generateTable");
//     const tableContainer = document.getElementById("tableContainer");

//     // Load customers into dropdown
//     function loadCustomers() {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//         customers.forEach((cust, index) => {
//             const option = document.createElement("option");
//             option.value = index;
//             option.textContent = cust.name;
//             customerSelect.appendChild(option);
//         });
//     }

//     function loadMonths() {
//         const months = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         months.forEach((month, index) => {
//             const option = document.createElement("option");
//             option.value = index + 1;
//             option.textContent = month;
//             monthSelect.appendChild(option);
//         });
//     }

//     function loadYears() {
//         const currentYear = new Date().getFullYear();
//         for (let i = currentYear; i >= currentYear - 10; i--) {
//             const option = document.createElement("option");
//             option.value = i;
//             option.textContent = i;
//             yearSelect.appendChild(option);
//         }
//     }

//     // Show price & mobile when customer selected
//     customerSelect.addEventListener("change", () => {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex !== "") {
//             const selectedCustomer = customers[selectedIndex];
//             fullPriceEl.textContent = selectedCustomer.fullPrice;
//             halfPriceEl.textContent = selectedCustomer.halfPrice;
//             mobileEl.textContent = selectedCustomer.mobile || "N/A";
//             priceBox.style.display = "block";
//             loadSavedTable(selectedIndex);
//         } else {
//             fullPriceEl.textContent = 0;
//             halfPriceEl.textContent = 0;
//             mobileEl.textContent = 0;
//             priceBox.style.display = "none";
//             tableContainer.innerHTML = "";
//         }
//     });

//     generateTableBtn.addEventListener("click", () => {
//         const selectedIndex = customerSelect.value;
//         if (selectedIndex === "") return alert("Select customer first!");
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if (!month || !year) return alert("Select month & year!");
//         generateTable(selectedIndex, month, year);
//     });

//     function generateTable(customerIndex, month, year) {
//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         const daysInMonth = new Date(year, month, 0).getDate();

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//             </tr>`;

//         for (let day = 1; day <= daysInMonth; day++) {
//             tableHTML += `<tr>
//                 <td>${day}-${month}-${year}</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td contenteditable="true">0</td>
//                 <td>0</td>
//                 <td>0</td>
//                 <td>pending</td>
//                 <td>
//                     <button class="notifyBtn">Send</button>
//                 </td>
//             </tr>`;
//         }

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//         const table = tableContainer.querySelector("table");
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if (index === 0) return; // skip header
//             const cells = row.querySelectorAll("td");
//             const quantityCells = [1,2,3,4];

//             // Make row read-only if approved
//             if(cells[7].textContent === "approved") {
//                 quantityCells.forEach(i => cells[i].contentEditable = false);
//             } else {
//                 quantityCells.forEach(i => {
//                     cells[i].contentEditable = true;
//                     cells[i].addEventListener("input", () => {
//                         const dayFull = parseInt(cells[1].textContent) || 0;
//                         const dayHalf = parseInt(cells[2].textContent) || 0;
//                         const nightFull = parseInt(cells[3].textContent) || 0;
//                         const nightHalf = parseInt(cells[4].textContent) || 0;
//                         const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//                         const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//                         cells[5].textContent = totalQuantity;
//                         cells[6].textContent = totalAmount;
//                         saveTable(customerIndex, month, year);
//                     });
//                 });
//             }

//             // Notify button
//             const notifyBtn = cells[8].querySelector(".notifyBtn");
//             notifyBtn.addEventListener("click", () => {
//                 const customers = JSON.parse(localStorage.getItem("customers")) || [];
//                 const customer = customers[customerIndex];

//                 // Use host for proper HTTP link
//                 const host = window.location.origin;
//                 const approveURL = `${host}/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${monthSelect.value}&year=${yearSelect.value}&row=${index}`;

//                 const msg = [
//                     `Hello ${customer.name}, please approve your tiffin order for ${cells[0].textContent}:`,
//                     `Day Full: ${cells[1].textContent}`,
//                     `Day Half: ${cells[2].textContent}`,
//                     `Night Full: ${cells[3].textContent}`,
//                     `Night Half: ${cells[4].textContent}`,
//                     `Approve here: ${approveURL}`
//                 ].join('%0A'); // line breaks

//                 const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
//                 window.open(whatsappLink, "_blank");
//             });
//         });
//     }

//     function saveTable(customerIndex, month, year) {
//         const table = tableContainer.querySelector("table");
//         if(!table) return;
//         const tableData = [];
//         table.querySelectorAll("tr").forEach((row, index) => {
//             if(index === 0) return;
//             const cells = row.querySelectorAll("td");
//             tableData.push({
//                 date: cells[0].textContent,
//                 dayFull: cells[1].textContent,
//                 dayHalf: cells[2].textContent,
//                 nightFull: cells[3].textContent,
//                 nightHalf: cells[4].textContent,
//                 totalQuantity: cells[5].textContent,
//                 totalAmount: cells[6].textContent,
//                 status: cells[7].textContent
//             });
//         });
//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
//         savedTables[customerIndex][`${month}-${year}`] = tableData;
//         localStorage.setItem("tables", JSON.stringify(savedTables));
//     }

//     function loadSavedTable(customerIndex) {
//         const month = parseInt(monthSelect.value);
//         const year = parseInt(yearSelect.value);
//         if(!month || !year) return;

//         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
//         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
//         if(!tableData) return;

//         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//             <tr>
//                 <th>Date</th>
//                 <th>Day Full</th>
//                 <th>Day Half</th>
//                 <th>Night Full</th>
//                 <th>Night Half</th>
//                 <th>Total Quantity</th>
//                 <th>Total Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//             </tr>`;

//         tableData.forEach(row => {
//             tableHTML += `<tr>
//                 <td>${row.date}</td>
//                 <td contenteditable="true">${row.dayFull}</td>
//                 <td contenteditable="true">${row.dayHalf}</td>
//                 <td contenteditable="true">${row.nightFull}</td>
//                 <td contenteditable="true">${row.nightHalf}</td>
//                 <td>${row.totalQuantity}</td>
//                 <td>${row.totalAmount}</td>
//                 <td>${row.status}</td>
//                 <td><button class="notifyBtn">Send</button></td>
//             </tr>`;
//         });

//         tableHTML += `</table>`;
//         tableContainer.innerHTML = tableHTML;

//         const customers = JSON.parse(localStorage.getItem("customers")) || [];
//         const customer = customers[customerIndex];
//         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
//     }

//     loadCustomers();
//     loadMonths();
//     loadYears();
// });


document.addEventListener("DOMContentLoaded", () => {
    const customerSelect = document.getElementById("customerSelect");
    const fullPriceEl = document.getElementById("fullPrice");
    const halfPriceEl = document.getElementById("halfPrice");
    const mobileEl = document.getElementById("mobileNumber");
    const priceBox = document.getElementById("priceBox");
    const monthSelect = document.getElementById("monthSelect");
    const yearSelect = document.getElementById("yearSelect");
    const generateTableBtn = document.getElementById("generateTable");
    const tableContainer = document.getElementById("tableContainer");

    // Load customers into dropdown
    function loadCustomers() {
        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
        customers.forEach((cust, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = cust.name;
            customerSelect.appendChild(option);
        });
    }

    function loadMonths() {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        months.forEach((month, index) => {
            const option = document.createElement("option");
            option.value = index + 1;
            option.textContent = month;
            monthSelect.appendChild(option);
        });
    }

    function loadYears() {
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 10; i--) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    // Show price & mobile when customer selected
    customerSelect.addEventListener("change", () => {
        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        const selectedIndex = customerSelect.value;
        if (selectedIndex !== "") {
            const selectedCustomer = customers[selectedIndex];
            fullPriceEl.textContent = selectedCustomer.fullPrice;
            halfPriceEl.textContent = selectedCustomer.halfPrice;
            mobileEl.textContent = selectedCustomer.mobile || "N/A";
            priceBox.style.display = "block";
            loadSavedTable(selectedIndex);
        } else {
            fullPriceEl.textContent = 0;
            halfPriceEl.textContent = 0;
            mobileEl.textContent = 0;
            priceBox.style.display = "none";
            tableContainer.innerHTML = "";
        }
    });

    generateTableBtn.addEventListener("click", () => {
        const selectedIndex = customerSelect.value;
        if (selectedIndex === "") return alert("Select customer first!");
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearSelect.value);
        if (!month || !year) return alert("Select month & year!");
        generateTable(selectedIndex, month, year);
    });

    function generateTable(customerIndex, month, year) {
        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        const customer = customers[customerIndex];
        const daysInMonth = new Date(year, month, 0).getDate();

        let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
                <th>Date</th>
                <th>Day Full</th>
                <th>Day Half</th>
                <th>Night Full</th>
                <th>Night Half</th>
                <th>Total Quantity</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>`;

        for (let day = 1; day <= daysInMonth; day++) {
            tableHTML += `<tr>
                <td>${day}-${month}-${year}</td>
                <td contenteditable="true">0</td>
                <td contenteditable="true">0</td>
                <td contenteditable="true">0</td>
                <td contenteditable="true">0</td>
                <td>0</td>
                <td>0</td>
                <td>pending</td>
                <td>
                    <button class="notifyBtn">Send</button>
                </td>
            </tr>`;
        }

        tableHTML += `</table>`;
        tableContainer.innerHTML = tableHTML;
        addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
    }

    function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
        const table = tableContainer.querySelector("table");
        table.querySelectorAll("tr").forEach((row, index) => {
            if (index === 0) return; // skip header
            const cells = row.querySelectorAll("td");
            const quantityCells = [1,2,3,4];

            // Make row read-only if approved
            if(cells[7].textContent === "approved") {
                quantityCells.forEach(i => cells[i].contentEditable = false);
            } else {
                quantityCells.forEach(i => {
                    cells[i].contentEditable = true;
                    cells[i].addEventListener("input", () => {
                        const dayFull = parseInt(cells[1].textContent) || 0;
                        const dayHalf = parseInt(cells[2].textContent) || 0;
                        const nightFull = parseInt(cells[3].textContent) || 0;
                        const nightHalf = parseInt(cells[4].textContent) || 0;
                        const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
                        const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
                        cells[5].textContent = totalQuantity;
                        cells[6].textContent = totalAmount;
                        saveTable(customerIndex, month, year);
                    });
                });
            }

            // Notify button
            const notifyBtn = cells[8].querySelector(".notifyBtn");
            notifyBtn.addEventListener("click", () => {
                const customers = JSON.parse(localStorage.getItem("customers")) || [];
                const customer = customers[customerIndex];

                // Use host for proper HTTP link
                // const host = window.location.origin; // e.g., http://127.0.0.1:5500
                // const approveURL = `${host}/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${monthSelect.value}&year=${yearSelect.value}&row=${index}`;
                const host = "https://yourproject.netlify.app"; // your actual Netlify URL
const approveURL = `${host}/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${monthSelect.value}&year=${yearSelect.value}&row=${index}`;

                const msg = [
                    `Hello ${customer.name}, please approve your tiffin order for ${cells[0].textContent}:`,
                    `Day Full: ${cells[1].textContent}`,
                    `Day Half: ${cells[2].textContent}`,
                    `Night Full: ${cells[3].textContent}`,
                    `Night Half: ${cells[4].textContent}`,
                    ``,
                    `✅ Click here to approve: ${approveURL}`
                ].join('%0A'); // line breaks

                const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
                window.open(whatsappLink, "_blank");
            });
        });
    }

    function saveTable(customerIndex, month, year) {
        const table = tableContainer.querySelector("table");
        if(!table) return;
        const tableData = [];
        table.querySelectorAll("tr").forEach((row, index) => {
            if(index === 0) return;
            const cells = row.querySelectorAll("td");
            tableData.push({
                date: cells[0].textContent,
                dayFull: cells[1].textContent,
                dayHalf: cells[2].textContent,
                nightFull: cells[3].textContent,
                nightHalf: cells[4].textContent,
                totalQuantity: cells[5].textContent,
                totalAmount: cells[6].textContent,
                status: cells[7].textContent
            });
        });
        const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
        if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
        savedTables[customerIndex][`${month}-${year}`] = tableData;
        localStorage.setItem("tables", JSON.stringify(savedTables));
    }

    function loadSavedTable(customerIndex) {
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearSelect.value);
        if(!month || !year) return;

        const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
        const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
        if(!tableData) return;

        let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
                <th>Date</th>
                <th>Day Full</th>
                <th>Day Half</th>
                <th>Night Full</th>
                <th>Night Half</th>
                <th>Total Quantity</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>`;

        tableData.forEach(row => {
            tableHTML += `<tr>
                <td>${row.date}</td>
                <td contenteditable="true">${row.dayFull}</td>
                <td contenteditable="true">${row.dayHalf}</td>
                <td contenteditable="true">${row.nightFull}</td>
                <td contenteditable="true">${row.nightHalf}</td>
                <td>${row.totalQuantity}</td>
                <td>${row.totalAmount}</td>
                <td>${row.status}</td>
                <td><button class="notifyBtn">Send</button></td>
            </tr>`;
        });

        tableHTML += `</table>`;
        tableContainer.innerHTML = tableHTML;

        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        const customer = customers[customerIndex];
        addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
    }

    loadCustomers();
    loadMonths();
    loadYears();
});
