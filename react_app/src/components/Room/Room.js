import React from 'react';
import './RoomsList';





const Room = (props) => {

 


   const getID=(clicked_id)=> {
    
   
     props.setid(clicked_id)
     props.setModalIsOpen(true)



    }


  return (
    <li className="Room__item">
      <div className="room">
        <div className="room__image">
          <img src={'http://localhost:3000/' + props.item.imageUrl} />
        </div>
        <div className="room__content">
          <div className="room__title">{props.item.name}</div>

          <div className="room__title">Capacity of room : {props.item.capacity}</div>

          <button
            className="btn btn--block room__btn"
            onClick={
            
              () => getID(props.item.id)
            }
          >
            Reserve
          </button>
        </div>
      </div>
    </li>
  );
};

 export default Room;
