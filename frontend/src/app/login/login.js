import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const commonStyles = {
    bgcolor: 'background.paper',
    border: 1,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    


    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    function submit() {
        console.log(username, password);
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    justifyContent="center"
                    display="flex"
                    flexDirection="column"
                    height="360px"
                    sx={{ p: 1 }}>
                    <Typography variant="h5" gutterBottom align='center' margin="0">
                        Welcome
                    </Typography>
                    <Typography variant="h5" gutterBottom align='center'>
                        Please {props.kind}
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
                    {children}
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        marginTop="10px"
                        flexDirection="column"
                    >
                        <Button variant="outlined" size="large" onClick={() => submit()}>{props.kind}</Button>
                    </Box>
                </Box>
            )}
        </div>
    );
}

export default function Login() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            width="330px"
        >
            <Box></Box>
            <Box
                display="flex"
                flexDirection="column"
                padding="10px"
                justifyContent="center"
                sx={{
                    borderRadius: 2,
                    ...commonStyles, borderColor: 'text.primary'
                }}
            >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                    <Tab label="Recover" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0} kind={"login"}>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography variant="h5" gutterBottom align='center' margin="0">
                        Welcome
                    </Typography>
                    <Typography variant="h5" gutterBottom align='center'>
                        Please Register
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
                        <Button variant="outlined" size="large" onClick={() => submitLogin()}>Login</Button>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}></TabPanel>
            </Box>
            <Box></Box>
        </Box>
    )
}