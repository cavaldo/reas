import React, { useEffect, useState } from 'react';
import Map from '../components/map';
import Districts from '../components/districts';
import '../assets/styles/app.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Texts } from '../texts';
import { requestOptions, url } from '../helper/Post';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    type: string;
    name: string;
    phone: number;
    email: string;
  }

function HomePage() {
    const [region, setRegion] = useState("");
    const [district, setDistrict] = useState("");
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => sendRequest(data);
    
    useEffect(() => {
        console.log(region);
    }, [region])

    function getRegion(e: React.MouseEvent) {
        setRegion((e.target as HTMLElement).id);
        setDistrict("");
    }

    function sendRequest(data: IFormInput){
        const obj = {
            type: data.type,
            region: region,
            district: district,
            personal_data: {
                name: data.name,
                phone: data.phone,
                email: data.email
            }
        };

        requestOptions.body = JSON.stringify(obj);

        // send POST to api
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                navigate("/sent", {
                    state: {
                        res: "success"
                    }
                });
            })
            .catch(err => {
                console.log(err.message);
                
                navigate("/sent", {
                    state: {
                        res: "fail"
                    }
                })
            })
    }

    return (
      <div className="home">
            <h2 className="form_heading">{Texts.heading}</h2>
            <p className="sub_heading">{Texts.sub}</p>
        
            <Map callback={getRegion} />

            {region && <Districts region={region} district={district} setDistrict={setDistrict} setIsOpen={setIsOpen} />}

            {isOpen && 
                <form className="client_info" onSubmit={handleSubmit(onSubmit)}>
                    <div className="button_wrapper">
                        <button className="button_back" onClick={() => { reset(); setIsOpen(false); }}>{Texts.back}</button>
                    </div>
                    
                    <label>{Texts.type}</label>
                    <select {...register("type")}>
                        <option value="byt">byt</option>
                        <option value="dům">dům</option>
                        <option value="pozemek">pozemek</option>
                    </select>

                    <label>{Texts.name} <span>*</span></label>
                    <input {...register("name", {
                            required: Texts.required,
                            maxLength: {value: 30, message: Texts.long + "30."},
                            pattern: {value: /^[a-zA-Z '-]*$/, message: Texts.invalidName}
                        })} />
                    {errors.name && <span>{errors.name.message}</span>}

                    <label>{Texts.phone} <span>*</span></label>
                    <input {...register("phone", {
                            required: Texts.required,
                            maxLength: {value: 16, message: Texts.long + "16."},
                            pattern: {value: /^[0-9 +]+$/, message: Texts.invalidPhone}
                        })} />
                    {errors.phone && <span>{errors.phone.message}</span>}

                    <label>{Texts.email} <span>*</span></label>
                    <input {...register("email", {
                            required: Texts.required, 
                            maxLength: {value: 30, message: Texts.long + "30."},
                            pattern: {value: /[a-zA-Z.]+@[a-zA-Z]+.[a-zA-Z]+$/, message: Texts.invalidEmail}
                        })} />
                    {errors.email && <span>{errors.email.message}</span>}
                    
                    <input className="pointer submit_button" type="submit" />
                </form>
            }
      </div>
    );
}

export default HomePage;