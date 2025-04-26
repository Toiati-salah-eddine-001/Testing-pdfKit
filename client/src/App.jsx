import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const generatePDF = async () => {
    const response = await fetch('http://localhost:3000/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'generated.pdf';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>إنشاء PDF مع نص المستخدم</h1>
      <textarea
        style={{ width: '300px', height: '150px', fontSize: '18px' }}
        placeholder="اكتب النص هنا..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br /><br />
      <button onClick={generatePDF} style={{ fontSize: '20px', padding: '10px 20px' }}>
        إنشاء PDF
      </button>
    </div>
  );
}

export default App;
