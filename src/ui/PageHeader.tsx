import { Paper } from "@mui/material"

interface Props { 
    children?: React.ReactNode 
}


export const PageHeader = ( {children} : Props) => {
  return (
    <Paper sx={{padding: '.8rem 1rem'}} elevation={4}>
        {children}
    </Paper>
  )
}
