// // document.addEventListener("DOMContentLoaded", () => {
// //     const customerSelect = document.getElementById("customerSelect");
// //     const fullPriceEl = document.getElementById("fullPrice");
// //     const halfPriceEl = document.getElementById("halfPrice");
// //     const mobileEl = document.getElementById("mobileNumber");
// //     const priceBox = document.getElementById("priceBox");
// //     const monthSelect = document.getElementById("monthSelect");
// //     const yearSelect = document.getElementById("yearSelect");
// //     const generateTableBtn = document.getElementById("generateTable");
// //     const tableContainer = document.getElementById("tableContainer");

// //     // Load customers into dropdown
// //     function loadCustomers() {
// //         const customers = JSON.parse(localStorage.getItem("customers")) || [];
// //         customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
// //         customers.forEach((cust, index) => {
// //             const option = document.createElement("option");
// //             option.value = index;
// //             option.textContent = cust.name;
// //             customerSelect.appendChild(option);
// //         });
// //     }

// //     function loadMonths() {
// //         const months = [
// //             "January", "February", "March", "April", "May", "June",
// //             "July", "August", "September", "October", "November", "December"
// //         ];
// //         months.forEach((month, index) => {
// //             const option = document.createElement("option");
// //             option.value = index + 1;
// //             option.textContent = month;
// //             monthSelect.appendChild(option);
// //         });
// //     }

// //     function loadYears() {
// //         const currentYear = new Date().getFullYear();
// //         for (let i = currentYear; i >= currentYear - 10; i--) {
// //             const option = document.createElement("option");
// //             option.value = i;
// //             option.textContent = i;
// //             yearSelect.appendChild(option);
// //         }
// //     }

// //     // Show price & mobile when customer selected
// //     customerSelect.addEventListener("change", () => {
// //         const customers = JSON.parse(localStorage.getItem("customers")) || [];
// //         const selectedIndex = customerSelect.value;
// //         if (selectedIndex !== "") {
// //             const selectedCustomer = customers[selectedIndex];
// //             fullPriceEl.textContent = selectedCustomer.fullPrice;
// //             halfPriceEl.textContent = selectedCustomer.halfPrice;
// //             mobileEl.textContent = selectedCustomer.mobile || "N/A";
// //             priceBox.style.display = "block";
// //             loadSavedTable(selectedIndex);
// //         } else {
// //             fullPriceEl.textContent = 0;
// //             halfPriceEl.textContent = 0;
// //             mobileEl.textContent = 0;
// //             priceBox.style.display = "none";
// //             tableContainer.innerHTML = "";
// //         }
// //     });

// //     generateTableBtn.addEventListener("click", () => {
// //         const selectedIndex = customerSelect.value;
// //         if (selectedIndex === "") return alert("Select customer first!");
// //         const month = parseInt(monthSelect.value);
// //         const year = parseInt(yearSelect.value);
// //         if (!month || !year) return alert("Select month & year!");
// //         generateTable(selectedIndex, month, year);
// //     });

// //     function generateTable(customerIndex, month, year) {
// //         const customers = JSON.parse(localStorage.getItem("customers")) || [];
// //         const customer = customers[customerIndex];
// //         const daysInMonth = new Date(year, month, 0).getDate();

// //         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
// //             <tr>
// //                 <th>Date</th>
// //                 <th>Day Full</th>
// //                 <th>Day Half</th>
// //                 <th>Night Full</th>
// //                 <th>Night Half</th>
// //                 <th>Total Quantity</th>
// //                 <th>Total Amount</th>
// //                 <th>Status</th>
// //                 <th>Actions</th>
// //             </tr>`;

// //         for (let day = 1; day <= daysInMonth; day++) {
// //             tableHTML += `<tr>
// //                 <td>${day}-${month}-${year}</td>
// //                 <td contenteditable="true">0</td>
// //                 <td contenteditable="true">0</td>
// //                 <td contenteditable="true">0</td>
// //                 <td contenteditable="true">0</td>
// //                 <td>0</td>
// //                 <td>0</td>
// //                 <td>pending</td>
// //                 <td>
// //                     <button class="notifyBtn">Send</button>
// //                 </td>
// //             </tr>`;
// //         }

// //         tableHTML += `</table>`;
// //         tableContainer.innerHTML = tableHTML;
// //         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
// //     }

