import {Group, Text} from "@mantine/core";
// @ts-ignore
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <>
            <Group className="w-full px-2 py-3 flex flex-row items-center text-white" bg="teal" justify="space-between">
                <div>
                    <div>
                        <div className="flex flex-row items-center gap-2">
                            <div className="bg-white p-1 rounded-2xl">
                                <img src={logo} alt="logo" className="h-[24px]"/>
                            </div>
                            <div>
                                <Text size="md" fw="bold" c="white">XCORPION</Text>
                            </div>
                        </div>
                        <div className="mt-4">
                            <ul className="text-white text-sm">
                                <li> - <a href="#">Privacy Policy</a> </li>
                                <li> - <a href="#"> Terms and Conditions</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    Text
                </div>
                <div>
                    Text
                </div>

                <div>
                    Text
                </div>
            </Group>
        </>
    )
}
export default Footer;