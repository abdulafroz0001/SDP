import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Result from './Result';
function Resultout() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="DAA" code="21CS2214AA	" grade="+A" />
                        </Grid>
                        <Grid xs>
                            <Result name="OS" code="21CS2109AA	" grade="+A" />
                        </Grid>
                        <Grid xs>
                            <Result name="CNS" code="21CS2212RA	" grade="+A" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="MERN" code="21TS2202AA	" grade="+A" />
                        </Grid>
                        <Grid xs>
                            <Result name="DBMS" code="21CS2204RA	" grade="+A" />
                        </Grid>
                        <Grid xs>
                            <Result name="MP" code="21CS2204RA	" grade="+A" />
                        </Grid>
                    </Grid>

                </Stack>
            </Box>
        </div>
    )
}

export default Resultout