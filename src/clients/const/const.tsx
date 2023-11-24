import GroupAddIcon from "@mui/icons-material/GroupAdd";

type Title = 'Clientes registrados' | 'Clientes desactivados' | 'Media de edad'

export interface CardInfo {
    icon: JSX.Element,
    title: Title,
    subtitle: string,
    value: number

}

export const cardsInfo: CardInfo[] = [ 
    {
        icon : <GroupAddIcon />,
        title: 'Clientes registrados',
        subtitle: 'Total de clientes registrados',
        value: 0
    },
    {
        icon : <GroupAddIcon />,
        title: 'Clientes desactivados',
        subtitle: 'Cantidad total',
        value: 0
    },
]