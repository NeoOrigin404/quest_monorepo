import { useLoaderData } from "react-router-dom";
import "../styles/programs.css";

interface SeriesTypes {
  id: number;
  country: string;
  poster: string;
  synopsis: string;
  title: string;
  year: number;
}

export default function Programs() {
  const series = useLoaderData() as SeriesTypes[];

  return (
    <section className="countainer">
      <h2>Séries</h2>
      <div>
        {series.map((serie) => (
          <article key={serie.id}>
            <h3> {serie.title} </h3>
            <img src={serie.poster} alt="" />
            <p> Année : {serie.year}</p>
            <p> Pays : {serie.country}</p>
            <p> Synopsie : {serie.synopsis}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
