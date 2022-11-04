import "./MovieCard.scss";
export default function MovieCard({ data }) {
  console.log(data.Ratings);
  return (
    <div className="movie">
      <div className="topCard">
        <div className="top">
          {data.Poster && <img src={data?.Poster} alt="img" />}
        </div>
        <div className="leftTopCard">
          <h2 className="title"> {data.Title}</h2>
          <div>
            <p className="date"> Released Date: {data.Released}</p>
            <p className="rating"> Rating: {data.Ratings[0]?.Value}</p>
          </div>
        </div>
      </div>
      <div className="bottomCard">
        <h3>Description</h3>
        <p className="description"> {data.Plot}</p>
        <div className="genre">
          {data.Genre.split(",").map((el) => (
            <p>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
