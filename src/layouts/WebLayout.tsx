import { HeaderSearch } from "../components/header/HeaderSearch.tsx";
import { FooterCentered } from "../components/footer/FooterCentered.tsx";
import { Group } from "@mantine/core";
import { Outlet } from "react-router-dom";

const WebLayout = () => {
    return (
        <>
            <div>
                <HeaderSearch />
            </div>
            <Group>
               <Outlet/>
            </Group>
            <div>
                <FooterCentered />
            </div>
        </>
    );
};

export default WebLayout;
