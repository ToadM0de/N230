import {jsPDF} from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

const myDoc = new jsPDF();

const nums = [];

function addNum() {
    nums.push(1);
}

function downloadPdf() {
    myDoc.text("Title", 10, 10);
    myDoc.save("myDoc.pdf");
}

function viewPdf() {
    myDoc.text("Title", 10, 10);

    let numLineY = 15;
    nums.forEach(function(num) {
        myDoc.text(String(num), 10, numLineY);
        numLineY += 5;
    });

    const dataUrl = myDoc.output
    ("bloburl");

    console.log(dataUrl);

    document.querySelector("#pdf-preview").src = dataUrl + "#toolbar=0";
}

document.querySelector("#download-pdf").onclick = downloadPdf;

document.querySelector("#view-pdf").onclick = viewPdf;

document.querySelector("#plus").onclick = addNum;