import { useState } from 'react';
import {Button, Group, Text, Burger, Menu} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
// @ts-ignore
import logo from "../assets/logo.png";
import Divider = Menu.Divider;

const Header = () => {
    const [opened, setOpened] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Group
                className="w-full px-2 py-3 flex flex-row items-center"
                bg="teal"
                justify="space-between"
            >
                {/* Left: Logo and brand name */}
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-white p-1 rounded-2xl">
                        <img src={logo} alt="logo" className="h-[32px]" />
                    </div>
                    <div>
                        <Text size="xl" fw="bold" c="white">
                            XCORPION
                        </Text>
                    </div>
                </div>

                {/* Center: Navigation menu (desktop) or burger (mobile) */}
                {!isMobile ? (
                    <div className="items-center">
                        <ul className="flex flex-row gap-6">
                            <li>
                                <Button radius="xl" variant="transparent" color="white">
                                    Home
                                </Button>
                            </li>
                            <li>
                                <Button radius="xl" variant="transparent" color="white">
                                    Blog
                                </Button>
                            </li>
                            <li>
                                <Button radius="xl" variant="transparent" color="white">
                                    Products
                                </Button>
                            </li>
                            <li>
                                <Button radius="xl" variant="transparent" color="white">
                                    About Us
                                </Button>
                            </li>
                            <li>
                                <Button radius="xl" variant="transparent" color="white">
                                    Contact Us
                                </Button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Burger opened={opened} onClick={() => setOpened(o => !o)} color="white" />
                )}

                {/* Right: Login button (desktop only) */}
                {!isMobile && (
                    <div>
                        <Button radius="xl" size="sm" variant="filled" color="lime">
                            Login
                        </Button>
                    </div>
                )}
            </Group>

            {/* Mobile overlay menu */}
            {isMobile && opened && (
                <div className="fixed inset-0 z-50 bg-white h-fit">
                    {/* Overlay header with close burger */}
                    <div className="flex justify-end p-4">
                        <Burger opened={opened} onClick={() => setOpened(false)} color="black" />
                    </div>
                    {/* Navigation and Login buttons */}
                    <ul className="flex flex-col gap-1 px-4 py-6">
                        <li>
                            <Button fullWidth radius="xl" variant="transparent" color="teal" onClick={() => setOpened(false)}>
                                Home
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth radius="xl" variant="transparent" color="teal" onClick={() => setOpened(false)}>
                                Blog
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth radius="xl" variant="transparent" color="teal" onClick={() => setOpened(false)}>
                                Products
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth radius="xl" variant="transparent" color="teal" onClick={() => setOpened(false)}>
                                About Us
                            </Button>
                        </li>
                        <li>
                            <Button fullWidth radius="xl" variant="transparent" color="teal" onClick={() => setOpened(false)}>
                                Contact Us
                            </Button>
                        </li>
                        <hr/>
                        <li className="mx-auto mt-2">
                            <Button radius="xl" size="sm" variant="filled" color="lime" onClick={() => setOpened(false)}>
                                Login
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
