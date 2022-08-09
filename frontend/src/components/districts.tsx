import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { List } from '../helper/RegionList'
import { Texts } from '../texts';

interface Props {
    region: string;
    district: string;
    setDistrict: (d: string) => void;
    setIsOpen: (bool: boolean) => void;
}

type Inputs = {
    district: string;
}

function Districts({ region, district, setDistrict, setIsOpen }: Props) {
    const { handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = () => {
        // opens second part of form
        setIsOpen(true);
    }

    function handleRadioClick(e: React.MouseEvent){
        setDistrict((e.target as HTMLInputElement).value);
    }

    const districts = List[region as keyof typeof List].map((district) => {
        return (
            <div key={district}>
                <input className="pointer" type="radio" value={district} name="district" onClick={(e) => handleRadioClick(e)}/>
                <label>{district}</label>
                <br/>
            </div>)
    });

    return (
        <>
            <h3>{Texts.choose_district}</h3>
            <form className="districts_select" onSubmit={handleSubmit(onSubmit)}>
                {districts}

                <div className="button_container">
                    <button type="submit" className="submit_button" disabled={district ? false : true}>{Texts.continue}</button>
                </div>
            </form>
        </>
        
    );
}

export default Districts;

