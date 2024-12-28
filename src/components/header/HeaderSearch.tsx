import { Box, Burger, Drawer, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSearch.module.css";
import { ActionToggle } from "../colorSchemaToggle/ActionToggle.tsx";
import { useLocation, useNavigate } from "react-router";

const links = [
    { link: "/home", label: "Home" },
    { link: "/blogs", label: "Blog" },
    { link: "/products", label: "Products" },
    { link: "/pricing", label: "Pricing" },
    { link: "/about-us", label: "About Us" },
    { link: "/contact-us", label: "Contact Us" },
];

export function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();



    const items = links.map((link) => (
        <Text
            key={link.label}
            className={classes.link}
            onClick={() => navigate(`${link.link}`)}
            bg={pathname === link.link ? "blue" : undefined}
            c={pathname === link.link ? "white" : undefined}
        >
            {link.label}
        </Text>
    ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <Box><img src="/logo.png" className="max-w-10" /></Box>
                    <Text size="xl" className="font-semibold">XCORPION</Text>
                </Group>

                <Group>
                    <Group ml={50} gap={5} className={classes.links} visibleFrom="lg">
                        {items}
                    </Group>
                    <Drawer
                        opened={opened}
                        onClose={toggle}
                        title="Menu"
                        padding="md"
                        size="md"
                    >
                        <div>
                            {items.map((item, index) => (
                                <div key={index} onClick={toggle} style={{ cursor: 'pointer' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </Drawer>
                    <Group>
                        <ActionToggle />
                    </Group>
                </Group>
            </div>
        </header>
    );
}