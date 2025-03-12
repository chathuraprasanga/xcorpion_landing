import { Group, Text } from "@mantine/core";
// @ts-ignore
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            <Group
                className="w-full px-2 py-3 flex flex-col md:flex-row items-center text-white justify-center md:justify-between gap-4"
                bg="teal"
            >
                {/* Left: Logo, Brand, and Links */}
                <div className="w-full md:w-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                            <div className="bg-white p-1 rounded-2xl">
                                <img src={logo} alt="logo" className="h-[24px]" />
                            </div>
                            <div>
                                <Text size="md" fw="bold" c="white">
                                    XCORPION
                                </Text>
                            </div>
                        </div>
                        <div className="mt-2">
                            <ul className="text-white text-sm">
                                <li>
                                    - <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    - <a href="#">Terms and Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Other footer sections */}
                <div className="w-full md:w-auto text-center">
                    <Text>Text</Text>
                </div>
                <div className="w-full md:w-auto text-center">
                    <Text>Text</Text>
                </div>
                <div className="w-full md:w-auto text-center">
                    <Text>Text</Text>
                </div>
            </Group>
        </>
    );
};

export default Footer;
