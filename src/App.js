// import logo from './logo.svg';
import './App.css';
import Movies from './Components/Movies';

function App() {

  const movies = [
    {
      name: "The Purge",
      year: "2013",
      rating: "R",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvXYtEdHrUope8_acZizAhVc1vFfSAPLBaNNowvWUwa_UuGnO"
    },
    {
      name: "The Purge: Anarchy",
      year: "2014",
      rating: "R",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTV4M7S5RidqmBHhT2YMJgzRg2Ka_e33AGO1CFRZl21ZN5itmml"

    },
    {
      name: "The Purge: Election Year",
      year: "2016",
      rating: "R",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQealOoCUe2m6tjoQT6V5AveTE1CUAL9_XfUkW8Zb6kgrhlqoc_"

    },
    {
      name: "The First Purge",
      year: "2018",
      rating: "R",
      image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQ2d4zh6pF-qeBkfW9XxJKOwH3KJWr_ryoY-DeiFvXV9Jdw-T3p"

    },
    {
      name: "The Forever Purge",
      year: "2021",
      rating: "R",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvPIWjVDXZVRowmwBMoKe9OnlyshsBZ6YTw5dckJ7QflwRhG0"

    },
  ]
  // console.log(movies)
  
  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
