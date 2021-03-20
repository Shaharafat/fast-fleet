/*
 *
 * Title: Destination
 * Description: This page show serach location and map
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GoogleMap, Layout, SearchTicket, TicketBox } from "../components";
import allTickets from "../fakedata/tickets";

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

  return (
    <Layout layoutClasses="grid grid-cols-1 grid-flow-row justify-center items-start md:grid-cols-2 md:grid-flow-column lg:grid-cols-3 gap-5">
      <div className="bg-gray-100 p-6 rounded-lg">
        <SearchTicket search={submitForm} />
        {showTickets &&
          tickets.map((ticket) => <TicketBox {...ticket} key={ticket.price} />)
        }
      </div>
      <div className="lg:col-span-2 w-full">
        <GoogleMap />
      </div>
    </Layout>
  );
};

export default Destination;
