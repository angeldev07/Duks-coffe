import GroupAddIcon from "@mui/icons-material/GroupAdd";

export interface CardInfo {
    icon: JSX.Element,
    title: string,
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
    // {
    //     icon : <GroupAddIcon />,
    //     title: 'Media de edad',
    //     subtitle: 'Todo el tiempo',
    //     value: 0
    // },
]