import { Paper } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
function Section() {
    const [year, setyear] = React.useState('');
    const [section, setsection] = React.useState('');
    const [ltps, setltps] = React.useState('');

    const handleChangeyear = (event) => {
        
        setyear(event.target.value);
    };
    const handleChange = (event) => {
        setsection(event.target.value);
    };
    const handleChangeclass = (event) => {
        setltps(event.target.value);
    };
    return (
        <div>
            <Paper elevation={12} style={{ background: "rgba(255,255,255,0.8)", marginTop: '10%', paddingTop: '3%', width: '50vw', height: '32.5vw', marginLeft: '25%' }} >

                <h4 className='section' style={{ marinTop: '5%' }} >
                    Select Academic Year
                </h4>
                <FormControl style={{ width: '17vw', marginLeft: '32%', marginTop: '3%',marginBottom:'2%' }}>
                    <InputLabel variant='standard'>Academic Year</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year}
                        label="year"
                        defaultValue={10}
                        onChange={handleChangeyear}
                    >
                        <MenuItem value={10}>2022-2023</MenuItem>
                        <MenuItem value={20}>2021-2022</MenuItem>
                        <MenuItem value={30}>2020-2021</MenuItem>
                        <MenuItem value={40}>2019-2020</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <h4 className='section' style={{ marinTop: '10%' }} >
                        Select Section
                    </h4>
                    <FormControl style={{ width: '17vw', marginLeft: '32%', marginTop: '3%',marginBottom:'2%' }}>
                        <InputLabel variant='standard'>Section</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={section}
                            label="year"
                            defaultValue={10}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>S1</MenuItem>
                            <MenuItem value={20}>S2</MenuItem>
                            <MenuItem value={30}>S3</MenuItem>
                            <MenuItem value={40}>S4</MenuItem>
                        </Select>
                    </FormControl>
                    <h4 className='section' style={{ marinTop: '10%' }} >
                        Select Class
                    </h4>
                    <FormControl style={{ width: '17vw', marginLeft: '32%', marginTop: '3%' }}>
                        <InputLabel variant='standard'>Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ltps}
                            label="year"
                            defaultValue={10}
                            onChange={handleChangeclass}
                        >
                            <MenuItem value={10}>Lecture</MenuItem>
                            <MenuItem value={20}>Tutorial</MenuItem>
                            <MenuItem value={30}>Practical</MenuItem>
                            <MenuItem value={40}>Skill</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Link to='/sec/fatt' style={{textDecoration:'none'}} >
                <button  class="custom-btn btn-6" style={{marginLeft:'75%',marginTop:'2%'}}>
                    Proceed
                </button>
                </Link>
                

            </Paper>




        </div>
    )
}

export default Section