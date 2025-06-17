import { FaAnglesRight } from "react-icons/fa6";

export default function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty) => (
        <li key={duty} className="job-desc">
          <FaAnglesRight className="job-icon" />
          <p>{duty}</p>
        </li>
      ))}
    </div>
  );
}
