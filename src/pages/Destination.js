/*
 *
 * Title: Destination
 * Description: This page show serach location and map
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import { faLocationArrow, faUsers } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Icon, Navbar, SearchTicket, TicketBox } from "../components";
import allTickets from "../fakedata/tickets";

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    {/* <Icon icon={faUsers}  /> */}
    <p className="pin-text">{text}</p>
  </div>
);

const Destination = () => {
  const [showTickets, setShowTickets] = useState(false);
  const [tickets, setTickets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // find ticketlist with id
    const ticketList = allTickets.find((ticket) => ticket.id === Number(id));
    // get tickets array from list
    let { tickets } = ticketList;
    // set to state
    setTickets(tickets);
  }, []);

  // will pass as props in searchticket
  const submitForm = () => {
    setShowTickets(true);
  };

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  return (
    <div className="min-h-screen homeBg bg-fixed">
      <Navbar />
      <div className="custom-tw-height p-8 md:px-20 grid grid-cols-1 grid-flow-row justify-center items-start md:grid-cols-2 md:grid-flow-column lg:grid-cols-3 gap-5">
        <div className="bg-gray-100 p-6 rounded-lg">
          <SearchTicket search={submitForm} />
          {showTickets &&
            tickets.map((ticket) => (
              <TicketBox {...ticket} key={ticket.price} />
            ))}
        </div>
        <div className="lg:col-span-2">
          {/* <img src={mapImage} alt="..."/> */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBp7FPD_rfg4heBZK2mdkmr1TIo2I7Pz1k",
            }}
            defaultCenter={location}
            defaultZoom={11}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Destination;
