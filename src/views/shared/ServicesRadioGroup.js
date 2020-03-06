import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const services = [
    { value: '1부', label: '1부'},
    { value: '2부', label: '2부'},
    { value: '3부', label: '3부'},
    { value: '4부', label: '4부'},
]

const ServicesRadioGroup = ({ service, setService }) => {
    return (
        <RadioGroup
            name='service'
            value={service}
            row
            onChange={(event) => setService(event.target.value)}
        >
            { services.map(service => <FormControlLabel value={service.value} control={<Radio />} label={service.label} />)}
        </RadioGroup>
    )
};

export default ServicesRadioGroup;