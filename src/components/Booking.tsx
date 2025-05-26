import BookingForm from "./BookingForm";

const Booking = (props: any) => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
    />
  );
};

export default Booking;
