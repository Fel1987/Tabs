export default function ButtonContainer({ jobs, onHandleIndex, activeIndex }) {
  return (
    <ul className="btn-container">
      {jobs.map((job, index) => (
        <li key={job.id}>
          <button
            onClick={() => onHandleIndex(index)}
            className={`job-btn ${activeIndex === index ? "active-btn" : ""}`}
          >
            {job.company}
          </button>
        </li>
      ))}
    </ul>
  );
}
