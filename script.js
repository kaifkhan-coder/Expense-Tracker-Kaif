// let expenses = []; // Store expenses
// let totalAmount = 0; // Track total

// // DOM elements
// const categorySelect = document.getElementById('category_select');
// const amountInput = document.getElementById('amount_input');
// const InfoInput = document.getElementById('info');
// const dateInput = document.getElementById('date_input');
// const addBtn = document.getElementById('add_btn');
// const expenseTableBody = document.getElementById('expense-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// // Backend API URL
// const API_URL = "https://expense-racker-backend2-14.onrender.com/api/expenses";

// // ✅ Load expenses from backend
// async function loadExpenses() {
//   try {
//     const response = await fetch(API_URL);
//     expenses = await response.json();
//     renderTable();
//   } catch (err) {
//     console.error("Error fetching expenses:", err);
//   }
// }

// // ✅ Render table
// function renderTable() {
//   expenseTableBody.innerHTML = "";
//   totalAmount = 0;

//   for (const expense of expenses) {
//     if (expense.category === 'Income') {
//       totalAmount += expense.amount;
//     } else if (expense.category === 'Expense') {
//       totalAmount -= expense.amount;
//     }

//     const newRow = expenseTableBody.insertRow();
//     const categoryCell = newRow.insertCell();
//     const AmountCell = newRow.insertCell();
//     const InfoCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();

//     categoryCell.textContent = expense.category;
//     AmountCell.textContent = expense.amount;
//     InfoCell.textContent = expense.info;
//     dateCell.textContent = expense.date;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', () => deleteExpense(expense._id));
//     deleteCell.appendChild(deleteBtn);
//   }

//   totalAmountCell.textContent = totalAmount;
// }

// // ✅ Add new expense
// addBtn.addEventListener('click', async function () {
//   const category = categorySelect.value;
//   const info = InfoInput.value;
//   const amount = Number(amountInput.value);
//   const date = dateInput.value;

//   if (!category) return alert('Please select a category');
//   if (isNaN(amount) || amount <= 0) return alert('Please enter a valid amount');
//   if (!info) return alert('Please enter info');
//   if (!date) return alert('Please select a date');

//   const newExpense = { category, amount, info, date };

//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newExpense)
//     });
//     const savedExpense = await response.json();
//     expenses.push(savedExpense);
//     renderTable();
//   } catch (err) {
//     console.error("Error adding expense:", err);
//   }
// });

// // ✅ Delete expense
// async function deleteExpense(id) {
//   try {
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     expenses = expenses.filter(e => e._id !== id);
//     renderTable();
//   } catch (err) {
//     console.error("Error deleting expense:", err);
//   }
// }

// // Load expenses on page load
// document.addEventListener("DOMContentLoaded", loadExpenses);


// let expenses = []; // Store expenses
// let totalAmount = 0; // Track total

// // DOM elements
// const categorySelect = document.getElementById('category_select');
// const amountInput = document.getElementById('amount_input');
// const InfoInput = document.getElementById('info');
// const dateInput = document.getElementById('date_input');
// const addBtn = document.getElementById('add_btn');
// const expenseTableBody = document.getElementById('expense-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// // Backend API URL
// const API_URL = "https://expense-racker-backend2-24.onrender.com/api/expenses";


// // ✅ Load expenses from backend
// async function loadExpenses() {
//   try {
//     const response = await fetch(API_URL);
//     expenses = await response.json();
//     renderTable();
//   } catch (err) {
//     console.error("Error fetching expenses:", err);
//   }
// }

// // ✅ Render table
// function renderTable() {
//   expenseTableBody.innerHTML = "";
//   totalAmount = 0;

//   for (const expense of expenses) {
//     if (expense.category === 'Income') {
//       totalAmount += expense.amount;
//     } else if (expense.category === 'Expense') {
//       totalAmount -= expense.amount;
//     }

//     const newRow = expenseTableBody.insertRow();
//     const categoryCell = newRow.insertCell();
//     const AmountCell = newRow.insertCell();
//     const InfoCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();

//     categoryCell.textContent = expense.category;
//     AmountCell.textContent = expense.amount;
//     InfoCell.textContent = expense.info;
//     dateCell.textContent = expense.date;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', () => deleteExpense(expense._id));
//     deleteCell.appendChild(deleteBtn);
//   }

