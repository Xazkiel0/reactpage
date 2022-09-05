import GroupTabs from "../../components/GroupTabs";
const works = () => {
    return (
        <div>
            <div className="w-full space-y-4">
                <div className="grid h-96 grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-y-4 md:gap-4">
                    <div className="border md:col-span-2 lg:col-auto">
                    </div>
                    <div className="border col-span-3 p-5">
                        <span className="text-lg font-semibold">About Me</span>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, delectus. Minima quis labore blanditiis sint magnam architecto eos expedita aut maxime, doloremque ipsum? Laudantium a asperiores facere tempora velit fugit voluptatibus suscipit, saepe architecto culpa eum, voluptates modi impedit odio.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4">
                    <GroupTabs/>
                    <div className="border col-span-1"></div>
                </div>
            </div>
        </div>
    );
}

export default works;