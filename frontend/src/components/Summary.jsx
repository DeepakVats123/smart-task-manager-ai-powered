import React from 'react'
import { useState } from 'react';

const Summary = ({tasks}) => {
  const [summary, setSummary] = useState('');

  const generateSummary = async () => {
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

    } catch (error) {
      console.error('Error generating summary:', error);
    }
  };

  return (
    <div>
      <h2>Summary of Tasks</h2>
      <button onClick={generateSummary}>Generate Summary</button>
      {summary && <p>{summary}</p>}
    </div>
  )
}

export default Summary