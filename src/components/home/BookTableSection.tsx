"use client";

import { useState, FormEvent } from "react";
import CountdownTimer from "@/src/components/common/CountdownTimer";

export default function BookTableSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="ps-section ps-home-book-table dark bg--cover"
      data-background="/img/bg/home-2/book-table.jpg"
    >
      <div className="container">
        <div className="row">
          {/* BOOKING FORM */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <form
              className="ps-form--book-your-table"
              onSubmit={handleSubmit}
            >
              <div className="ps-form__header">
                <h4>Chikery Cake</h4>
                <h3>Book your table</h3>
              </div>

              <div className="ps-form__content">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    name="people"
                    placeholder="Number of People"
                    value={formData.people}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control"
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ps-form__footer">
                <button className="ps-btn" type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>

          {/* UPCOMING EVENT */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="ps-section__header">
              <p>Chikery Store</p>
              <h3>Upcoming Event</h3>
            </div>

            <div className="ps-section__content">
              <div className="ps-block--upcomming-event">
                <div className="ps-block__content">
                  <h4>Simple Crusty Bread</h4>
                  <h5>TUESDAY 12/04/2018, 7:00AM</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br />
                    Curabitur sed turpis feugiat viverra metus.
                  </p>
                </div>

                <div className="ps-block__footer">
                  <CountdownTimer targetDate="December 30, 2029 24:00:00" />
                  <a className="ps-btn" href="#">
                    Reserve now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}