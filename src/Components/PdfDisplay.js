import React, { useState } from 'react';
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import "./pdf.css";


function PDFViewer({ currentCourse }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoom] = useState(1);
  const [Angle, setAngle] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToFirst() {
    setPageNumber(1);
  }

  function goPrev() {
    setPageNumber(pageNumber -1);
  }

  function ZoomIn({ }) {
    setZoom(zoomLevel + 0.2);
  }

  function rotatePage({ }) {
    setAngle(Angle + 90);
  }

  function ZoomOut({ }) {
    setZoom(zoomLevel - 0.2);
  }

  function goNext() {
    setPageNumber(pageNumber + 1);
  }

  function goLast() {
    setPageNumber(numPages);
  }

  return (
    <div className="pdfDisplay">
      <div className="navigation">
        <button id="first" onClick={goToFirst}>First</button>
        <button id="prev" onClick={goPrev}>previous</button>
        <button id="ZoomOut" onClick={ZoomOut}>Zoom Out</button>
        <button id="Rotate" onClick={rotatePage}>Rotate</button>
        <button id="ZoomIn" onClick={ZoomIn}>Zoom In</button>
        <button id="next" onClick={goNext}>Next</button>
        <button id="last" onClick={goLast}>Last</button>
      </div>
      <Document
        file={currentCourse}
        onLoadSuccess={onDocumentLoadSuccess}
        noData={"Select a PDF"}
      >
        <Page pageNumber={pageNumber}
          width={500}
          scale={zoomLevel}
          rotate = {Angle}
        />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PDFViewer