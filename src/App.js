import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import News from "./Components/News/News";

function APP() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-09-28&to=2021-09-28&sortBy=popularity&apiKey=c7da5fec0fcd476f98fcb5d5add4a75c"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="App">
      {news.length === 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="grow" />
        </div>
      ) : (
        <Row xs={1} md={4} className="g-3">
          {news.map((nw) => (
            <News news={nw} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default APP;
