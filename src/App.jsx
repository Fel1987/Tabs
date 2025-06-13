const url = "https://www.course-api.com/react-tabs-project";
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

  return <h2>Tabs Starter</h2>;
};
export default App;
