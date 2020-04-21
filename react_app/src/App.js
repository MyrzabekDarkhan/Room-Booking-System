import React from 'react';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch,Router } from 'react-router-dom';
import history from './history';

import { connect } from 'react-redux';
import { setRooms } from './redux/actions/room.actions';
import { getRooms } from './redux/effects/room.effects';
import { setMeetings } from './redux/actions/meeting.actions';
import { getMeetings } from './redux/effects/meeting.effects';
import { resetMeetings } from './redux/actions/meeting.actions';

import RoomsList from './components/Room/RoomsList';

import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import Modal from 'react-modal';

import './index';
import Main from './components/Login/Main';
import { setUsers } from './redux/actions/user.actions';
import { getUsers } from './redux/effects/user.effects';

const App = ({
  roomsData,
  getRooms,
  meetingsData,
  getMeetings,
  resetMeetings,
  getUsers,
  usersData,
}) => {
  const [id, setid] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, secondSetModalIsOpen] = useState(false);

  useEffect(() => {
    getRooms();
    getMeetings(id);
    getUsers();
  }, [id]);

  const getData = (id) => {
    const count = parseInt(id);

    return count;
  };

  //const activeUser = 3;

  return (
    <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Main} />

        <Route path="/rooms">
          <RoomsList
        
            setid={setid}
            items={roomsData}
            setModalIsOpen={setModalIsOpen}
            sendData={getData}
          />
          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <button
              className="btnClose btn--block room__btn"
              onClick={() => {
                setModalIsOpen(false);
                resetMeetings();
              }}
            >
              Close Calendar{' '}
            </button>
            <Calendar meetingsData={meetingsData} id={id} />
          </Modal>
        </Route>

        <Route path="/" component={Home}>
          <Home></Home>
        </Route>
      </Switch>
      </Router>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  roomsData: state.rooms.roomsData,
  meetingsData: state.meetings.meetingsData,
  usersData: state.users.usersData,
});

export default connect(mapStateToProps, {
  setRooms,
  getRooms,
  getMeetings,
  setMeetings,
  resetMeetings,
  setUsers,
  getUsers,
})(App);
