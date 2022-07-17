import { Tab } from "@headlessui/react";
const GroupTabs = () => {
    return (
        <div className="flex flex-col col-span-2 gap-4">
            <Tab.Group>
                <Tab.List className="flex space-x-2 text-center justify-center border h-16 p-1">
                    <Tab className="border w-14">
                        <svg className="fill-" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.968 9.572V7.804C47.9639 6.39855 47.4038 5.05182 46.41 4.05801C45.4162 3.0642 44.0695 2.50408 42.664 2.5H7.304C5.89855 2.50408 4.55182 3.0642 3.55801 4.05801C2.5642 5.05182 2.00408 6.39855 2 7.804V36.092C2.00408 37.4975 2.5642 38.8442 3.55801 39.838C4.55182 40.8318 5.89855 41.3919 7.304 41.396H9.072" stroke="black" stroke-width="3.536" stroke-linejoin="round" />
                            <path d="M49.9581 11.34H15.9219C13.1153 11.34 10.84 13.6152 10.84 16.4219V43.3861C10.84 46.1928 13.1153 48.468 15.9219 48.468H49.9581C52.7648 48.468 55.04 46.1928 55.04 43.3861V16.4219C55.04 13.6152 52.7648 11.34 49.9581 11.34Z" stroke="black" stroke-width="3.536" stroke-linejoin="round" />
                            <path d="M41.4396 24.842C43.3175 24.842 44.8397 23.3306 44.8397 21.4662C44.8397 19.6018 43.3175 18.0904 41.4396 18.0904C39.5618 18.0904 38.0396 19.6018 38.0396 21.4662C38.0396 23.3306 39.5618 24.842 41.4396 24.842Z" stroke="black" stroke-width="3.536" stroke-miterlimit="10" />
                            <path d="M38.0396 38.3208L28.4095 28.7747C27.7939 28.1665 26.9705 27.8144 26.1054 27.7896C25.2404 27.7648 24.3981 28.069 23.7486 28.641L10.84 40.0302" stroke="black" stroke-width="3.536" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29.5399 48.468L42.6441 35.4588C43.2471 34.8641 44.049 34.5139 44.8951 34.4758C45.7412 34.4376 46.5714 34.7142 47.2254 35.2522L55.04 41.7176" stroke="black" stroke-width="3.536" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Tab>
                    <Tab className="border w-14">Icon</Tab>
                    <Tab className="border w-14">Icon</Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel className="h-full columns-3xs gap-3 space-y-3 p-3">
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?city" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?nature" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?cats" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?business" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?room" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?mountain" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="w-full object-cover rounded-lg" src="https://source.unsplash.com/random/?space" />
                            <div className="absolute z-40 right-0 bottom-0 p-2 py-1">
                                <div className="image-controls">
                                    <span className="sr-only">Like Button</span>
                                    <svg className="w-6 hover:fill-red-500 stroke-1 stroke-red-500" fill="none" viewBox="-15 -20 480 450" xmlns="http://www.w3.org/2000/svg">
                                        <g strokeWidth={50}>
                                            <path d="M375.401 217.309L373.206 219.508L359.35 233.365L340.628 252.074L267.788 324.909L253.932 338.769L213.576 379.123L213.495 379.042L213.415 379.123L51.6022 217.309C51.6022 217.309 -52.4272 117.987 36.3715 29.1859C112.89 -47.3312 213.415 55.4989 213.415 55.4989L213.495 55.577L213.576 55.4989C213.576 55.4989 312.834 -46.0499 389.353 30.4672C478.151 119.266 375.401 217.309 375.401 217.309Z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default GroupTabs;