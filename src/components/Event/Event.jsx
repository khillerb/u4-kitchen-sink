import React, {useState} from 'react';
import calendarService from '../../utils/calendarService'

const Event = (props) => {
    const [viewMode, setViewMode] = useState(true);
    const [change, setChange] = useState({})
    const [formData,setFormData] = useState({})
    const handleSubmit = () => {
        console.log(formData)
        calendarService.updateEvent(formData).then(res => setChange(!change))
    }
    return(
        viewMode ? (
            <div className="card border-info bg-svg">
                <div className="card-header"></div>
                <img className="card-img-top" alt=""></img>
                <div className="card-body bg-cleanup">
                        <h5 className="card-title"> {props.event.title} </h5>
                        <p className="card-text"> {props.event.start} </p>
                        <p className="card-text"> {props.event.description} </p>
                        <button href="#" onClick={()=>props.onDelete(props.event._id)} className="btn btn-danger btn-outline-warning"> Delete </button>
                    <button href="#" className="btn btn-light btn-outline-info" onClick={()=>setViewMode(false)}> Update </button>
                </div>
            </div> 
        ) : (
            <div className="card border-info bg-svg">
                <div className="card-body">
                <form onSubmit={()=> handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="text" className="col-4 col-form-label"></label> 
                        <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">Title</div>
                            </div> 
                            <input id="text1" name="title" type="text" onChange={ evt => setFormData({...formData, ...{_id: props.event._id,title: evt.target.value}})} className="form-control"></input>
                        </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="text1" className="col-4 col-form-label"></label> 
                        <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">Start</div>
                            </div> 
                            <input id="text1" name="start" type="datetime" onChange={ evt => setFormData({...formData, ...{start: evt.target.value}})} className="form-control"></input>     
                        </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="text2" className="col-4 col-form-label"></label>
                        <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">End</div>
                            </div> 
                            <input id="text2" name="end" type="datetime" onChange={ evt => setFormData({...formData, ...{end: evt.target.value}})} className="form-control"></input>
                        </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="text3" className="col-4 col-form-label"></label> 
                        <div className="col-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <div className="input-group-text">Description</div>
                            </div> 
                            <input id="text3" name="description" type="text" onChange={ evt => setFormData({...formData, ...{description: evt.target.value}})} className="form-control"></input>
                        </div>
                        </div>
                    </div> 
                    <div className="form-group row">
                        <div className="offset-4 col-8">
                        <button name="submit" type="submit" className="btn btn-primary" onClick={()=>{setViewMode(true)}}>Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    )
} 

export default Event;