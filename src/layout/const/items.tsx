import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import GradeIcon from "@mui/icons-material/Grade";

type Children = {
    name: string;
    href: string;
}

interface Item {
    name: string;
    icon?: JSX.Element;
    children?: Children[];
    href: string;
}

export const items: Item[] = [
    {
        name: 'Inventario',
        icon: <InventoryIcon color="primary"  />,
        children: [
            { name: 'Productos', href: '/backoffice/products'},
            { name: 'Categorias', href: '/backoffice/categories'},
            { name: 'Revision', href: '/backoffice/review'},
            { name: 'Stock', href: '/backoffice/stock'},
        ],
        href: ''
    },
    {
        name: 'Clientes',
        icon: <GroupIcon color="primary" />,
        href: '/backoffice/clients'
    },
    {
        name: 'Ordenes',
        icon: <GradeIcon color="primary" />,
        href: '/backoffice/orders'
    }

]


