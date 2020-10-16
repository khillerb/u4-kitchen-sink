import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tokenService from '../../utils/tokenService'


const UserPage = (props) => {
    const [password, setPassword] = useState({})
    

    return (
        <div className="UserPage">
            <form className="form-horizontal">
                <fieldset>
                    <legend> Change Password </legend>

                    <div className="form-group">
                    <label className="col-md-4 control-label" for="Old Password">Old Password</label>
                        <div className="col-md-4">
                            <input id="oldpass" name="Old Password" type="password" placeholder="" className="form-control input-md" required=""></input>    
                        </div>
                    </div>

                    
                    <div className="form-group">
                    <label className="col-md-4 control-label" for="newpass">New Password</label>
                        <div className="col-md-4">
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
    )
}




export default UserPage;

