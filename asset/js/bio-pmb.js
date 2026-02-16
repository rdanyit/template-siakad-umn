const steps = document.querySelectorAll(".step");
const progress = document.querySelectorAll(".progress div");
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");

let currentStep = 0;

/* ---------------- STEP CONTROL ---------------- */

function updateSteps() {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === currentStep);
    progress[i].classList.toggle("active", i <= currentStep);
  });
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inputs = steps[currentStep].querySelectorAll(
      "input, select, textarea",
    );

    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    updateSteps();
  });
});

/* ---------------- DATA WILAYAH CONTOH ---------------- */
/* Contoh kecil → nanti bisa diganti API wilayah Kemendagri */

const wilayah = {
  "Sumatera Barat": {
    "Kota Padang": {
      "Padang Barat": ["Puruih", "Olo"],
      "Padang Timur": ["Sawahan", "Parak Gadang"],
    },
    "Kabupaten Agam": {
      "Lubuk Basung": ["Garagahan", "Manggopoh"],
    },
  },
  Riau: {
    "Kota Pekanbaru": {
      Sukajadi: ["Kampung Tengah", "Harjosari"],
    },
  },
};

const provSelect = document.getElementById("prov");
const kabSelect = document.getElementById("kab_kota");
const kecSelect = document.getElementById("kecamatan");
const nagariSelect = document.getElementById("nagari");

/* ---------------- INIT ---------------- */

function resetSelect(select, placeholder) {
  select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
  select.disabled = true;
}

function populateSelect(select, data) {
  Object.keys(data).forEach((key) => {
    select.innerHTML += `<option value="${key}">${key}</option>`;
  });
  select.disabled = false;
}

/* Load provinsi */
populateSelect(provSelect, wilayah);

/* Initial state */
resetSelect(kabSelect, "Pilih Kota / Kabupaten");
resetSelect(kecSelect, "Pilih Kecamatan");
resetSelect(nagariSelect, "Pilih Nagari");

/* ---------------- CHAINED DROPDOWN ---------------- */

provSelect.addEventListener("change", () => {
  resetSelect(kabSelect, "Pilih Kota / Kabupaten");
  resetSelect(kecSelect, "Pilih Kecamatan");
  resetSelect(nagariSelect, "Pilih Nagari");

  const prov = provSelect.value;
  populateSelect(kabSelect, wilayah[prov]);
});

kabSelect.addEventListener("change", () => {
  resetSelect(kecSelect, "Pilih Kecamatan");
  resetSelect(nagariSelect, "Pilih Nagari");

  const prov = provSelect.value;
  const kab = kabSelect.value;

  populateSelect(kecSelect, wilayah[prov][kab]);
});

kecSelect.addEventListener("change", () => {
  resetSelect(nagariSelect, "Pilih Nagari");

  const prov = provSelect.value;
  const kab = kabSelect.value;
  const kec = kecSelect.value;

  const nagariList = wilayah[prov][kab][kec];

  nagariList.forEach((nagari) => {
    nagariSelect.innerHTML += `<option value="${nagari}">${nagari}</option>`;
  });

  nagariSelect.disabled = false;
});

/* First render */
updateSteps();

const fotoInput = document.getElementById("foto");
const imgProfile = document.querySelector(".img-profile");

fotoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("File harus berupa gambar");
    this.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    imgProfile.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