// //     function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
// //         const table = tableContainer.querySelector("table");
// //         table.querySelectorAll("tr").forEach((row, index) => {
// //             if (index === 0) return; // skip header
// //             const cells = row.querySelectorAll("td");
// //             const quantityCells = [1,2,3,4];

// //             // Make row read-only if approved
// //             if(cells[7].textContent === "approved") {
// //                 quantityCells.forEach(i => cells[i].contentEditable = false);
// //             } else {
// //                 quantityCells.forEach(i => {
// //                     cells[i].contentEditable = true;
// //                     cells[i].addEventListener("input", () => {
// //                         const dayFull = parseInt(cells[1].textContent) || 0;
// //                         const dayHalf = parseInt(cells[2].textContent) || 0;
// //                         const nightFull = parseInt(cells[3].textContent) || 0;
// //                         const nightHalf = parseInt(cells[4].textContent) || 0;
// //                         const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
// //                         const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
// //                         cells[5].textContent = totalQuantity;
// //                         cells[6].textContent = totalAmount;
// //                         saveTable(customerIndex, month, year);
// //                     });
// //                 });
// //             }

// //             // Notify button
// //             const notifyBtn = cells[8].querySelector(".notifyBtn");
// //             notifyBtn.addEventListener("click", () => {
// //                 const customers = JSON.parse(localStorage.getItem("customers")) || [];
// //                 const customer = customers[customerIndex];

// //                 // Use host for proper HTTP link
// //                 // const host = window.location.origin; // e.g., http://127.0.0.1:5500
// //                 // const approveURL = `${host}/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${monthSelect.value}&year=${yearSelect.value}&row=${index}`;
// //                 const host = "https://tiffintrackerapp.netlify.app"; // your actual Netlify URL
// // const approveURL = `${host}/approve.html?customer=${customerIndex}&date=${cells[0].textContent}&month=${monthSelect.value}&year=${yearSelect.value}&row=${index}`;

// //                 const msg = [
// //                     `Hello ${customer.name}, your tiffin order for ${cells[0].textContent}:`,
// //                     `Day Full: ${cells[1].textContent}`,
// //                     `Day Half: ${cells[2].textContent}`,
// //                     `Night Full: ${cells[3].textContent}`,
// //                     `Night Half: ${cells[4].textContent}`,
// //                     ``,`Successfully Delivered`
            
// //                 ].join('%0A'); // line breaks

// //                 const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
// //                 window.open(whatsappLink, "_blank");
// //             });
// //         });
// //     }

// //     function saveTable(customerIndex, month, year) {
// //         const table = tableContainer.querySelector("table");
// //         if(!table) return;
// //         const tableData = [];
// //         table.querySelectorAll("tr").forEach((row, index) => {
// //             if(index === 0) return;
// //             const cells = row.querySelectorAll("td");
// //             tableData.push({
// //                 date: cells[0].textContent,
// //                 dayFull: cells[1].textContent,
// //                 dayHalf: cells[2].textContent,
// //                 nightFull: cells[3].textContent,
// //                 nightHalf: cells[4].textContent,
// //                 totalQuantity: cells[5].textContent,
// //                 totalAmount: cells[6].textContent,
// //                 status: cells[7].textContent
// //             });
// //         });
// //         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
// //         if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
// //         savedTables[customerIndex][`${month}-${year}`] = tableData;
// //         localStorage.setItem("tables", JSON.stringify(savedTables));
// //     }

// //     function loadSavedTable(customerIndex) {
// //         const month = parseInt(monthSelect.value);
// //         const year = parseInt(yearSelect.value);
// //         if(!month || !year) return;

// //         const savedTables = JSON.parse(localStorage.getItem("tables")) || {};
// //         const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
// //         if(!tableData) return;

// //         let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
// //             <tr>
// //                 <th>Date</th>
// //                 <th>Day Full</th>
// //                 <th>Day Half</th>
// //                 <th>Night Full</th>
// //                 <th>Night Half</th>
// //                 <th>Total Quantity</th>
// //                 <th>Total Amount</th>
                
// //                 <th>Actions</th>
// //             </tr>`;

