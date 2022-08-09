import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Texts } from '../texts';

interface StateType {
    res: string;
  }

function SuccessPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as StateType;
    console.log(state.res);

    function redirectToHome() {
        navigate('/');
    }

    return (
      <div className="request_sent">
        { state.res === 'success' ? 
            <div className="text">{Texts.success}</div> 
        : 
            <div className="text">{Texts.fail}</div>}

        <div className="button_wrapper">
            <button className="button_back" onClick={redirectToHome}>{Texts.backToHome}</button>
        </div>
      </div>
    );
}

export default SuccessPage;