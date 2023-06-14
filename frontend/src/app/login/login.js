import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const commonStyles = {
    bgcolor: 'background.paper',
    border: 1,
};

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    function submitLogin() {
        console.log(username, password);
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            width="300px"
        >
            <Box></Box>
            <Box
                display="flex"
                flexDirection="column"
                padding="10px"
                sx={{
                    borderRadius: 2,
                    ...commonStyles, borderColor: 'text.primary'
                }}
            >
                <Typography variant="h5" gutterBottom align='center' margin="0">
                    Welcome
                </Typography>
                <Typography variant="h5" gutterBottom align='center'>
                    Please login
                </Typography>
                <TextField
                    margin='normal'
                    id="outlined"
                    label="Username"
                    value={username}
                    onChange={handleChangeUsername}
                />
                <TextField
                    margin='normal'
                    id="outlined"
                    type={"password"}
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}
                />
                <Box
                    display="flex"
                    justifyContent="space-around"
                    marginTop="10px"
                >
                    <Button variant="outlined" size="large" onClick={() => submitLogin()}>Login</Button>
                </Box>
            </Box>
            <Box></Box>
        </Box>
    )
}