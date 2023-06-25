// mui
import { Box } from '@mui/material'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader = ({ children }) => {
    return (
            <TableHead> 
                <TableRow
                    sx={{ 
                        px: '1rem',
                        color: '#7b7b7b', 
                        fontSize: '14px', 
                        textTransform: 'upperCase',
                        fontWeight: 600,
                        cursor: "default" ,
                        height:'40px', 
                        backgroundColor: '#e0e0e0',
                    }}
                >
                { children }
                </TableRow> 
            </TableHead>
    )
}

export default TableHeader