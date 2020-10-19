import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tokenService from '../../utils/tokenService';



const UserPage = (props) => {
    const [password, setPassword] = useState({})
    
    const divStyle = {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0"

    };
    const divStyle2 = {
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "0",
        "margin":"0 auto"

    };
    return (
        <div className="UserPage">
            <div className="row">
            <div class="card col-xl-11" style={divStyle2}>
                <form className="form-horizontal" >
                    <fieldset>
                        <legend> Change Password </legend>

                        <div className="form-group">
                        <label className="col-md-6 control-label" for="Old Password">Old Password</label>
                            <div className="col-md-6">
                                <input id="oldpass" name="Old Password" type="password" placeholder="" className="form-control input-md" required=""></input>    
                            </div>
                        </div>

                        
                        <div className="form-group">
                        <label className="col-md-6 control-label" for="newpass">New Password</label>
                            <div className="col-md-6">
                                <input id="newpass" name="newpass" type="password" placeholder="" className="form-control input-md" required=""></input>  
                                
                            </div>
                        </div>

                    
                        <div className="form-group">
                        <label className="col-md-4 control-label" for="confirmpass">Confirm New Password</label>
                        <div className="col-md-4">
                            <input id="confirmpass" name="confirmpass" type="password" placeholder="" className="form-control input-md" required=""></input>  
                            
                        </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-4">
                                <input type="submit" value="Submit" className="btn btn-info"></input>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
            <div className="col-xl-11" style={{"margin":"0 auto", "padding": "0", "border":"0"}}>
                <button type="button" style={divStyle} className="btn btn-lg btn-block btn-light btn-outline-danger" data-toggle="collapse" data-target="#collapseCreate" aria-expanded="false" aria-controls="collapseCreate">Delete User</button>
                <div className="collapse" id="collapseCreate">
                    <div className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1">CONFIRM:</span></div>
                        <input className="btn btn-danger btn-outline-warning" type="button" id="example-text-input" value="DELETE USER"></input>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}




export default UserPage;