//   totalAmountCell.textContent = totalAmount;
// }

// // ✅ Add new expense
// addBtn.addEventListener('click', async function () {
//   const category = categorySelect.value;
//   const info = InfoInput.value;
//   const amount = Number(amountInput.value);
//   const date = dateInput.value;

//   if (!category) return alert('Please select a category');
//   if (isNaN(amount) || amount <= 0) return alert('Please enter a valid amount');
//   if (!info) return alert('Please enter info');
//   if (!date) return alert('Please select a date');

//   const newExpense = { category, amount, info, date };

//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newExpense)
//     });
//     const savedExpense = await response.json();
//     expenses.push(savedExpense);
//     renderTable();
//   } catch (err) {
//     console.error("Error adding expense:", err);
//   }
// });

// // ✅ Delete expense
// async function deleteExpense(id) {
//   try {
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     expenses = expenses.filter(e => e._id !== id);
//     renderTable();
//   } catch (err) {
//     console.error("Error deleting expense:", err);
//   }
// }

// // ✅ Load expenses on page load
// document.addEventListener("DOMContentLoaded", loadExpenses);

// const API_URL = "http://localhost:3000"; // Backend URL
// const res = await fetch(`${API_URL}/login`, {
// method: "POST",
// headers: { "Content-Type": "application/json" },
// credentials: "include",
// body: JSON.stringify({ username, password }),
// });


// const data = await res.json();
// if (!res.ok) {
// document.getElementById("error").textContent = data.message;
// } else {
// localStorage.setItem("username", data.username);
// window.location.href = "expense.html";
// }


// // SIGNUP
// if (document.getElementById("signupForm")) {
// document.getElementById("signupForm").addEventListener("submit", async (e) => {
// e.preventDefault();
// const username = document.getElementById("username").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;


// const res = await fetch(`${API_URL}/signup`, {
// method: "POST",
// headers: { "Content-Type": "application/json" },
// body: JSON.stringify({ username, email, password }),
// });


// const data = await res.json();
// if (!res.ok) {
// document.getElementById("signupError").textContent = data.message;
// } else {
// alert("Signup successful! Please login.");
// window.location.href = "login.html";
// }
// });
// }


// // LOAD EXPENSES
// if (window.location.pathname.endsWith("expense.html")) {
// async function loadExpenses() {
// const res = await fetch(`${API_URL}/expenses`, {
// credentials: "include",
// });
// const data = await res.json();
// const expenseList = document.getElementById("expenseList");
// expenseList.innerHTML = "";
// data.forEach(exp => {
// const li = document.createElement("li");
// li.textContent = `${exp.category}: ₹${exp.amount} (${exp.date})`;
// expenseList.appendChild(li);
// });
// }
// loadExpenses();

// let expenses = []; // Store expenses
// let totalAmount = 0; // Track total

// // DOM elements
// const categorySelect = document.getElementById('category_select');
// const amountInput = document.getElementById('amount_input');
// const InfoInput = document.getElementById('info');
// const dateInput = document.getElementById('date_input');
// const addBtn = document.getElementById('add_btn');
// const expenseTableBody = document.getElementById('expense-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// // ✅ Load expenses from backend
// async function loadExpenses() {
//   try {
//     const response = await fetch("/api/expenses");
//     expenses = await response.json();
//     renderTable();
//   } catch (err) {
//     console.error("Error fetching expenses:", err);
//   }
// }

// // ✅ Render table
// function renderTable() {
//   expenseTableBody.innerHTML = "";
//   totalAmount = 0;

//   for (const expense of expenses) {
//     if (expense.category === 'Income') {
//       totalAmount += expense.amount;
//     } else if (expense.category === 'Expense') {
//       totalAmount -= expense.amount;
//     }

//     const newRow = expenseTableBody.insertRow();
//     const categoryCell = newRow.insertCell();
//     const AmountCell = newRow.insertCell();
//     const InfoCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();

//     categoryCell.textContent = expense.category;
//     AmountCell.textContent = expense.amount;
//     InfoCell.textContent = expense.info;
//     dateCell.textContent = expense.date;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', () => deleteExpense(expense._id));
//     deleteCell.appendChild(deleteBtn);
//   }

//   totalAmountCell.textContent = totalAmount;
// }