// //         tableData.forEach(row => {
// //             tableHTML += `<tr>
// //                 <td>${row.date}</td>
// //                 <td contenteditable="true">${row.dayFull}</td>
// //                 <td contenteditable="true">${row.dayHalf}</td>
// //                 <td contenteditable="true">${row.nightFull}</td>
// //                 <td contenteditable="true">${row.nightHalf}</td>
// //                 <td>${row.totalQuantity}</td>
// //                 <td>${row.totalAmount}</td>
                
// //                 <td><button class="notifyBtn">Send</button></td>
// //             </tr>`;
// //         });

// //         tableHTML += `</table>`;
// //         tableContainer.innerHTML = tableHTML;

// //         const customers = JSON.parse(localStorage.getItem("customers")) || [];
// //         const customer = customers[customerIndex];
// //         addTableListeners(customerIndex, month, year, customer.fullPrice, customer.halfPrice);
// //     }

// //     loadCustomers();
// //     loadMonths();
// //     loadYears();
// // });


// document.addEventListener("DOMContentLoaded", () => {
//   const customerSelect = document.getElementById("customerSelect");
//   const fullPriceEl = document.getElementById("fullPrice");
//   const halfPriceEl = document.getElementById("halfPrice");
//   const mobileEl = document.getElementById("mobileNumber");
//   const priceBox = document.getElementById("priceBox");
//   const monthSelect = document.getElementById("monthSelect");
//   const yearSelect = document.getElementById("yearSelect");
//   const generateTableBtn = document.getElementById("generateTable");
//   const tableContainer = document.getElementById("tableContainer");
//   const paymentContainer = document.getElementById("paymentContainer");

//   // ---- helpers for storage ----
//   const TABLES_KEY = "tables";
//   const PAYMENTS_KEY = "payments"; // { [custIdx]: { ["m-y"]: { [dateStr]: true/false } } }

//   const getCustomers = () => JSON.parse(localStorage.getItem("customers")) || [];

//   const getPaymentsMap = (custIdx, key) => {
//     const all = JSON.parse(localStorage.getItem(PAYMENTS_KEY)) || {};
//     return (all[custIdx] && all[custIdx][key]) ? all[custIdx][key] : {};
//   };

//   const setPaymentFlag = (custIdx, key, dateStr, paid) => {
//     const all = JSON.parse(localStorage.getItem(PAYMENTS_KEY)) || {};
//     if (!all[custIdx]) all[custIdx] = {};
//     if (!all[custIdx][key]) all[custIdx][key] = {};
//     all[custIdx][key][dateStr] = paid;
//     localStorage.setItem(PAYMENTS_KEY, JSON.stringify(all));
//   };

//   // ---- existing: load customers dropdown ----
//   function loadCustomers() {
//     const customers = getCustomers();
//     customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
//     customers.forEach((cust, index) => {
//       const option = document.createElement("option");
//       option.value = index;
//       option.textContent = cust.name;
//       customerSelect.appendChild(option);
//     });
//   }

//   // ---- existing: months/years ----
//   function loadMonths() {
//     const months = [
//       "January","February","March","April","May","June",
//       "July","August","September","October","November","December"
//     ];
//     months.forEach((month, index) => {
//       const option = document.createElement("option");
//       option.value = index + 1;
//       option.textContent = month;
//       monthSelect.appendChild(option);
//     });
//   }

//   function loadYears() {
//     const currentYear = new Date().getFullYear();
//     for (let i = currentYear; i >= currentYear - 10; i--) {
//       const option = document.createElement("option");
//       option.value = i;
//       option.textContent = i;
//       yearSelect.appendChild(option);
//     }
//   }

//   // ---- existing: on customer change ----
//   customerSelect.addEventListener("change", () => {
//     const customers = getCustomers();
//     const selectedIndex = customerSelect.value;
//     if (selectedIndex !== "") {
//       const selectedCustomer = customers[selectedIndex];
//       fullPriceEl.textContent = selectedCustomer.fullPrice;
//       halfPriceEl.textContent = selectedCustomer.halfPrice;
//       mobileEl.textContent = selectedCustomer.mobile || "N/A";
//       priceBox.style.display = "block";
//       loadSavedTable(selectedIndex);
//       // also rebuild payment table if a saved main table exists
//       rebuildPaymentTable(Number(selectedIndex), parseInt(monthSelect.value), parseInt(yearSelect.value));
//     } else {
//       fullPriceEl.textContent = 0;
//       halfPriceEl.textContent = 0;
//       mobileEl.textContent = 0;
//       priceBox.style.display = "none";
//       tableContainer.innerHTML = "";
//       paymentContainer.innerHTML = "";
//     }
//   });

