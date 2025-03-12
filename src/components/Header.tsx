import {Button, Group, Text} from '@mantine/core';
// @ts-ignore
import logo from "../assets/logo.png"

const Header = () => {

    return (
        <>
            <Group className="w-full px-2 py-3 flex flex-row items-center" bg="teal" justify="space-between">
                {/* Left: Logo and brand name */}
                <div className="flex flex-row items-center gap-2">
                    <div className="bg-white p-1 rounded-2xl">
                        <img src={logo} alt="logo" className="h-[32px]"/>
                    </div>
                    <div>
                        <Text size="xl" fw="bold" c="white">XCORPION</Text>
                    </div>
                </div>

                {/* Center: Navigation menu */}
                <div className="items-center">
                    <ul className="flex flex-row gap-6">
                        <li className="text-white"><Button radius="xl" variant="transparent" color="white">Home</Button>
                        </li>
                        <li className="text-white"><Button radius="xl" variant="transparent" color="white">Blog</Button>
                        </li>
                        <li className="text-white"><Button radius="xl" variant="transparent"
                                                           color="white">Products</Button></li>
                        <li className="text-white"><Button radius="xl" variant="transparent" color="white">About
                            Us</Button></li>
                        <li className="text-white"><Button radius="xl" variant="transparent" color="white">Contact
                            Us</Button></li>
                    </ul>
                </div>

                {/* Right: Login button */}
                <div>
                    <Button radius="xl" size="sm" variant="filled" color="lime">Login</Button>
                </div>
            </Group>

        </>
    );
};

export default Header;
