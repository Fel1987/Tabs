import Duties from "./Duties";

export default function JobInfo({ jobs }) {
  const { company, dates, duties, title } = jobs[0];

  return (
    <article>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