// // ✅ Add new expense
// addBtn.addEventListener('click', async function () {
//   const category = categorySelect.value;
//   const info = InfoInput.value;
//   const amount = Number(amountInput.value);
//   const date = dateInput.value;

//   if (!category) return alert('Please select a category');
//   if (isNaN(amount) || amount <= 0) return alert('Please enter a valid amount');
//   if (!info) return alert('Please enter info');
//   if (!date) return alert('Please select a date');

//   const newExpense = { category, amount, info, date };

//   try {
//     const response = await fetch("/api/expenses", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newExpense)
//     });
//     const savedExpense = await response.json();
//     expenses.push(savedExpense);
//     renderTable();
//   } catch (err) {
//     console.error("Error adding expense:", err);
//   }
// });

// // ✅ Delete expense
// async function deleteExpense(id) {
//   try {
//     await fetch(`/api/expenses/${id}`, { method: "DELETE" });
//     expenses = expenses.filter(e => e._id !== id);
//     renderTable();
//   } catch (err) {
//     console.error("Error deleting expense:", err);
//   }
// }

// // 🔥 Load expenses on page load
// window.addEventListener("DOMContentLoaded", loadExpenses);


// 😂😂😂😂😂😂


// let expenses = [];
// let totalAmount = 0;
// let expenseChart;

// // DOM Elements
// const categorySelect = document.getElementById('category_select');
// const amountInput = document.getElementById('amount_input');
// const infoInput = document.getElementById('info');
// const dateInput = document.getElementById('date_input');
// const addBtn = document.getElementById('add_btn');
// const expenseTableBody = document.getElementById('expense-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// // ✅ Save to cookies
// function saveToCookies() {
//   document.cookie = "expenses=" + encodeURIComponent(JSON.stringify(expenses)) + "; path=/; max-age=" + 60 * 60 * 24 * 7;
// }

// // ✅ Load from cookies
// function loadFromCookies() {
//   const cookieData = document.cookie.split("; ").find(row => row.startsWith("expenses="));
//   if (cookieData) {
//     expenses = JSON.parse(decodeURIComponent(cookieData.split("=")[1]));
//     renderTable();
//   }
// }

// // ✅ Render Table + Update Chart
// function renderTable() {
//   expenseTableBody.innerHTML = "";
//   totalAmount = 0;

//   for (const expense of expenses) {
//     totalAmount += expense.category === 'Income' ? expense.amount : -expense.amount;

//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${expense.category}</td>
//       <td>${expense.amount}</td>
//       <td>${expense.info}</td>
//       <td>${expense.date}</td>
//       <td><button class="delete-btn" onclick="deleteExpense('${expense.id}')">Delete</button></td>
//     `;
//     expenseTableBody.appendChild(row);
//   }

//   totalAmountCell.textContent = totalAmount;
//   saveToCookies();
//   updateChart();
// }

// // ✅ Add Expense
// addBtn.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const category = categorySelect.value;
//   const amount = parseFloat(amountInput.value);
//   const info = infoInput.value;
//   const date = dateInput.value;

//   if (!category || isNaN(amount) || !info || !date) {
//     alert("Please fill all fields");
//     return;
//   }

//   const token = localStorage.getItem("token");

//   try {
//     const res = await fetch("/expenses", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({ category, amount, info, date })
//     });

//     const data = await res.json();
//     if (res.ok) {
//       expenses.push(data);
//       renderTable();

//       categorySelect.value = "";
//       amountInput.value = "";
//       infoInput.value = "";
//       dateInput.value = "";
//     } else {
//       alert(data.error || "Failed to add expense");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Server error. Try again.");
//   }
// });


// // ✅ Delete Expense
// function deleteExpense(id) {
//   expenses = expenses.filter(expense => expense.id != id);
//   renderTable();
// }

// // 📊 Update Chart
// function updateChart() {
//   const income = expenses.filter(e => e.category === "Income").reduce((acc, e) => acc + e.amount, 0);
//   const expense = expenses.filter(e => e.category === "Expense").reduce((acc, e) => acc + e.amount, 0);

//   const ctx = document.getElementById('expenseChart').getContext('2d');

//   if (expenseChart) expenseChart.destroy();

