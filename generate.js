function buatQR() {
    document.getElementById("qrcode").innerHTML = "";

    let doc = document.getElementById("doc").value;

    let link = "https://smpnduasikur-creator.github.io/tte-smpn2-sikur//?doc=" + doc;

    new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 250,
        height: 250
    });
}
``
