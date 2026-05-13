const params = new URLSearchParams(window.location.search);
const doc = params.get("doc");

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const hasil = data.find(d => d.doc === doc);

    if (hasil) {
      document.getElementById("nama").innerText = hasil.nama;
      document.getElementById("nip").innerText = hasil.nip;
      document.getElementById("dokumen").innerText = hasil.doc;
      document.getElementById("status").innerText = hasil.status;
    } else {
      document.getElementById("status").innerText = "❌ TIDAK VALID";
    }
  });