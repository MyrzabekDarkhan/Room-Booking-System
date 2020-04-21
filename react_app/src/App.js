import React from 'react';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { setRooms } from './redux/actions/room.actions';
import { getRooms } from './redux/effects/room.effects';
import { setMeetings } from './redux/actions/meeting.actions';
import { getMeetings } from './redux/effects/meeting.effects';
import { resetMeetings } from './redux/actions/meeting.actions';

import RoomsList from './components/Room/RoomsList';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Login/Register';
import Calendar from './components/Calendar/Calendar';
import Modal from 'react-modal';
import BookForm from './components/BookForm/BookForm';
import './index';
import Main from './components/Login/Main';

const App = ({ roomsData, getRooms, meetingsData, getMeetings,resetMeetings }) => {

  const [id, setid] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, secondSetModalIsOpen] = useState(false);

  useEffect(() => {
    getRooms();
      getMeetings(id);
      

  }, [id]);



   const getData = id => {
  //   console.log(id+'clicked id')
  //   // const save = id
     const count = parseInt(id);
  //   //console.log(count);
  //    //getMeetings(count);
  return count;
   
   };

  const activeUser = 2;



  


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Main} />
      
        <Route path="/rooms">
          
            <RoomsList  setid={setid} items={roomsData} setModalIsOpen={setModalIsOpen} sendData={getData} />
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <button
            className="btnClose btn--block room__btn"
            onClick={() => {setModalIsOpen(false) ; resetMeetings()}}
            >Close Calendar </button>
              <Calendar meetingsData={meetingsData} id={id} activeUser={activeUser} />
            

    
            </Modal>
        
        </Route>

        <Route path="/" component={Home}>
           <Home>

           </Home>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  roomsData: state.rooms.roomsData,
  meetingsData: state.meetings.meetingsData,
});

export default connect(mapStateToProps, { setRooms, getRooms, getMeetings, setMeetings,resetMeetings })(App);
