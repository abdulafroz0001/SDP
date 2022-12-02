import { Paper } from '@material-ui/core'
import React from 'react'
import AdbIcon from './Images/usered.png';
import poster from './Images/xposter.png';
import { Grid, Avatar, TextField, Button, Typography } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import { useShadeInputBaseStyles } from '@mui-treasury/styles/inputBase/shade';
import gradient, { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import './bg.css';

function Login() {
    const styles = useRoundInputBaseStyles();
    const style = { width: "71%", height: "90%", display: 'flex' };
    const paperStyle = { padding: 10, height: '100%', width: '100%', background: 'rgb(187,221,233)' }
    const styles1 = useShadeInputBaseStyles();
    const chubbyStyles = useGradientBtnStyles({ chubby: true });
    const [idValue, setidValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [token, setToken] = useToken();
    const navigate= useNavigate();
    const onLogInClicked = async () => {
        const response = await axios.post('/login', {
            username: idValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        navigate('/');
    }
    return (
        <div className='log'>
            <div>
                <center>
                    <Paper style={style}>
                        <img src={poster} style={{ width: "65%" }} />
                        <Grid>
                            <Paper elevation={15} style={paperStyle}>
                                <Grid align='center'>
                                    <img src={AdbIcon} style={{ width: "50%", height: "100", borderRadius: 150 }} />
                                    <h2>Log In</h2>
                                </Grid>
                                <form >
                                    <InputBase id='id' classes={styles1} style={{ borderRadius: 10 }} value={idValue}
                                        onChange={e => setidValue(e.target.value)} placeholder={'Enter ID'} halfWidth required />
                                    <Box pb={1} />
                                    <br></br>
                                    <InputBase type='password' classes={styles1} style={{ borderRadius: 10 }}
                                        value={passwordValue}

                                        onChange={e => setPasswordValue(e.target.value)}
                                        placeholder={'Enter Password'} halfWidth required />
                                    <Box pb={1} />
                                    <br></br>
                                    <br></br>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Remember me"
                                    /><br></br>
                                    <br></br>
                                    <br></br>
                                    <Link to='/' style={{ textDecoration: 'none' }} >
                                        <Button
                                            disabled={!idValue || !passwordValue}
                                            onClick={onLogInClicked}

                                            classes={chubbyStyles} style={{ background: 'linear-gradient(127.43deg, #00D5C8 100%, #2200AA 0%)', width: "50%", height: "45px", marginBottom: 10 }} >
                                            Log In
                                        </Button></Link>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Typography >
                                        <Link><onclick>Forgot password ?</onclick></Link>
                                    </Typography>
                                </form>
                            </Paper>

                        </Grid>
                    </Paper>
                </center>
            </div>
        </div>
    )
}

export default Login