import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Default import—matches the lib's export

function QR({ link }) {
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    if (!link || !link.startsWith('http')) {
      alert('Please provide a valid URL starting with http/https!');
      return;
    }
    setShowQR(true);
  };

  const handleHideQR = () => setShowQR(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>QR Generator</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <button
          type="button"
          onClick={handleGenerateQR}
          style={{
            padding: '5px 10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
          aria-label="Generate QR code"
        >
          Generate QR
        </button>
        
        {showQR && (
          <button
            type="button"
            onClick={handleHideQR}
            style={{
              padding: '5px 10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
            aria-label="Hide QR code"
          >
            Hide QR
          </button>
        )}
      </div>
      
      {showQR && link && (
        <div style={{ marginTop: '20px', flexDirection: 'column', alignItems: 'center' , display: 'flex' , justifyContent: 'center' }}>
          <QRCodeSVG 
            value={link}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
          />
        </div>
        
      )}
    </div>
  );
}

export default QR;