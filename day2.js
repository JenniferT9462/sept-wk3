console.log("Hello from day2.js!");
// Global Variable
let contacts = [];

const SUPABASE_URL = "https://jzbjxzohgzaodvfaeynb.supabase.co/rest/v1/leads";
const APIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6Ymp4em9oZ3phb2R2ZmFleW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDA0NDMsImV4cCI6MjA4MDM3NjQ0M30.DnKVsJBZeACHYDtwGKPO-N1CYBSWIbtlZU4YpM_gR-s";

async function saveUser() {
  event.preventDefault();

  console.log("Button was clicked!");

  let name = document.getElementById("contactName").value;
  let email = document.getElementById("contactEmail").value;
  let message = document.getElementById("contactMessage").value;

  //JS Object
  let lead = {
    name: name,
    email: email,
    message: message,
  };

  console.log(lead);

  let response = await fetch(SUPABASE_URL, {
    method: "POST",
    headers: {
      apikey: APIKEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  });

  console.log("Lead Created: ", response);

  let leadForm = document.getElementById("leadForm");
  leadForm.reset();
}

async function getLeads() {
  let response = await fetch(SUPABASE_URL, {
    method: "GET",
    headers: {
      "apikey": APIKEY
    }
  });

  let data = await response.json();
  console.log(data);

  let leadsTable = document.getElementById("leadsTable");
  let leadsItems = document.getElementById("leadsItems");
  for(let i = 0; i < data.length; i++) {
    leadsTable.hidden = false;
    leadsItems.innerHTML += `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].message}</td>
      </tr>
    `
  }
}