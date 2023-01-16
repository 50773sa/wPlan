import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { useAuthContext } from '../../contexts/AuthContextProvider'
import { toast } from 'react-toastify'
// mui
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'


const DialogDelete = ({ open, setOpen, setLoading, projectId }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [error, setError] = useState()
	const navigate = useNavigate()
    const { currentUser } = useAuthContext()

	const handleClose = () => {
		setOpen(false)
		setLoading(false)
	}
  
    const handleDeleteProject = async () => {
        const ref = doc(db, 'projects', projectId)

		setError(null)
		setConfirmDelete(true)

		try {
			await deleteDoc(ref)
			toast.success('Raderat!')
			navigate(`/user/${currentUser.uid}/projects`, { replace: true })
			setOpen(false)
			setLoading(false)
			
		} catch(err){
			setError(err)
			setLoading(false)
		}
	}



    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='500px'
      
            >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{ 
                            display: 'flex', 
                            flexDirection: 'row',
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            margin: '1rem', 
                            backgroundColor: '#ffae0147', 
                            width: '6rem', 
                            height: '6rem', 
                            borderRadius: '50%' 
                        }}
                    >
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            backgroundColor: '#ff590147', 
                            width: '4rem', 
                            height: '4rem', 
                            borderRadius: '50%' 
                        }}
                    >
                            <SaveOutlinedIcon 
                                fontSize='large' 
                                style={{ color: '#ff5901', }}
                            />

                        </div>
                    </div>

                    <div style={{margin: '1rem'}} >
                        <CloseIcon fontSize='large' onClick={handleClose}/>
                    </div>
                </div>
               
                <DialogTitle id="alert-dialog-title">
                    <strong>Vill du radera detta projekt?</strong>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Valet går inte att ändra!
                    </DialogContentText>
                </DialogContent>

                <DialogActions style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
                    <Button  
                        fullWidth
                        variant="contained"
                        onClick={handleClose}
                        style={{ marginBottom: '1rem'}}
                    > 
                        Avbryt
                    </Button>

                    <Button 
                        fullWidth
                        variant="outlined"
                        onClick={handleDeleteProject}
                        style={{ margin: '0'}}
                    >
                        Radera projekt
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogDelete