import Duties from "./Duties";

export default function JobInfo({ jobs, activeIndex }) {
  const { id, company, dates, duties, title } = jobs[activeIndex];

  return (
    <article>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
