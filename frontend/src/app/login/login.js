import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const GET_LOGIN = gql`
        query GetLoginData($password: String, $username: String) {
            login(where: {password: {_eq: $password}, username: {_eq: $username}}) {
                id
            }
        }
    `;

    const [getLogin] = useLazyQuery(GET_LOGIN, {
        variables: { password, username }
    });

    async function submit() {
        let data = await getLogin()
        if (data.error) return `Error! ${data.error.message}`;
        console.log(data.data.login);
    }

    return (
        <>
            <Typography variant="h5" gutterBottom align='center' margin="0">
                Welcome
            </Typography>
            <Typography variant="h5" gutterBottom align='center'>
                Please Login
            </Typography>
            <TextField
                margin='normal'
                id="outlined-username"
                label="Username"
                value={username}
                onChange={handleChangeUsername}
            />
            <TextField
                margin='normal'
                id="outlined-password"
                type={"password"}
                label="Password"
                value={password}
                onChange={handleChangePassword}
            />

            <Box
                display="flex"
                justifyContent="space-around"
                marginTop="10px"
                flexDirection="column"
            >
                <Button variant="outlined" size="large" onClick={() => submit()}>Login</Button>
            </Box>
        </>
    );
}