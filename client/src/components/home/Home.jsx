
import { Link } from 'react-router-dom';
import '../../css/Home.css'

export default function Home() {
  return (
    <main className="home-page">
      <section className="intro">
        <h1>Welcome to ShortStories</h1>
        <p>
          Discover a world of imagination and creativity! Here you can find stories from a diverse range of authors all over the globe. Dive into unique narratives, explore captivating plots, and immerse yourself in the art of storytelling. Whether you're looking for thrilling adventures, heartfelt romances, or thought-provoking tales, you'll find something to spark your interest.
        </p>
        <p>
          Our platform brings together storytellers and readers, providing a space to share and explore stories that resonate. Join us on this literary journey and find your next great read!
        </p>
        <Link to="/stories" className="catalog-link">
          Explore Stories
        </Link>
      </section>
    </main>
  );
}