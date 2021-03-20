/*
 *
 * Title: Individual Ticket
 * Description: creates individual tickets
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import { faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Icon} from '.'

const TicketBox = ({img,type,person,price}) => {
  return (
    <div className="w-full mt-3 px-3 py-2 bg-blue-300 rounded-md items-center grid grid-cols-4 gap-2 justify-items-center">
      <img src={img} alt={type }/>
      <span className="text-lg font-bold">{type}</span>
      <div>
        <Icon iconName={faUsers} />
        <span className="ml-2 font-bold">{person}</span>
      </div>
      <div className="font-bold text-lg">{price}</div>
    </div>
  )
}

export default TicketBox

