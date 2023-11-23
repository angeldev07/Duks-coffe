import {useTheme} from "@emotion/react";
import {Box, Drawer, useMediaQuery} from "@mui/material";
import {SideAvatar} from "./SideAvatar.tsx";
import {NestedList} from "./NestedList.tsx";
import {User} from "../../auth/interfaces/LoginResponse";

interface Props {
    drawerOpen: boolean;
    drawerToggle: () => void;
    window?: () => Window ;
    user: User
}

export const Sidebar = ({drawerOpen, drawerToggle, window, user}: Props) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints!.up("md"));

    const drawer = (
        <>
            <Box
                sx={{
                    width: "268px",
                    height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
                }}
            >
                <SideAvatar name={`${user.firstName} ${user.lastName}`} />
                <NestedList/>
            </Box>
        </>
    );

    const container =
        window !== undefined ? () => window.document.body : undefined;
    return (
        <Box component="aside">
            <Drawer

                container={container}
                variant={matchUpMd ? "persistent" : "temporary"}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                ModalProps={{keepMounted: true}}
                sx={{
                    "& .MuiDrawer-paper": {
                        [theme.breakpoints.up("md")]: {
                            top: "64px",
                        },
                        bgcolor: '#363A41'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};
