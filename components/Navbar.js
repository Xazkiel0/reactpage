import Link from "next/link";
import { useState } from "react";
import { ScrollProgress } from "./ScrollProgress";

const Navbar = () => {
    const [lang, setLang] = useState(false)
    const completion = ScrollProgress();
    return (
        <div className="nav-container sticky top-0 backdrop-blur z-50 bg-1-900/75 px-3 py-1 border-b border-b-1-700/70">
            <div className="flex flex-row h-12 items-center text-lg font-semibold justify-between">
                <div className="basis-1/4 nav-left">Logo</div>
                <div className="hidden basis-1/2 nav-center sm:flex flex-row justify-center">
                    <nav className="space-x-6 text-center flex flex-row [&>a]:p-3">
                        <Link href="/story">
                            <a className="transition-all duration-300 ease-in hover:translate-y-3">Story</a>
                        </Link>
                        <Link href="/">
                            <a className="transition-all duration-300 ease-in hover:translate-y-3">Home</a>
                        </Link>
                        <Link href="/works">
                            <a className="transition-all duration-300 ease-in hover:translate-y-3">Works</a>
                        </Link>
                    </nav>
                </div>
                <div className="hidden basis-1/4 nav-center justify-end items-center sm:flex flex-row space-x-4">
                    <div className="lang-choose relative">
                        <div className="flex items-center cursor-pointer" onClick={() => setLang(!lang)}>
                            <div className="cursor-pointer px-2">
                                <svg className="w-6 mr-2  hover:fill-1-200 fill-1-50" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 0H29.9712H29.9279C13.3846 0.0432692 0 13.4567 0 30C0 46.5433 13.3846 59.9567 29.9279 60H30C46.5721 60 60 46.5721 60 30C60 13.4279 46.5721 0 30 0ZM31.1971 17.9567C34.3846 17.8702 37.4712 17.4519 40.4567 16.7308C41.351 20.2644 41.9135 24.3462 42 28.8173H31.1971V17.9567V17.9567ZM31.1971 15.5481V2.59615C34.4279 3.49038 37.7163 7.80288 39.7933 14.4231C37.024 15.0865 34.1538 15.4615 31.1971 15.5481ZM28.8029 2.56731V15.5625C25.8173 15.476 22.9183 15.0865 20.1346 14.4087C22.2404 7.74519 25.5433 3.40385 28.8029 2.56731ZM28.8029 17.9567V28.8029H17.9279C18.0144 24.3317 18.5769 20.25 19.4712 16.7163C22.4712 17.4375 25.601 17.8702 28.8029 17.9567V17.9567ZM15.5048 28.8029H2.4375C2.69712 22.6298 5.00481 16.976 8.68269 12.5048C11.351 13.976 14.1923 15.1875 17.1635 16.0817C16.1827 19.9038 15.6058 24.2163 15.5048 28.8029ZM15.5048 31.1971C15.5913 35.7692 16.1683 40.0962 17.149 43.9183C14.1779 44.8269 11.351 46.024 8.66827 47.4952C4.99038 43.024 2.69712 37.3702 2.42308 31.1971H15.5048ZM17.9279 31.1971H28.8029V42.0288C25.601 42.1154 22.4712 42.5481 19.4712 43.2837C18.5769 39.75 18.0144 35.6683 17.9279 31.1971V31.1971ZM28.8029 44.4375V57.4471C25.5433 56.5962 22.2404 52.2692 20.1346 45.6058C22.9183 44.9135 25.8173 44.524 28.8029 44.4375ZM31.1971 57.4038V44.4231C34.1538 44.5096 37.024 44.899 39.8077 45.5625C37.7163 52.1971 34.4423 56.5096 31.1971 57.4038ZM31.1971 42.0288V31.1971H42C41.9135 35.6538 41.351 39.7356 40.4567 43.2692C37.4712 42.5481 34.3846 42.1154 31.1971 42.0288V42.0288ZM44.4087 31.1971H57.5625C57.3029 37.3702 54.9952 43.0096 51.3173 47.4952C48.6202 46.0096 45.7644 44.7981 42.7644 43.8894C43.7452 40.0673 44.3221 35.7692 44.4087 31.1971V31.1971ZM44.4087 28.8029C44.3221 24.2308 43.7452 19.9183 42.7788 16.0962C45.7788 15.1875 48.6346 13.976 51.3173 12.5048C54.9952 16.976 57.3029 22.6298 57.5625 28.8173H44.4087V28.8029ZM49.6731 10.6587C47.2788 11.9279 44.7692 12.9808 42.1298 13.774C40.7308 9.25962 38.7548 5.58173 36.4327 3.15865C41.5385 4.38462 46.0962 7.03846 49.6731 10.6587V10.6587ZM23.4808 3.1875C21.1587 5.59615 19.1971 9.27404 17.8125 13.7596C15.2019 12.9663 12.7067 11.9279 10.3413 10.6587C13.875 7.05288 18.4038 4.41346 23.4808 3.1875V3.1875ZM10.3269 49.3269C12.6923 48.0577 15.2019 47.0192 17.7981 46.226C19.1971 50.726 21.1587 54.3894 23.4808 56.8125C18.4038 55.5865 13.875 52.9471 10.3269 49.3269V49.3269ZM36.4327 56.8413C38.7692 54.4183 40.7308 50.7404 42.1442 46.2115C44.7837 47.0048 47.2933 48.0577 49.6875 49.3269C46.1106 52.9615 41.5385 55.6154 36.4327 56.8413V56.8413Z" />
                                </svg>
                            </div>
                            <a className="flex flex-nowrap items-center py-2 w-20" id="lang">
                                <span className="lang-select">English</span>
                                <svg className="w-[.9rem] ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                        <div className={`absolute overflow-hidden transition-all duration-500 ease-in right-0 bg-1-900/50 rounded-xl box-content ${lang ? 'max-h-28 p-4' : 'max-h-0 py-0'} `}>
                            <ul className="hover:[&>li]:text-secondary-200">
                                <li>Indonesia</li>
                                <li>China</li>
                                <li>Korea</li>
                            </ul>
                        </div>
                    </div>
                    <div className="misc pl-4 border-1-800 border-l-[1px]">
                        <Link href="/github">
                            <a className="">
                                <svg className="w-6 fill-1-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                    <path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`
                }}
                className={`absolute bottom-0 w-full transition-all duration-150 h-1 bg-2-50`}
            ></span>
        </div>
    );
}

export default Navbar;