//   expenseChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ['Income', 'Expense'],
//       datasets: [{
//         data: [income, expense],
//         backgroundColor: ['#4caf50', '#f44336'],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       indexAxis: 'y', // 🔥 Makes it horizontal
//       responsive: true,
//       plugins: {
//         legend: { display: false },
//         title: { display: true, text: 'Income vs Expense' }
//       }
//     }
//   });
// }

// // ✅ Load Data on Page Load


//   console.log('Using token:', (token || '').slice(0, 20) + '...');

//   // 🔥 Fetch expenses from server
//   const token = localStorage.getItem("token");
//   if (token) {
//     try {
//       const res = await fetch("/expenses", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         expenses = data;
//         renderTable();
//       }
//     } catch (err) {
//       console.error("Failed to fetch expenses:", err);
//     }
//   };
// function saveToCookies(userId) {
//   document.cookie = `expenses_${userId}=` + encodeURIComponent(JSON.stringify(expenses)) + "; path=/; max-age=" + 60 * 60 * 24 * 7;
// }

// function loadFromCookies(userId) {
//   const cookieData = document.cookie.split("; ").find(row => row.startsWith(`expenses_${userId}=`));
//   if (cookieData) {
//     expenses = JSON.parse(decodeURIComponent(cookieData.split("=")[1]));
//     renderTable();
//   }
// }
// window.onload = async function () {
//   const token = localStorage.getItem("token");
//   if (token) {
//     try {
//       const res = await fetch("/expenses", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         expenses = data;
//         renderTable();
//       }
//     } catch (err) {
//       console.error("Failed to fetch expenses:", err);
//     }
//   }
// };
// window.onload = async function () {
//   loadFromCookies();
// }

// Get DOM elements
const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const infoInput = document.getElementById("info");
const dateInput = document.getElementById("date_input");
const addBtn = document.getElementById("add_btn");
const tableBody = document.getElementById("expense-table-body");
const totalAmountElement = document.getElementById("total-amount");
const expenseChartCanvas = document.getElementById("expenseChart");
const logout = document.getElementById("logout_btn");
const download = document.getElementById("download_btn");
const save = document.getElementById("save_btn");
const buyPremium = document.getElementById("premium_btn");
const leaderboard = document.getElementById("leaderboard_btn");
const expenseReport = document.getElementById("expense_report_btn");
const previousExpense = document.getElementById("previous_expense");
const pay = document.getElementById("pay_btn");
// Data storage
let expenses = [];
let totalAmount = 0;

// Chart.js instance
let expenseChart = new Chart(expenseChartCanvas, {
  type: "pie",
  data: {
    labels: ["Income", "Expense"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#4CAF50", "#FF4D4D"],
    }],
  },
});

// Update chart
function updateChart() {
  let income = expenses
    .filter(item => item.category === "Income")
    .reduce((sum, item) => sum + item.amount, 0);
  let expense = expenses
    .filter(item => item.category === "Expense")
    .reduce((sum, item) => sum + item.amount, 0);

  expenseChart.data.datasets[0].data = [income, expense];
  expenseChart.update();
}

// Update total
function updateTotal() {
  totalAmount = expenses.reduce((sum, item) => {
    return item.category === "Income" ? sum + item.amount : sum - item.amount;
  }, 0);
  totalAmountElement.textContent = totalAmount;
}

// Delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderTable();
  updateTotal();
  updateChart();
}

// Render table
function renderTable() {
  tableBody.innerHTML = "";
  expenses.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.category}</td>
      <td>₹${item.amount}</td>
      <td>${item.info}</td>
      <td>${item.date}</td>
      <td><button class="delete-btn" onclick="deleteExpense(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Add expense
addBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const amount = parseFloat(amountInput.value);
  const info = infoInput.value || "-";
  const date = dateInput.value || new Date().toISOString().split("T")[0];

  if (!category || isNaN(amount) || amount <= 0) {
    alert("Please select a valid category and enter a positive amount.");
    return;
  }

  expenses.push({ category, amount, info, date });
  renderTable();
  updateTotal();
  updateChart();

  // Clear inputs
  categorySelect.value = "";
  amountInput.value = "";
  infoInput.value = "";
  dateInput.value = "";
});

// Expose delete function globally
window.deleteExpense = deleteExpense;

logout.addEventListener("click", () => {
  window.location.href = "login.html";
  localStorage.removeItem("token");
});

