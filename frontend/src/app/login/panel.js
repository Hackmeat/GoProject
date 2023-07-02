import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Login from './login.js';

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
                    <Login />
                </Box>
            )}
        </div>
    );
}

export default function Panel() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <TabPanel value={value} index={1} kind={"register"}>

                </TabPanel>
                <TabPanel value={value} index={2} kind={"recover"}>

                </TabPanel>
            </Box>
            <Box></Box>
        </Box>
    )
}