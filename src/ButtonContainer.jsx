export default function ButtonContainer({ jobs }) {
  return (
    <ul className="btn-container">
      {jobs.map((job) => (
        <li key={job.id}>
          <button className="job-btn">{job.company}</button>
        </li>
      ))}
    </ul>
  );
}
