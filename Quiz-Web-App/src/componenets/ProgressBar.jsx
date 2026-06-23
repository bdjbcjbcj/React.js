import React from 'react'

function ProgressBar({current,total}) {

  let progress=((current + 1)/ total)* 100
  return (
    <div>
        
              <div className="progress mb-3">
            <div className="progress-bar" style={{width: `${progress}%`}}>
              {Math.round(progress)}%
            </div>
        </div>
    </div>
  )
}

export default ProgressBar