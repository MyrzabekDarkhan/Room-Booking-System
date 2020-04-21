import React from 'react'

import './RoomsList.scss'
import Room from './Room';
class RoomsList extends React.Component{

    render() {
       
        return (


       
            <div className="RoomsList__list">
                    <ul className="rooms">
                { 
                    this.props.items.map(room => 
                        <Room
                          setid = {this.props.setid}
                          setModalIsOpen={this.props.setModalIsOpen}
                            sendData={this.props.sendData}
                            key = {room.id} 
                            item={ room } 
                           
                        />)
                }
                </ul>
            </div>
           
            
        );
    }
}
export default RoomsList;
