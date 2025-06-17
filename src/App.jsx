const url = "https://www.course-api.com/react-tabs-project";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import JobInfo from "./JobInfo";
import { useFetch } from "./useFetch";

const App = () => {
  const { isLoading, isError, data } = useFetch(url);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleActiveIndex(index) {
    setActiveIndex(index);
  }

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
      <ButtonContainer
        jobs={data}
        onHandleIndex={handleActiveIndex}
        activeIndex={activeIndex}
      />
      <JobInfo jobs={data} activeIndex={activeIndex} />
    </section>
  );
};
export default App;
