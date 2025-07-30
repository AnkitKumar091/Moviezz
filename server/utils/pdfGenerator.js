const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateTicketPDF(booking, res) {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res);
  doc.fontSize(20).text('🎟️ Movie Ticket', { align: 'center' });
  doc.text(`Movie: ${booking.movieId.title}`);
  doc.text(`Time: ${booking.timeSlot}`);
  doc.text(`Seats: ${booking.seats.join(', ')}`);
  doc.text(`Date: ${new Date(booking.bookedAt).toLocaleString()}`);
  doc.end();
}

module.exports = generateTicketPDF;
