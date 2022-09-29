import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Result from './Result';
function Sem2() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="CTOOD" code="21CS2214AA	" grade="+A" msg="Passed" type="success" />
                        </Grid>
                        <Grid xs>
                            <Result name="DS" code="21CS2109AA	" grade="+A" msg="Passed"  type="success"/>
                        </Grid>
                        <Grid xs>
                            <Result name="COA" code="21CS2212RA	" grade="+A" msg="Passed" type="success" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="MFE" code="21TS2202AA	" grade="+A" msg="Failed"  type="error"/>
                        </Grid>
                        <Grid xs>
                            <Result name="DTW-2" code="21CS2204RA	" grade="+A" msg="Passed"  type="success"/>
                        </Grid>
                        <Grid xs>
                            <Result name="EP" code="21CS2204RA	" grade="+A" msg="Passed" type="success" />
                        </Grid>
                        
                    </Grid>

                </Stack>
            </Box>
        </div>
    )
}

export default Sem2