download.addEventListener("click", () => {
  if (expenses.length === 0) {
    alert("No expenses to download.");
    return;
  }
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Category,Amount,Info,Date\n";
  expenses.forEach(item => {
    csvContent += `${item.category},${item.amount},${item.info},${item.date}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "expenses.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
);

save.addEventListener("click", () => {
  if (expenses.length === 0) {
    alert("No expenses to save.");
    return;
  }
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be logged in to save expenses.");
    return;
  }
  fetch("/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(expenses)
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Expenses saved successfully.");
        expenses = [];
        renderTable();
        updateTotal();
        updateChart();
      } else {
        alert("Failed to save expenses.");
      }
    })
    .catch(err => {
      console.error("Error saving expenses:", err);
      alert("Server error. Please try again later.");
    });
});

// Example login function
async function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();

  if (data.token) {
    // Store token in localStorage
    localStorage.setItem("token", data.token);

    // Display previous expenses
    displayExpenses(data.expenses);
  } else {
    alert(data.error);
  }
}

// Function to display expenses
function displayExpenses(expenses) {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";
  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.title} - ₹${exp.amount}`;
    list.appendChild(li);
  });
}

// Save expense function
async function saveExpense() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch("/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({ title, amount })
  });
  const data = await res.json();
  if (data.success) {
    displayExpenses([data.expense, ...document.querySelectorAll("#expense-list li")]);
  }
}

function logoutUser() {
  localStorage.removeItem("token");
  window.location.href = "/login.html"; // redirect to login page
}

// buyPremium.addEventListener("click", () => {
//   alert("Premium feature coming soon!");
// });

// leaderboard.addEventListener("click", () => {
//   alert("Leaderboard feature coming soon!");
// }
// );
// expenseReport.addEventListener("click", () => {
//   alert("Expense Report feature coming soon!");
// }
// );

async function fetchPreviousExpenses() {
  const token = localStorage.getItem("token");
  if (!token) return window.location.href = "/login.html";

  try {
    const res = await fetch("/expenses", { // backend route
      headers: { "Authorization": "Bearer " + token }
    });
    const data = await res.json();

    displayExpensesTable(data);
  } catch (err) {
    console.error("Failed to fetch previous expenses", err);
  }
}

function displayExpensesTable(expenses) {
  const tbody = document.getElementById("expense-table-body");
  tbody.innerHTML = "";

  let total = 0;

  expenses.forEach(exp => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${exp.category || "Expense"}</td>
      <td>${exp.amount || 0}</td>
      <td>${exp.info || ""}</td>
      <td>${exp.date ? new Date(exp.date).toLocaleDateString() : ""}</td>
      <td><button class="delete-btn" onclick="deleteExpense('${exp._id}')">Delete</button></td>
    `;

    tbody.appendChild(tr);
    total += Number(exp.amount) || 0;
  });

  document.getElementById("total-amount").textContent = total;
}

async function deleteExpense(id) {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch(`/expenses/${id}`, {
      method: "DELETE",
      headers: { "Authorization": "Bearer " + token }
    });
    const data = await res.json();
    if (data.success) {
      fetchPreviousExpenses(); // refresh table after deletion
    }
  } catch (err) {
    console.error("Failed to delete expense", err);
  }
}


let isPremium = false; // initially false

// Check if user has paid
async function checkPremiumStatus() {
  const token = localStorage.getItem("token");
  const res = await fetch("/user/premium-status", {
    headers: { "Authorization": "Bearer " + token }
  });
  const data = await res.json();
  isPremium = data.isPremium;

  document.querySelectorAll(".premium-btn").forEach(btn => {
    btn.disabled = !isPremium; // disable premium buttons if not paid
    if (!isPremium) btn.title = "Premium feature - unlock to use";
  });
}

// Payment button
document.getElementById("pay_btn").addEventListener("click", async () => {
  // Example: call backend to initiate payment
  const token = localStorage.getItem("token");
  const res = await fetch("/user/pay", {
    method: "POST",
    headers: { "Authorization": "Bearer " + token }
  });
  const data = await res.json();
  if (data.success) {
    alert("Payment successful! Premium features unlocked.");
    isPremium = true;
    checkPremiumStatus(); // refresh buttons
  }
});

// Call this function when expense page loads
window.onload = fetchPreviousExpenses;
