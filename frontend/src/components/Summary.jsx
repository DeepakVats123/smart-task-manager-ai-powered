import { useState } from 'react';
import '../styles/summary.css';

const Summary = ({tasks}) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3200/api/v1/tasks/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tasks })
      });

      if (!res.ok) throw new Error('Failed to generate summary');
      const data = await res.json();
      console.log(data.summary);

      setSummary(data.summary);
      setLoading(false);

    } catch (error) {
      console.error('Error generating summary:', error);
      setLoading(false);
    }
  };

  return (
    <div className='summary-container'>
      <h1 className='title'>Summary of Tasks</h1>
      <button disabled={loading} className='summary-btn' onClick={generateSummary}>
        {loading ? 'Generating...' : 'Generate Summary'}
      </button>
      <br />
      {loading && <img className='loading-img' src="https://media.tenor.com/eFde1mp-8fYAAAAM/carregando.gif" alt="Loading..." />}
      {!loading && summary && <div className='animated-summary'>{summary}</div>}
    </div>
  )
}

export default Summary