//   // ---- existing: generate main table ----
//   generateTableBtn.addEventListener("click", () => {
//     const selectedIndex = customerSelect.value;
//     if (selectedIndex === "") return alert("Select customer first!");
//     const month = parseInt(monthSelect.value);
//     const year = parseInt(yearSelect.value);
//     if (!month || !year) return alert("Select month & year!");
//     generateTable(selectedIndex, month, year);
//   });

//   function generateTable(customerIndex, month, year) {
//     const customers = getCustomers();
//     const customer = customers[customerIndex];
//     const daysInMonth = new Date(year, month, 0).getDate();

//     let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//       <tr>
//         <th>Date</th>
//         <th>Day Full</th>
//         <th>Day Half</th>
//         <th>Night Full</th>
//         <th>Night Half</th>
//         <th>Total Quantity</th>
//         <th>Total Amount</th>
//         <th>Status</th>
//         <th>Actions</th>
//       </tr>`;

//     for (let day = 1; day <= daysInMonth; day++) {
//       tableHTML += `<tr>
//         <td>${day}-${month}-${year}</td>
//         <td contenteditable="true">0</td>
//         <td contenteditable="true">0</td>
//         <td contenteditable="true">0</td>
//         <td contenteditable="true">0</td>
//         <td>0</td>
//         <td>0</td>
//         <td>pending</td>
//         <td><button class="notifyBtn">Send</button></td>
//       </tr>`;
//     }

//     tableHTML += `</table>`;
//     tableContainer.innerHTML = tableHTML;

//     addTableListeners(customerIndex, month, year, Number(customer.fullPrice), Number(customer.halfPrice));

//     // Build payment table right after generating main table
//     rebuildPaymentTable(Number(customerIndex), month, year);
//   }

//   // ---- existing: listeners for main table + save ----
//   function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
//     const table = tableContainer.querySelector("table");
//     table.querySelectorAll("tr").forEach((row, index) => {
//       if (index === 0) return; // skip header
//       const cells = row.querySelectorAll("td");
//       const quantityCells = [1,2,3,4];

//       // lock if approved (kept from your code)
//       if(cells[7].textContent === "approved") {
//         quantityCells.forEach(i => cells[i].contentEditable = false);
//       } else {
//         quantityCells.forEach(i => {
//           cells[i].contentEditable = true;
//           cells[i].addEventListener("input", () => {
//             const dayFull = parseInt(cells[1].textContent) || 0;
//             const dayHalf = parseInt(cells[2].textContent) || 0;
//             const nightFull = parseInt(cells[3].textContent) || 0;
//             const nightHalf = parseInt(cells[4].textContent) || 0;
//             const totalQuantity = dayFull + dayHalf + nightFull + nightHalf;
//             const totalAmount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//             cells[5].textContent = totalQuantity;
//             cells[6].textContent = totalAmount;

//             saveTable(customerIndex, month, year);

//             // also rebuild payment table to reflect new amounts
//             rebuildPaymentTable(Number(customerIndex), month, year);
//           });
//         });
//       }

//       // daily message (kept from your code)
//       const notifyBtn = cells[8].querySelector(".notifyBtn");
//       notifyBtn.addEventListener("click", () => {
//         const customers = getCustomers();
//         const customer = customers[customerIndex];
//         const msg = [
//           `Hello ${customer.name}, your tiffin order for ${cells[0].textContent}:`,
//           `Day Full: ${cells[1].textContent}`,
//           `Day Half: ${cells[2].textContent}`,
//           `Night Full: ${cells[3].textContent}`,
//           `Night Half: ${cells[4].textContent}`,
//           ``,
//           `Successfully Delivered`
//         ].join('%0A');
//         const whatsappLink = `https://wa.me/${customer.mobile}?text=${msg}`;
//         window.open(whatsappLink, "_blank");
//       });
//     });
//   }

