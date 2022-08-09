import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Texts } from '../texts';

// TODO

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
      <div className="request-sent">
        { state.res === 'success' ? <div>Success</div> : <div>Fail</div>}

        <button className="button_back" onClick={redirectToHome}>{Texts.backToHome}</button>
      </div>
    );
}

export default SuccessPage;
