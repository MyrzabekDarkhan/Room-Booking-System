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
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

class Calendar extends React.Component {

  currentUser = JSON.parse(localStorage.getItem("user"));


  // onUserChange(args) {
  //   this.currentUser = args.value;
  //   console.log(this.currentUser);
  //   this.scheduleObj.refresh();
    
  // }

  // userList = [
  //   { text: 'Arman', value: 1 },
  //   { text: 'Erlan', value: 2 },
  //   { text: 'Kasen', value: 3 },
  //   { text: 'Oral', value: 4 },
  //   { text: 'Miko', value: 5 },
  //   { text: 'Elnar', value: 6 },
  // ];

  // fields = { text: 'text', value: 'value' };

  onEventRendered(args, props) {
    this.changeReadOnly = true;
   // console.log("current"+this.currentUser[6]);
   let  current = this.currentUser.id;
   console.log("thus"+current)
    if (this.changeReadOnly) {
      let datas = this.scheduleObj.eventsData;
     
      for (let i = 0; i < datas.length; i++) {
        //console.log(i);
        if (datas[i].userId === current ) {
          console.log('userito ' + this.currentUser);
          // console.log("meetings one by one"+datas[i]);
          datas[i].IsReadonly = false;
        } else {
          console.log('only read ' + this.currentUser);
          datas[i].IsReadonly = true;
        }
      }
      this.changeReadOnly = false;
    }
  }

  onAction(args, props) {
    if (args.requestType === 'eventChange') {
      let userId = isNullOrUndefined(args.data[0]) ? args.data.userId : args.data[0].userId;

      let Id = isNullOrUndefined(args.data[0]) ? args.data.Id : args.data[0].Id;

      let Subject = args.data.Subject;
      let StartTime = args.data.StartTime;
      let EndTime = args.data.EndTime;
      let updatedData = {
        Subject,
        StartTime,
        EndTime,
      };
      console.log(updatedData);
      fetch('http://localhost:3000/meetings/' + Id, {
        method: 'PUT',
        // mode: 'CORS',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => console.log(res));
    }

    if (args.requestType === 'eventRemove') {
      let Id = isNullOrUndefined(args.data[0]) ? args.data.Id : args.data[0].Id;
      let userId = isNullOrUndefined(args.data[0]) ? args.data.userId : args.data[0].userId;
      console.log(userId);
      // console.log("Appointment ID : " + Id);
      fetch('http://localhost:3000/meetings/' + Id, {
        method: 'DELETE',
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => console.log(res));
    }

    if (args.requestType === 'eventCreate') {
      let data;
      let eventData = args.data[0];
      let eventField = this.scheduleObj.eventFields;

      let roomId = this.props.id;

      let Subject = eventData[eventField.subject];
      let StartTime = eventData[eventField.startTime];
      let EndTime = eventData[eventField.endTime];
      let userId = this.currentUser.id;

      let newData = {
        roomId,
        Subject,
        StartTime,
        EndTime,
        userId,
      };

      console.log(newData);
      fetch('http://localhost:3000/meetings', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },

        body: JSON.stringify(newData),
      });
      window.location.reload();
    }

  }

  onPopupOpen(args) {
    if (args.data.name === 'cellClick') {
      if (args.data.startTime < new Date(new Date().setHours(0, 0, 0, 0))) {
        args.cancel = true;
      }
    } else {
      if (args.data.StartTime < new Date(new Date().setHours(0, 0, 0, 0))) {
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
    let isEventChange = args.requestType === 'eventChange';
    if ((args.requestType === 'eventCreate' && args.data.length > 0) || isEventChange) {
      let eventData = isEventChange ? args.data : args.data[0];
      let eventField = this.scheduleObj.eventFields;
      let startDate = eventData[eventField.startTime];
      let endDate = eventData[eventField.endTime];
      // let resourceIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(eventData.RoomId);
      args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate);
      if (args.cancel === true) {
        alert('Slot is already occupied');
      }
    }
    //}
    if (args.requestType === 'eventCreate') {
      for (var i = 0; i < args.data.length; i++) {
        if (args.data[i].StartTime < new Date(new Date().setHours(0, 0, 0, 0))) {
          args.cancel = true;
        }
      }
    }
  }
}
   

  render() {
    //console.log('from calendar', this.props.meetingsData);
   console.log("idx :"+this.currentUser.id)
    const localData = {
      dataSource: this.props.meetingsData,
    };
    


    return (
      <div className="schedule-control-section">
        {/* <div style={{ width: '300px', margin: '12px' }}>
          <DropDownListComponent
            style={{ padding: '6px' }}
            value={1}
            fields={this.fields}
            dataSource={this.userList}
            change={this.onUserChange.bind(this)}
          ></DropDownListComponent>
        </div> */}

        <div className="col-lg-12 control-section">
          <div className="control-wrapper">
            <ScheduleComponent
              width="100%"
              height="550px"
              currentView="Week"
              selectedDate={new Date(2020, 3, 21)}
              eventSettings={localData}
              eventRendered={this.onEventRendered.bind(this)}
              actionBegin={
                (this.onAction.bind(this))
              }
              // actionComplete={
              //   (this.onActionBegin.bind(this))
              // }
              renderCell={this.onRenderCell.bind(this)}
              popupOpen={this.onPopupOpen.bind(this)}
              ref={(schedule) => (this.scheduleObj = schedule)}
            >
              <ViewsDirective>
                <ViewDirective option="Week" dateFormat="dd-MMM-yyyy" />
                <ViewDirective option="Month" showWeekend={false} />

                <ViewDirective
                  readonly={true}
                  option="Agenda"
                  eventSettings={localData}
                  allowVirtualScrolling={false}
                />
              </ViewsDirective>

              <Inject services={[Week, Month, Day, Agenda]} />
            </ScheduleComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