//   function saveTable(customerIndex, month, year) {
//     const table = tableContainer.querySelector("table");
//     if(!table) return;
//     const tableData = [];
//     table.querySelectorAll("tr").forEach((row, index) => {
//       if(index === 0) return;
//       const cells = row.querySelectorAll("td");
//       tableData.push({
//         date: cells[0].textContent,
//         dayFull: cells[1].textContent,
//         dayHalf: cells[2].textContent,
//         nightFull: cells[3].textContent,
//         nightHalf: cells[4].textContent,
//         totalQuantity: cells[5].textContent,
//         totalAmount: cells[6].textContent,
//         status: cells[7].textContent
//       });
//     });
//     const savedTables = JSON.parse(localStorage.getItem(TABLES_KEY)) || {};
//     if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
//     savedTables[customerIndex][`${month}-${year}`] = tableData;
//     localStorage.setItem(TABLES_KEY, JSON.stringify(savedTables));
//   }

//   function loadSavedTable(customerIndex) {
//     const month = parseInt(monthSelect.value);
//     const year = parseInt(yearSelect.value);
//     if(!month || !year) return;

//     const savedTables = JSON.parse(localStorage.getItem(TABLES_KEY)) || {};
//     const tableData = savedTables[customerIndex]?.[`${
//       month
//     }-${year}`];
//     if(!tableData) {
//       tableContainer.innerHTML = "";
//       paymentContainer.innerHTML = "";
//       return;
//     }

//     let tableHTML = `<table border="1" style="border-collapse: collapse; width: 100%;">
//       <tr>
//         <th>Date</th>
//         <th>Day Full</th>
//         <th>Day Half</th>
//         <th>Night Full</th>
//         <th>Night Half</th>
//         <th>Total Quantity</th>
//         <th>Total Amount</th>
//         <th>Status</th>
//         <th>Actions</th>
//       </tr>`;

//     tableData.forEach(row => {
//       tableHTML += `<tr>
//         <td>${row.date}</td>
//         <td contenteditable="true">${row.dayFull}</td>
//         <td contenteditable="true">${row.dayHalf}</td>
//         <td contenteditable="true">${row.nightFull}</td>
//         <td contenteditable="true">${row.nightHalf}</td>
//         <td>${row.totalQuantity}</td>
//         <td>${row.totalAmount}</td>
//         <td>${row.status}</td>
//         <td><button class="notifyBtn">Send</button></td>
//       </tr>`;
//     });

//     tableHTML += `</table>`;
//     tableContainer.innerHTML = tableHTML;

//     const customers = getCustomers();
//     const customer = customers[customerIndex];
//     addTableListeners(
//       customerIndex, month, year,
//       Number(customer.fullPrice), Number(customer.halfPrice)
//     );

//     // also build payment table from saved data
//     rebuildPaymentTable(Number(customerIndex), month, year);
//   }

//   // ====== NEW: PAYMENT TABLE (auto weekly + monthly) ======
//   function rebuildPaymentTable(customerIndex, month, year) {
//     const customers = getCustomers();
//     if (!customers[customerIndex]) {
//       paymentContainer.innerHTML = "";
//       return;
//     }
//     const customer = customers[customerIndex];
//     const fullPrice = Number(customer.fullPrice);
//     const halfPrice = Number(customer.halfPrice);
//     const monthName = monthNameFromNumber(month);
//     const key = `${month}-${year}`;

//     const mainTable = tableContainer.querySelector("table");
//     if (!mainTable) { paymentContainer.innerHTML = ""; return; }

//     // Collect daily charges from main table rows
//     const rows = Array.from(mainTable.querySelectorAll("tr")).slice(1);
//     const daily = rows.map(r => {
//       const tds = r.querySelectorAll("td");
//       const dateStr = tds[0].textContent.trim(); // e.g., "3-8-2025"
//       const dayFull  = parseInt(tds[1].textContent) || 0;
//       const dayHalf  = parseInt(tds[2].textContent) || 0;
//       const nightFull= parseInt(tds[3].textContent) || 0;
//       const nightHalf= parseInt(tds[4].textContent) || 0;
//       const amount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
//       return { dateStr, amount };
//     });

//     const paidMap = getPaymentsMap(customerIndex, key); // dateStr -> true/false

//     // Build Payment table HTML
//     let html = `
//       <h2>Payments</h2>
//       <table border="1" style="border-collapse: collapse; width: 100%;">
//         <tr>
//           <th>Date</th>
//           <th>Charge (₹)</th>
//           <th>Paid?</th>
//         </tr>
//     `;

