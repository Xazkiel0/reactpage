import { Tab } from "@headlessui/react";
import GroupTabs from "../components/GroupTabs";
const Works = () => {
    return (
        <div>
            <div className="w-full space-y-4">
                <div className="grid h-96 grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-y-4 md:gap-4">
                    <div className="border md:col-span-2 lg:col-auto"></div>
                    <div className="border col-span-3"></div>
                </div>
                <div className="h-screen grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
                    <GroupTabs/>
                    <div className="border col-span-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Works;