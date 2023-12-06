// import axios from '@/lib/axios'
import { useState } from "react";

function Book({ room }: { room: any }) {
    const [book, setBook] = useState({ check_in: '', check_out: '', guests: 1, adults: 1 });

    const handleChange = (e: any) => {
        setBook(prevalue => ({ ...prevalue, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        window.open('https://www.airbnb.co.uk/rooms/' + room.airbnb_id + '?guests=' + book.guests + '&adults=' + book.adults + '&check_in=' + book.check_in + '&check_out=' + book.check_out, "_blank", "noreferrer");

        // setIsLoading(true); setMessage({ text: '', status: '' });

        // await axios
        //     .get('https://www.airbnb.co.uk/rooms/' + room.airbnb_id + '?guests=' + book.guests + '&adults=' + book.adults + '&check_in=' + book.check_in + '&check_out=' + book.check_out)
        //     .then((response) => {
        //         // setMessage({ text: response.data.message, status: 'success' });
        //         // setIsLoading(false);
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         // if (error.response && error.response.data && error.response.data.message) {
        //         //     setMessage({ text: error.response.data.message, status: 'error' });
        //         // } else {
        //         //     setMessage({ text: 'Rightsholder not correctly elaborated', status: 'error' });
        //         // }
        //         // setIsLoading(false);
        //     });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <label htmlFor="check_in">Check In</label>
                <input type="date" name="check_in" id="check_in" value={book.check_in} onChange={handleChange} required />
            </div>

            <div className="form__field">
                <label htmlFor="check_out">Check Out</label>
                <input type="date" name="check_out" id="check_out" value={book.check_out} onChange={handleChange} required />
            </div>

            <div className="form__field">
                <label htmlFor="guests">Guests</label>
                <input type="number" name="guests" id="guests" min={1} value={book.guests} onChange={handleChange} required />
            </div>

            <div className="form__field">
                <label htmlFor="adults">Adults</label>
                <input type="number" name="adults" id="adults" min={1} value={book.adults} onChange={handleChange} required />
            </div>

            <button type="submit">Book</button>
        </form>
    );
}

export default Book;
