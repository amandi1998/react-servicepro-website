import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Find Services that you want</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/carpenting.jpg'
              text='Carpenters typically do the following: Follow blueprints and building plans to meet the needs of clients. Install structures and fixtures, such as windows and molding.'
              label='Carpenting'   /*eldery care*/
              path='/services'
            />
            <CardItem
              src='images/electrition.jpg'
              text='Electrician Responsibilities: Install, maintain and repair electrical control, wiring, and lighting systems. Read technical diagrams and blueprints. Perform general electrical maintenance.'
              label='Electrician'  /*delivery*/
              path='/services'
            />
            <CardItem    /*********************************8888 */
              src='images/plumbing.jpg'
              text='Plumbers install and repair pipes that supply water and gas to,
               as well as carry waste away from, homes and businesses.'
              label='Plumbing'   /*nursing*/
              path='/services'
             />  
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/nursing.jpg'
              text='Nurses plan and provide medical and nursing care to patients in hospital, at home or in other settings who are suffering from chronic health.'
              label='nursing'
              path='/services'
            />
            <CardItem
              src='images/delivery.jpg'
              text='Loading, transporting, and delivering items to clients or businesses in a safe, timely manner.'
              label='Delivery' /*plumbing*/
              path='/services'
            />
            <CardItem
              src='images/plumbing.jpg'
              text='Plumbers install and repair pipes that supply water and gas to,
               as well as carry waste away from, homes and businesses.'
              label='Plumbing'   /*nursing*/
              path='/services'
            />
          
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ac_techniction.png'
              text='Nurses plan and provide medical and nursing care to patients in hospital, at home or in other settings who are suffering from chronic health.'
              label='AC Technician'
              path='/services'
            />
            <CardItem
              src='images/gcutting.jpg'
              text='Landscape or maintain grounds of property using hand or power tools or equipment. Workers typically perform a variety of tasks.'
              label='Grass Cutting' /*plumbing*/
              path='/services'
            />
            <CardItem
              src='images/concrete.jpg'
              text='Also known as Cement Masons, Concrete Laborers specialize in building structures from concrete materials and ensure that concrete is poured correctly.'
              label='Concrete Workers'   /*nursing*/
              path='/services'
            />
          
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
