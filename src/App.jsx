const url = "https://www.course-api.com/react-tabs-project";
import JobInfo from "./JobInfo";
import { useFetch } from "./useFetch";

const App = () => {
  const { isLoading, isError, data } = useFetch(url);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  if (isError || data.length === 0) {
    return (
      <section className="jobs-center">
        <h2>Something went wrong or no jobs available.</h2>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={data} />
    </section>
  );
};
export default App;