//     let weekSum = 0;
//     let monthSum = 0;

//     daily.forEach((d, idx) => {
//       const paid = !!paidMap[d.dateStr];
//       weekSum += d.amount;
//       monthSum += d.amount;

//       html += `
//         <tr>
//           <td>${d.dateStr}</td>
//           <td>₹${d.amount}</td>
//           <td style="text-align:center">
//             <input type="checkbox" class="paidToggle"
//                    data-date="${d.dateStr}"
//                    ${paid ? "checked" : ""} />
//           </td>
//         </tr>
//       `;

//       const dayNumber = idx + 1;
//       const isWeekBoundary = (dayNumber % 7 === 0) || (dayNumber === daily.length);
//       if (isWeekBoundary) {
//         const start = dayNumber - ((dayNumber - 1) % 7);
//         const end = dayNumber;
//         const label = `Week ${start}–${end} (${monthName} ${year})`;

//         html += `
//           <tr style="font-weight:bold;background:#f6f6f6;">
//             <td colspan="2">${label}</td>
//             <td>
//               ₹${weekSum}
//               <button class="sendWeekBtn"
//                       data-total="${weekSum}"
//                       data-label="${encodeURIComponent(label)}"
//               >Send on WhatsApp</button>
//             </td>
//           </tr>
//         `;
//         weekSum = 0; // reset for next week
//       }
//     });

//     // Monthly total row
//     const monthLabel = `Monthly Total (${monthName} ${year})`;
//     html += `
//       <tr style="font-weight:bold;background:#ffecc7;">
//         <td colspan="2">${monthLabel}</td>
//         <td>
//           ₹${monthSum}
//           <button id="sendMonthBtn"
//                   data-total="${monthSum}"
//                   data-label="${encodeURIComponent(monthLabel)}"
//           >Send on WhatsApp</button>
//         </td>
//       </tr>
//     `;

//     html += `</table>`;
//     paymentContainer.innerHTML = html;

//     // Attach listeners: paid toggle
//     paymentContainer.querySelectorAll(".paidToggle").forEach(cb => {
//       cb.addEventListener("change", (e) => {
//         const dateStr = e.target.getAttribute("data-date");
//         setPaymentFlag(customerIndex, key, dateStr, e.target.checked);
//       });
//     });

//     // Attach listeners: weekly WhatsApp buttons
//     paymentContainer.querySelectorAll(".sendWeekBtn").forEach(btn => {
//       btn.addEventListener("click", () => {
//         const total = btn.getAttribute("data-total");
//         const label = decodeURIComponent(btn.getAttribute("data-label"));
//         sendBillWhatsApp(customer.mobile, customer.name, label, total);
//       });
//     });

//     // Monthly WhatsApp button
//     const monthBtn = paymentContainer.querySelector("#sendMonthBtn");
//     if (monthBtn) {
//       monthBtn.addEventListener("click", () => {
//         const total = monthBtn.getAttribute("data-total");
//         const label = decodeURIComponent(monthBtn.getAttribute("data-label"));
//         sendBillWhatsApp(customer.mobile, customer.name, label, total);
//       });
//     }
//   }

//   function monthNameFromNumber(m) {
//     const months = [
//       "January","February","March","April","May","June",
//       "July","August","September","October","November","December"
//     ];
//     // m is 1-12 in your code
//     return months[m - 1] || "";
//   }

//   function sendBillWhatsApp(mobile, name, periodLabel, amount) {
//     const msg = `Hello ${name},%0A` +
//                 `Your tiffin bill for ${periodLabel} is ₹${amount}.%0A` +
//                 `Thank you!`;
//     window.open(`https://wa.me/${mobile}?text=${msg}`, "_blank");
//   }

