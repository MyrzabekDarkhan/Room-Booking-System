import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import DatePicker from 'antd/es/date-picker'; 
import 'antd/dist/antd.css'; 
import './BookForm.scss';




const BookForm = (props)=>{
  
  

   
    const handleSuccess = () => {
     // alert.show('SUCCESFULLY BOOKED!');
      
     alert('booked successfully!');     
      window.location.reload();
    } 
      
     const handleSubmit = (values) => {
      
       
       let data = {
          roomId:props.id,
          userId: 2,
          Subject : values.Subject,
          StartTime: values.time[0].toDate(),
          EndTime: values.time[1].toDate(),
       
       }
      console.log(data);
        
        
        fetch('http://localhost:3000/meetings', {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-type':'application/json',
          },

          body: JSON.stringify(data),
          
        });
       
      }
    
  

    return (
      <div className="meeting-form">
      <Form onFinish={ handleSubmit } layout='horizontal'>
          
         
           <Form.Item
              name="Subject"
              required={true}
              placeholder="Enter title"
              label="title"
              rules={[{ required: true, message: 'Please write your title!' }]}
          >  
          <Input type='text'/>
          </Form.Item>
          
      
            <Form.Item 
            label='choose time' name="time"
            rules={[{ required: true, message: 'Please choose your date!' }]}
            >
              <DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            </Form.Item>
            
            
              <Form.Item>
              <button
            className="btn btn--block room__btn"
            type="primary" 
            onClick={handleSuccess}
          >
            Reserve
          </button>
          <button
            className="btnClose btn--block room__btn"
            onClick={() => {props.secondSetModalIsOpen(false) }}
            >Close Calendar </button>
              </Form.Item>
     
     
          </Form>



        </div>
    )
}
export default BookForm;