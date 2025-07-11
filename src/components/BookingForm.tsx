import { useState } from "react";

const BookingForm = (props: any) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e: any) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map(
                  (availableTimes: any) => {
                    return (
                      <option key={availableTimes}>{availableTimes}</option>
                    );
                  }
                )}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                max="10"
                type="number"
                placeholder="0"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <button type="submit" className="btnReceive">
              Make Your Reservation{" "}
            </button>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
