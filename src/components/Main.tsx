import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

interface State {
  availableTimes: string[];
}

interface FormData {
  [key: string]: any;
}

const Main = () => {
  const seedRandom = function (seed: number): () => number {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function (): number {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date: Date): string[] {
    const result: string[] = [];
    const random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData: FormData): boolean {
    console.log(formData);
    // TODO: Implement API call to submit booking information
    return true;
  };

  const initialState: State = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(): State {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function submitForm(formData: FormData): void {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
