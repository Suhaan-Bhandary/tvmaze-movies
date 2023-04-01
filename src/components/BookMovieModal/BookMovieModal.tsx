import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BookedMovies } from '../../types/movies.types';
import styles from './BookMovieModal.module.css';

type Props = {
  movieName: string;
  movieId: number;
  closeCallBack: () => void;
};

function BookMovieModal({ movieName, movieId, closeCallBack }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = () => {
    if (!name) {
      toast.error('Please Provide your Name!!');
      return;
    }

    if (!email) {
      toast.error('Please Provide your Email!!');
      return;
    }

    if (!date) {
      toast.error('Please Provide your Date!!');
      return;
    }

    // Handle the form submission
    setIsLoading(true);

    // Add the data to the local storage
    const BOOKED_MOVIE_KEY = 'booked-movies';

    // Retrieving data from the local storage
    const jsonData = localStorage.getItem(BOOKED_MOVIE_KEY);

    // Added data to the booked movies
    const bookedMovies: BookedMovies = jsonData ? JSON.parse(jsonData) : [];
    bookedMovies.push({ movieName, movieId, name, email, date });

    // Saving data to the local storage
    localStorage.setItem(BOOKED_MOVIE_KEY, JSON.stringify(bookedMovies));

    // Set the loading state to false
    setIsLoading(false);

    closeCallBack();
    toast.success('Movie Booked Successfully');
  };

  return (
    <div className={styles.BookMovieModal}>
      <div className={styles.container}>
        <h1 className={styles.title}>Movie Booking</h1>
        <form
          onSubmit={(event) => event.preventDefault()}
          className={styles.form}
        >
          <div className={styles.inputField}>
            <label htmlFor="movie">
              Movie
              <input type="movie" name="movie" value={movieName} disabled />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="id">
              Movie Id
              <input type="id" name="id" value={movieId} disabled />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="name">
              Name
              <input
                type="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="abc@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="date">
              Date
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
        </form>

        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.button} ${styles.submitButton}`}
            onClick={handleFormSubmit}
            disabled={isLoading}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeCallBack}
            className={`${styles.button} ${styles.closeButton}`}
            disabled={isLoading}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookMovieModal;
