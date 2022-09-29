import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Result from './Result';
function Sem3() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="DAA" code="21CS2214AA	"  type="info" msg="Pending" />
                        </Grid>
                        <Grid xs>
                            <Result name="OS" code="21CS2109AA	" type="info" msg="Pending"  />
                        </Grid>
                        <Grid xs>
                            <Result name="CNS" code="21CS2212RA	" type="info"  msg="Pending" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs>
                            <Result name="MERN" code="21TS2202AA	" type="info" msg="Pending"  />
                        </Grid>
                        <Grid xs>
                            <Result name="DBMS" code="21CS2204RA	" type="info" msg="Pending"  />
                        </Grid>
                        <Grid xs>
                            <Result name="MP" code="21CS2204RA	"  type="info" msg="Pending" />
                        </Grid>
                    </Grid>

                </Stack>
            </Box>
        </div>
    )
}

export default Sem3