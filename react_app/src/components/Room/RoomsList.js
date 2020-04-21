import React from 'react';

import './RoomsList.scss';
import Room from './Room';
import history from '../../history';
class RoomsList extends React.Component {


  goBack() {
 
    history.push("/home");

  }
  render() {
    return (
  
      <div className="RoomsList__list">
        <button className="btn-back" onClick={this.goBack}>Back</button>
        <ul className="rooms">
          {this.props.items.map((room) => (
            <Room
              setid={this.props.setid}
              setModalIsOpen={this.props.setModalIsOpen}
              sendData={this.props.sendData}
              key={room.id}
              item={room}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default RoomsList;
