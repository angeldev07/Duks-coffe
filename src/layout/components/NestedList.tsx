import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {items} from "../const/items";
import {Link} from "react-router-dom";
import {useState} from "react";


export const NestedList = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{width: '100%', maxWidth: 360, bgcolor: '#202226', color: '#fff'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >

            {items.filter(item => item.children).map((item, index) => (
                <div key={index*3}>

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children?.map((child, index) => (
                                <Link key={index + child.name} to={child.href} style={{color: '#fff', textDecoration: 'none'}}>
                                    <ListItemButton sx={{pl: 9}} >
                                        <ListItemText primary={child.name}/>
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
            {items.filter(item => !item.children).map((item, index) => (
                <Link key={index} to={item.href} style={{color: '#fff', textDecoration: 'none'}}>
                    <ListItemButton >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItemButton>
                </Link>
            ))}

        </List>
    );
}
