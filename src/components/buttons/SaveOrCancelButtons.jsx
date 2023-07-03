// mui
import Button from '@mui/material/Button'
import Grid from "@mui/material/Unstable_Grid2/Grid2"

const SaveOrCancelButtons = ({ setOpen, success, isSubmitting }) => {
    return (
        <Grid container justifyContent='end'>
            <Grid xs={12} md={4} lg={2.5} 
                order={{ xs: 0, md: 1 }} 
                sx={{ 
                    textAlign: {xs: 'center', md: 'end'}, 
                    marginY: {xs: 4, md: 0} 
                }}
            >
                <Button
                    type="submit"
                    variant='contained'
                    size="large"
                    disabled={isSubmitting ? true : false}
                    sx={{
                        backgroundColor: '#68C37C',
                        width: {xs: '100%', md: '250px'},
                        '&:hover': {backgroundColor: '#47B15E'},
                    }}
                >
                    Spara
                </Button>
            </Grid>

            <Grid xs={12} md="auto">
                <Button 
                    type="button"
                    variant='text'
                    size="large"    
                    disabled={isSubmitting ? true : false}
                    sx={{
                        width: {xs: '100%', md: 'fit'},
                        '&:hover': {backgroundColor: 'transparent'},
                    }}
                    onClick={() => setOpen(true)}
                >
                    Avbryt
                </Button>
            </Grid>
        </Grid>
    )
}

export default SaveOrCancelButtons