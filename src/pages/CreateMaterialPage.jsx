import Container from "@mui/system/Container"
import CreateMaterial from "../components/CreateMaterial"
import { useAuthContext } from "../contexts/AuthContextProvider"

const CreateMaterialPage = () => {
    const { currentUser } = useAuthContext()

    return (
        <Container>

            <CreateMaterial />
        
        </Container>
        
    )
}

export default CreateMaterialPage