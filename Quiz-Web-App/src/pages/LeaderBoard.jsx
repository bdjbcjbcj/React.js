import React, { useEffect, useState } from "react";

function LeaderBoard() {
  let [data, setData] = useState([]);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored);
  }, []);

  let ClearBoard=()=>{
    localStorage.removeItem("leaderboard")
    setData([])
  }
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
      {data.length === 0 ? (
        <p className="fw-bold mb-4">No Score Yet!Please Play The Quiz</p>
      ) : (
        <table className="table table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
                <td>{entry.percentage}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn btn-danger mt-3"
      onClick={ClearBoard}
      >Clear Leaderboard</button>
    </div>
  );
}

export default LeaderBoard;
