
const express = require('express');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-pdf', (req, res) => {
    const { text } = req.body; 
  
    const doc = new PDFDocument();
  
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="user-text.pdf"');
  
    doc.pipe(res);
  
    doc.fontSize(20).text(text || 'لا يوجد نص!', 100, 100);
  
    doc.end();
  });
  

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
