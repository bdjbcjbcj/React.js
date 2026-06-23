import React from 'react'

function QuestionCard({ questions, options, onSelect }) {
  return (
    <div>
      <div className="card shadow p-4">
        <h4 className="fw-semibold">{questions}</h4>
      </div>

      <div className="mt-3">
        {
          options.map((opt, i) => (
            <button
              className="btn btn-outline-primary w-100 mt-2"
              key={i}
              onClick={() => onSelect(opt)}
            >
              {opt}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard