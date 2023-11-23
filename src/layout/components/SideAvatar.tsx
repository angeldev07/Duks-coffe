import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
    name: string,
    url?: string
}

export const SideAvatar = ({name, url}: Props) => {
    return (
        <Box component="div" display="flex" flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{padding: '1.5rem 0', gap: '1rem'}}>
            <Avatar alt={name} src={url} sx={{width: '70px', height: '70px'}} />
            <Typography variant="h6" component="h6" sx={{color: '#fff', textAlign: 'center'}}>
                {name}
            </Typography>
        </Box>
    )
}