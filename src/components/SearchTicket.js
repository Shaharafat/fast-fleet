/*
 *
 * Title: Search Ticket
 * Description: Ticket Searching Form
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { searchSchema } from '../helpers/schemas';

const SearchTicket = ({search}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(searchSchema)
  });


  return (
    <form onSubmit={handleSubmit(search)}>
      <div className="flex flex-col">
        <label htmlFor="from">From</label>
        <input type="text" name="from" ref={register} className="mt-2 bg-blue-200 p-2"/>
        <p className="text-sm text-red-600 mt-2">{ errors?.from?.message }</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="to">To</label>
        <input type="text" name="to" ref={register} className="mt-2 bg-blue-200 p-2"/>
        <p className="text-sm text-red-600 mt-2">{ errors?.to?.message }</p>
      </div>
      <button type="submit" className="w-full py-2 mt-2 text-lg text-white bg-green-500 hover:bg-green-600">Search</button>
    </form>
  )
}

export default SearchTicket
