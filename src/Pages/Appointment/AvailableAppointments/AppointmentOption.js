import React from 'react';

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
    const {name,slots}=appointmentOption;
    return (
        <div className="card shadow-xl mt-10">
            <div className="card-body text-center">
                <h2 className="text-center text-secondary text-2xl font-bold">{name}</h2>
                <p>{slots.length>0?slots[0]:'try another day'}</p>
                <p>{slots.length}{slots.length>1?' spaces':' space'} available</p>
                <div className="card-actions justify-center">
                    <label 
                    disabled={slots.length===0}// disabled booking button when slot is 0
                    htmlFor="booking-modal" 
                    onClick={()=>setTreatment(appointmentOption)}
                    className="btn btn-primary text-white"
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;