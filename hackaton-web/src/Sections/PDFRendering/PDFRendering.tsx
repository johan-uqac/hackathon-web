import React from 'react';
import PDFDroppable from '../../Components/Droppable/Droppable';
import Widget from '../../types/Widget';
import './PDFRendering.css'


export default function PDFRendering({cartItems}: {cartItems: Widget[]}) {
    return (
        <div className="pdfSection">
            <h1 className='pdfTitle'>PDF composition</h1>
            <PDFDroppable items={cartItems} />
        </div>
    )
}