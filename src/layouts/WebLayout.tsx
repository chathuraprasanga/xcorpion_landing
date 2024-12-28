import { HeaderSearch } from "../components/header/HeaderSearch.tsx";
import { FooterCentered } from "../components/footer/FooterCentered.tsx";
import { Box, Group } from "@mantine/core";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Header: Fixed at the top */}
            <div style={{ flex: '0 0 auto' }}>
                <HeaderSearch />
            </div>

            {/* Main content: Scrollable vertically, no horizontal scroll */}
            <Group style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
                <Outlet />
            </Group>

            {/* Footer: Fixed at the bottom */}
            <div style={{ flex: '0 0 auto' }}>
                <FooterCentered />
            </div>
        </Box>
    );
};

export default WebLayout;
