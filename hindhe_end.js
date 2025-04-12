const patients = [];

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'doctor' && pass === '1234') {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('patientFormPage').classList.remove('hidden');
  } else {
    document.getElementById('loginError').innerText = 'Invalid credentials!';
  }
}

function submitPatient() {
  const pname = document.getElementById('pname').value;
  const age = document.getElementById('age').value;
  const symptoms = document.getElementById('symptoms').value;
  const bp = document.getElementById('bp').value;
  const prescription = document.getElementById('prescription').value;

  if (pname && age && symptoms && bp && prescription) {
    patients.push({ pname, age, symptoms, bp, prescription });
    alert('Patient data recorded successfully!');

    document.getElementById('pname').value = "";
    document.getElementById('age').value = "";
    document.getElementById('symptoms').value = "";
    document.getElementById('bp').value = "";
    document.getElementById('prescription').value = "";
  } else {
    alert('Please fill in all fields.');
  }
}

function generateSummary() {
  document.getElementById('patientFormPage').classList.add('hidden');
  document.getElementById('summaryPage').classList.remove('hidden');

  document.getElementById('totalPatients').innerText = patients.length;

  const tbody = document.querySelector('#patientTable tbody');
  tbody.innerHTML = "";

  patients.forEach(p => {
    const row = `<tr>
      <td>${p.pname}</td>
      <td>${p.age}</td>
      <td>${p.symptoms}</td>
      <td>${p.bp}</td>
      <td>${p.prescription}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
