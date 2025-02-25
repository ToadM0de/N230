import {jsPDF} from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

const myDoc = new jsPDF();

function downloadPdf() {
    myDoc.text("Title", 10, 10);
    myDoc.save("myDoc.pdf");
}

document.querySelector("#download-pdf").onclick = downloadPdf;