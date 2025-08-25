document.getElementById("customerSelect").addEventListener("change", generateTable);
document.getElementById("monthPicker").addEventListener("change", generateTable);
document.getElementById("searchCustomer").addEventListener("input", searchCustomer);

function generateTable() {
  let customer = document.getElementById("customerSelect").value;
  let monthYear = document.getElementById("monthPicker").value;

  if (!customer || !monthYear) {
    document.getElementById("tableContainer").innerHTML = "";
    return;
  }

  let [year, month] = monthYear.split("-");
  let daysInMonth = new Date(year, month, 0).getDate();

  let table = `
    <h2>${customer} - ${monthYear}</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Day Full</th>
          <th>Day Half</th>
          <th>Night Full</th>
          <th>Night Half</th>
          <th>Total Quantity</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let d = 1; d <= daysInMonth; d++) {
    table += `
      <tr>
        <td>${d}/${month}/${year}</td>
        <td><input type="number" value="0" onchange="updateRow(this)"></td>
        <td><input type="number" value="0" onchange="updateRow(this)"></td>
        <td><input type="number" value="0" onchange="updateRow(this)"></td>
        <td><input type="number" value="0" onchange="updateRow(this)"></td>
        <td class="qty">0</td>
        <td class="amount">0</td>
      </tr>
    `;
  }

  table += `</tbody></table>`;
  document.getElementById("tableContainer").innerHTML = table;
}

function updateRow(input) {
  let row = input.parentElement.parentElement;
  let dayFull = parseInt(row.children[1].children[0].value) || 0;
  let dayHalf = parseInt(row.children[2].children[0].value) || 0;
  let nightFull = parseInt(row.children[3].children[0].value) || 0;
  let nightHalf = parseInt(row.children[4].children[0].value) || 0;

  let totalQty = dayFull + dayHalf + nightFull + nightHalf;
  let totalAmount = (dayFull * 100) + (dayHalf * 60) + (nightFull * 100) + (nightHalf * 60);

  row.querySelector(".qty").innerText = totalQty;
  row.querySelector(".amount").innerText = totalAmount;
}

function searchCustomer() {
  let searchValue = document.getElementById("searchCustomer").value.toLowerCase();
  let options = document.querySelectorAll("#customerSelect option");

  options.forEach(opt => {
    if (opt.value.toLowerCase().includes(searchValue) || opt.text.toLowerCase().includes(searchValue)) {
      opt.style.display = "block";
    } else if (opt.value !== "") {
      opt.style.display = "none";
    }
  });
}