//   // ---- init ----
//   loadCustomers();
//   loadMonths();
//   loadYears();
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
  const paymentContainer = document.getElementById("paymentContainer");

  const TABLES_KEY = "tables";
  const PAYMENTS_KEY = "payments";

  const getCustomers = () => JSON.parse(localStorage.getItem("customers")) || [];

  const getPaymentsMap = (custIdx, key) => {
    const all = JSON.parse(localStorage.getItem(PAYMENTS_KEY)) || {};
    return (all[custIdx] && all[custIdx][key]) ? all[custIdx][key] : {};
  };

  const setPaymentFlag = (custIdx, key, dateStr, paid) => {
    const all = JSON.parse(localStorage.getItem(PAYMENTS_KEY)) || {};
    if (!all[custIdx]) all[custIdx] = {};
    if (!all[custIdx][key]) all[custIdx][key] = {};
    all[custIdx][key][dateStr] = paid;
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify(all));
  };

  // Load dropdowns
  function loadCustomers() {
    const customers = getCustomers();
    customerSelect.innerHTML = `<option value="">-- Select Customer --</option>`;
    customers.forEach((cust, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = cust.name;
      customerSelect.appendChild(option);
    });
  }

  function loadMonths() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
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

  customerSelect.addEventListener("change", () => {
    const customers = getCustomers();
    const selectedIndex = customerSelect.value;
    if (selectedIndex !== "") {
      const selectedCustomer = customers[selectedIndex];
      fullPriceEl.textContent = selectedCustomer.fullPrice;
      halfPriceEl.textContent = selectedCustomer.halfPrice;
      mobileEl.textContent = selectedCustomer.mobile || "N/A";
      priceBox.style.display = "block";
      loadSavedTable(selectedIndex);
      rebuildPaymentTable(Number(selectedIndex), parseInt(monthSelect.value), parseInt(yearSelect.value));
    } else {
      fullPriceEl.textContent = 0;
      halfPriceEl.textContent = 0;
      mobileEl.textContent = 0;
      priceBox.style.display = "none";
      tableContainer.innerHTML = "";
      paymentContainer.innerHTML = "";
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
    const customers = getCustomers();
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
        <td><button class="notifyBtn">Send</button></td>
      </tr>`;
    }

    tableHTML += `</table>`;
    tableContainer.innerHTML = tableHTML;

    addTableListeners(customerIndex, month, year, Number(customer.fullPrice), Number(customer.halfPrice));
    rebuildPaymentTable(Number(customerIndex), month, year);
  }

  function addTableListeners(customerIndex, month, year, fullPrice, halfPrice) {
    const table = tableContainer.querySelector("table");
    table.querySelectorAll("tr").forEach((row, index) => {
      if (index === 0) return;
      const cells = row.querySelectorAll("td");
      const quantityCells = [1,2,3,4];

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
            rebuildPaymentTable(Number(customerIndex), month, year);
          });
        });
      }

      const notifyBtn = cells[8].querySelector(".notifyBtn");
      notifyBtn.addEventListener("click", () => {
        const customers = getCustomers();
        const customer = customers[customerIndex];
        const msg = [
          `Hello ${customer.name}, your tiffin order for ${cells[0].textContent}:`,
          `Day Full: ${cells[1].textContent}`,
          `Day Half: ${cells[2].textContent}`,
          `Night Full: ${cells[3].textContent}`,
          `Night Half: ${cells[4].textContent}`,
          ``,
          `Successfully Delivered`
        ].join('%0A');
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
    const savedTables = JSON.parse(localStorage.getItem(TABLES_KEY)) || {};
    if(!savedTables[customerIndex]) savedTables[customerIndex] = {};
    savedTables[customerIndex][`${month}-${year}`] = tableData;
    localStorage.setItem(TABLES_KEY, JSON.stringify(savedTables));
  }

  function loadSavedTable(customerIndex) {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    if(!month || !year) return;

    const savedTables = JSON.parse(localStorage.getItem(TABLES_KEY)) || {};
    const tableData = savedTables[customerIndex]?.[`${month}-${year}`];
    if(!tableData) {
      tableContainer.innerHTML = "";
      paymentContainer.innerHTML = "";
      return;
    }

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

    const customers = getCustomers();
    const customer = customers[customerIndex];
    addTableListeners(customerIndex, month, year, Number(customer.fullPrice), Number(customer.halfPrice));

    rebuildPaymentTable(Number(customerIndex), month, year);
  }

  function rebuildPaymentTable(customerIndex, month, year) {
    const customers = getCustomers();
    if (!customers[customerIndex]) {
      paymentContainer.innerHTML = "";
      return;
    }
    const customer = customers[customerIndex];
    const fullPrice = Number(customer.fullPrice);
    const halfPrice = Number(customer.halfPrice);
    const monthName = monthNameFromNumber(month);
    const key = `${month}-${year}`;

    const mainTable = tableContainer.querySelector("table");
    if (!mainTable) { paymentContainer.innerHTML = ""; return; }

    const rows = Array.from(mainTable.querySelectorAll("tr")).slice(1);
    const daily = rows.map(r => {
      const tds = r.querySelectorAll("td");
      const dateStr = tds[0].textContent.trim();
      const dayFull  = parseInt(tds[1].textContent) || 0;
      const dayHalf  = parseInt(tds[2].textContent) || 0;
      const nightFull= parseInt(tds[3].textContent) || 0;
      const nightHalf= parseInt(tds[4].textContent) || 0;
      const amount = (dayFull + nightFull) * fullPrice + (dayHalf + nightHalf) * halfPrice;
      return { dateStr, amount };
    });

    const paidMap = getPaymentsMap(customerIndex, key);

    let html = `<h2>Payments</h2>
      <table border="1" style="border-collapse: collapse; width: 100%;">
        <tr>
          <th>Date</th>
          <th>Charge (₹)</th>
          <th>Paid?</th>
        </tr>`;

    let weekSum = 0;
    let monthSum = 0;

    daily.forEach((d, idx) => {
      const paid = !!paidMap[d.dateStr];
      weekSum += d.amount;
      monthSum += d.amount;

      html += `<tr>
        <td>${d.dateStr}</td>
        <td>₹${d.amount}</td>
        <td style="text-align:center">
          <input type="checkbox" class="paidToggle" data-date="${d.dateStr}" ${paid ? "checked" : ""} />
        </td>
      </tr>`;

      const dayNumber = idx + 1;
      const isWeekBoundary = (dayNumber % 7 === 0) || (dayNumber === daily.length);
      if (isWeekBoundary) {
        const start = dayNumber - ((dayNumber - 1) % 7);
        const end = dayNumber;
        const label = `Week ${start}–${end} (${monthName} ${year})`;

        html += `<tr style="font-weight:bold;background:#f6f6f6;">
          <td colspan="2">${label}</td>
          <td>
            ₹${weekSum}
            <input type="checkbox" class="weeklyCheck" data-week="${Math.ceil(dayNumber/7)}" />
            <button class="sendWeekBtn" data-total="${weekSum}" data-label="${encodeURIComponent(label)}">Send on WhatsApp</button>
          </td>
        </tr>`;
        weekSum = 0;
      }
    });

    const monthLabel = `Monthly Total (${monthName} ${year})`;
    html += `<tr style="font-weight:bold;background:#ffecc7;">
      <td colspan="2">${monthLabel}</td>
      <td>
        ₹${monthSum}
        <input type="checkbox" id="monthlyCheck" />
        <button id="sendMonthBtn" data-total="${monthSum}" data-label="${encodeURIComponent(monthLabel)}">Send on WhatsApp</button>
      </td>
    </tr>`;

    html += `</table>`;
    paymentContainer.innerHTML = html;

    paymentContainer.querySelectorAll(".paidToggle").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const dateStr = e.target.getAttribute("data-date");
        setPaymentFlag(customerIndex, key, dateStr, e.target.checked);
      });
    });

    paymentContainer.querySelectorAll(".sendWeekBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const total = btn.getAttribute("data-total");
        const label = decodeURIComponent(btn.getAttribute("data-label"));
        sendBillWhatsApp(customer.mobile, customer.name, label, total);
      });
    });

    const monthBtn = paymentContainer.querySelector("#sendMonthBtn");
    if (monthBtn) {
      monthBtn.addEventListener("click", () => {
        const total = monthBtn.getAttribute("data-total");
        const label = decodeURIComponent(monthBtn.getAttribute("data-label"));
        sendBillWhatsApp(customer.mobile, customer.name, label, total);
      });
    }
  }

  function monthNameFromNumber(m) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[m - 1] || "";
  }

  function sendBillWhatsApp(mobile, name, periodLabel, amount) {
    const msg = `Hello ${name},%0A` +
                `Your tiffin bill for ${periodLabel} is ₹${amount}.%0A` +
                `Thank you!`;
    window.open(`https://wa.me/${mobile}?text=${msg}`, "_blank");
  }

  // ---- init ----
  loadCustomers();
  loadMonths();
  loadYears();
});
