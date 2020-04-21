import * as React from 'react';
import './Calendar.scss';
import {
  ScheduleComponent,
  Week,
  Day,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
  Agenda,
} from '@syncfusion/ej2-react-schedule';
//import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import {isNullOrUndefined } from '@syncfusion/ej2-base';


class Calendar extends React.Component {


onActionUpdateOrDeleteOrCreate(args,props) {

  if (args.requestType === "eventChange") {
    let userId = isNullOrUndefined(args.data[0]) ? args.data.userId : args.data[0].userId;

    let Id = isNullOrUndefined(args.data[0]) ? args.data.Id : args.data[0].Id;
      
       let  Subject = args.data.Subject;   
       let  StartTime = args.data.StartTime;
       let   EndTime = args.data.EndTime;  
      let updatedData={
      
        Subject,
        StartTime,
        EndTime,
      
      };
       console.log(updatedData);
       if( this.props.activeUser === userId){
      fetch('http://localhost:3000/meetings/' + Id, {
        method: 'PUT',
       // mode: 'CORS',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()) // or res.json()
      .then(res => console.log(res))
}else{
  alert("You can't edit foreign meeting!");     
  window.location.reload();
}
  }

if (args.requestType === "eventRemove" ) {
  let Id = isNullOrUndefined(args.data[0]) ? args.data.Id : args.data[0].Id;
 let userId = isNullOrUndefined(args.data[0]) ? args.data.userId : args.data[0].userId;
 console.log(userId)
  console.log("Appointment ID : " + Id);
 // console.log("Appointment userId : " + userId);
  if( this.props.activeUser === userId){
  fetch('http://localhost:3000/meetings/' + Id, {
    method: 'DELETE',
    })
      .then(res => res.json()) // or res.json()
      .then(res => console.log(res))
}else{
  alert("You can't delete foreign meeting!");     
      window.location.reload();
}
}

 if(args.requestType === "eventCreate" ){

  let data;
  let eventData = args.data[0];
  let eventField = this.scheduleObj.eventFields;

  
  let roomId = this.props.id;
 
  let Subject = eventData[eventField.subject];
  let StartTime = eventData[eventField.startTime];
  let EndTime = eventData[eventField.endTime];
  let userId = 2;

  let newData = {
    roomId,
    Subject,
    StartTime,
    EndTime,
    userId,
  }

  console.log(newData);
  fetch('http://localhost:3000/meetings', {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-type':'application/json',
    },

    body: JSON.stringify(newData),
    
  });

 }
}


onPopupOpen(args) { 
  if (args.data.name === "cellClick") { 
    if ((args.data.startTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
      args.cancel = true; 
    } 
  } else { 
    if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
      args.cancel = true; 
    } 
  } 
} 
onRenderCell(args) { 
  if (args.date < new Date(new Date().setHours(0, 0, 0, 0))) { 
    args.element.classList.add('e-disableCell'); 
  } 

} 
onActionBegin(args) { 
  if (args.requestType === "eventChange") { 
    if ((args.data.StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
      args.cancel = true; 
    } 
  } 
  if (args.requestType === "eventCreate") { 
    for (var i = 0; i < args.data.length; i++) { 
      if ((args.data[i].StartTime) < new Date(new Date().setHours(0, 0, 0, 0))) { 
        args.cancel = true; 
      } 
    } 
  } 
} 




  render() {
    console.log("from calendar",this.props.meetingsData);
    
   const  localData = {
    dataSource: this.props.meetingsData,
     
     };

    return (
        
  
    
   
      <ScheduleComponent
        width="100%"
        height="550px"
        currentView="Month"
        selectedDate={new Date(2020, 3, 5)}
        eventSettings={localData}
       actionBegin={
         (this.onActionUpdateOrDeleteOrCreate.bind(this))
      }

        renderCell={this.onRenderCell.bind(this)} 
        popupOpen={this.onPopupOpen.bind(this)} 
     
      ref={schedule => this.scheduleObj = schedule}
        
  
      >
 
        <ViewsDirective>
          <ViewDirective option="Week" dateFormat="dd-MMM-yyyy" />
          <ViewDirective option="Month" showWeekend={false}  />

          <ViewDirective
          readonly = {true}
            option="Agenda"
            eventSettings={localData}
            allowVirtualScrolling={false}
          />
        </ViewsDirective>

        <Inject services={[Week, Month, Day, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default Calendar;
