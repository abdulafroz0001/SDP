import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Result from './Result';
function Sem1() {
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="CTSD" code="21CS2214AA	" grade="+A" type="success" msg="Passed"   />
                        </Grid>
                        <Grid xs>
                            <Result name="DLP" code="21CS2109AA	" grade="+A" type="error" msg="Failed"  />
                        </Grid>
                        <Grid xs>
                            <Result name="MFC" code="21CS2212RA	" grade="+A" type="success" msg="Passed" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="DTW-1" code="21TS2202AA	" grade="+A" type="success" msg="Passed" />
                        </Grid>
                        <Grid xs>
                            <Result name="IPE" code="21CS2204RA	" grade="+A" type="success" msg="Passed" />
                        </Grid>
                        <Grid xs>
                            <Result name="DTI" code="21CS2204RA	" grade="+A" type="success" msg="Passed" />
                        </Grid>
                    </Grid>

                </Stack>
            </Box>
        </div>
    )
}

export default Sem1