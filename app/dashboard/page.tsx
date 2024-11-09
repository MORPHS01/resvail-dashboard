import Image from "next/image"
import Link from "next/link"
import resvailLogo from "@/public/resvail-boxed-light.svg.svg"
import beta from "@/public/Beta.427afec1.svg.svg"
import search from "@/public/search.svg.svg"
import profilePic from "@/public/profilePic.png"
import extend from "@/public/expand.svg.svg"
import lightBulb from "@/public/light-bulb.svg"
import figma from "@/public/figma.svg"
import briefCase from "@/public/briefCase.svg"
import book from "@/public/book.svg"
import arrowBack from "@/public/arrowBack.svg"
import piggyVest from "@/public/piggyVest.png"
import download from "@/public/download.svg"
import globe from "@/public/globe.svg"

import image1 from "@/public/images/image1.jpg"
import image2 from "@/public/images/image2.jpg"
import image3 from "@/public/images/image3.jpg"
import image4 from "@/public/images/image4.jpg"
import image5 from "@/public/images/image5.jpg"
import image6 from "@/public/images/image6.jpg"
import image7 from "@/public/images/image7.jpg"
import image8 from "@/public/images/image8.jpg"
import image9 from "@/public/images/image9.jpg"

import checkmark from "@/public/checkmark.svg"


function Dashboard() {
  return (
    <main>
        <nav className="py-5 flex justify-between w-[90%] mx-auto items-center bg-white">
            <div className="flex gap-1 items-center">
                <Image src={resvailLogo} alt="resvailLogo" />
                <p className="font-[600] text-[21px] ">Resvail</p>
                <Image src={beta} alt="beta" />
            </div>

            <div className="relative flex items-center w-[35%] max-md:w-[190px] max-sm:w-[140px]">
                <input type="text" placeholder="Search here..." className="search rounded-full px-10 py-[13px] border-[1px] border-slate-400 w-[100%] max-md:pr-4"/>
                <Image src={search} alt="searchIcon" className="absolute left-3"/>
            </div>

            <div className="flex gap-2 items-center max-md:gap-[2px]">
                <Image src={profilePic} alt="profilePic" className="max-md:w-[33px]"/>
                <Image src={extend} alt="extend" className="max-sm:hidden"/>
            </div>
        </nav>

        <section className="flex max-[1000px]:flex-col">
            <div className="flex flex-col w-[135px] max-[1000px]:flex-row max-[1000px]:w-auto max-[1000px]:justify-between">
                <div className="py-7 text-center bg-navcolour/10 flex flex-col justify-center items-center gap-3 border-l-[4px] border-l-navcolour max-[1000px]:py-3 max-[1000px]:w-[25%] max-[1000px]:px-auto max-[1000px]:border-l-0 max-[1000px]:border-b-[4px]  max-[1000px]:border-b-navcolour">
                    <Image width={20} src={lightBulb} alt="lightBulb" />
                    <p className="text-navcolour font-[600] text-[12px]">Inspiration</p>
                </div>

                <div className="py-7 text-center flex flex-col justify-center items-center gap-3 navColor max-[1000px]:py-3 max-[1000px]:px-auto max-[1000px]:w-[25%]">
                    <Image width={20} src={figma} alt="figma" />
                    <p className="font-[600] text-[12px]">UI Components</p>
                </div>

                <div className="py-7 text-center flex flex-col justify-center items-center gap-3 navColor max-[1000px]:py-3 max-[1000px]:px-auto max-[1000px]:w-[25%]">
                    <Image width={20} src={briefCase} alt="briefCase" />
                    <p className="font-[600] text-[12px]">Job Board</p>
                </div>

                <div className="py-7 text-center flex flex-col justify-center items-center gap-3 navColor max-[1000px]:py-3 max-[1000px]:px-auto max-[1000px]:w-[25%]">
                    <Image width={20} src={book} alt="book" />
                    <p className="font-[600] text-[12px]">Courses</p>
                </div>        
            </div>



            <div className="generalbg w-full px-[55px] py-[30px] max-md:px-[30px]">
                <Link href="/">
                    <div className="text-breadCrumbColor flex items-center gap-3 cursor-pointer hover:text-linkColor mb-[30px]">
                        <Image width={17} src={arrowBack} alt="arrowBack"/>
                        <p className="font-[600] text-[20px] ">Back to Inspiration</p>
                    </div>
                </Link>

                <div className="flex justify-between items-center mb-[20px]">
                    <div className="flex gap-4">
                        <Image src={piggyVest} alt="piggyVest"/>
                        <div>
                            <p className="font-[600] text-[24px] leading-[32px] text-blue-950">Piggyvest</p>
                            <p className="text-vest">The Better Way to Save & Invest</p>
                        </div>
                    </div>
                    <p className="bg-tag py-2 px-6 rounded-md max-sm:hidden">Finance</p>
                </div>

                <div className="flex gap-6 items-center mb-[20px] max-sm:flex-col">
                    <div className="flex items-center cursor-pointer text-blue-950 bg-white px-10 py-4 rounded-md border-[1px] border-slate-300 max-sm:w-full max-sm:justify-center">
                        <p className="font-[500] hover:text-royalPurple mr-3">Download all Screens</p>
                        <Image src={download} alt="download"/>
                    </div>

                    <div className="flex items-center cursor-pointer text-blue-950 bg-white px-12 py-4 rounded-md border-[1px] border-slate-300 max-sm:w-full max-sm:justify-center">
                        <p className="font-[500] hover:text-royalPurple mr-3">Visit Website</p>
                        <Image src={globe} alt="globe"/>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-[25px]">
                    <div className="flex justify-start items-center gap-7 max-[480px]:gap-[10px]">
                        <p className="text-navcolour leading-[24px] font-[500] text-[16px] py-3 border-b-[3px] border-b-navcolour max-[480px]:text-[13px]">Product Screens</p>
                        <p className="text-gray-600 leading-[24px] font-[500] text-[16px] py-3 max-[480px]:text-[13px]">Marketing Screens</p>
                        <p className="text-gray-600 leading-[24px] font-[500] text-[16px] py-3 max-[480px]:text-[13px]">Email Screens</p>
                    </div>
                    <p className="text-tinytext/55 text-[14px] max-[660px]:hidden">Showing 195 of 195 screens</p>
                </div>


                <div className="mb-[20px] flex justify-between items-center gap-5 max-[560px]:flex-col max-[560px]:items-start">
                    <div className="relative flex items-center flex-grow max-[560px]:w-[100%]">
                        <input type="text" placeholder="Search product screens..." className=" bg-white rounded-md px-10 py-3 border-[1px] border-slate-400 w-[100%]"/>
                        <Image src={search} alt="searchIcon" className="absolute left-3"/>
                    </div>
                    <div className="bg-white rounded-md px-6 py-3 border-[1px] border-slate-400 w-auto flex items-center">
                        <p className="text-gray-700 font-[500] mr-3">Filter by Screens</p>
                        <Image src={extend} alt="extend"/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between mb-[45px] gap-y-5">
                    <Image src={image1} alt="image1" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image2} alt="image2" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image3} alt="image3" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image4} alt="image4" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image5} alt="image5" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image6} alt="image6" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image7} alt="image7" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image8} alt="image8" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                    <Image src={image9} alt="image9" className="rounded-lg w-[32%] max-md:w-[46%] max-sm:w-[100%]"/>
                </div>

                <div className="mb-[20px] bg-white rounded-xl relative w-full py-[40px]">
                    <div className="flex justify-center">
                        <p className="absolute -top-5 py-2 max-[480px]:px-4 max-sm:text-[480]:text-[14px] px-8 font-[600] text-[18px] text-blue-950 rainbowBorder bg-white">2,421 search results are hidden<span className="max-[480px]:hidden"> 🤫</span></p>
                    </div>

                    <h1 className="font-[700] text-[40px] leading-[48px] text-center text-gray-800 w-[40%] max-lg:w-[50%] max-md:w-[65%] max-sm:w-[80%] mx-auto mb-[25px]">Upgrade to <span className="text-royalPurple">Pro Plan</span> to access all result</h1>

                    <div className="flex items-center justify-between generalbg font-[600] rounded-lg text-gray-700 w-[400px] max-lg:w-[50%] max-md:w-[77%] max-sm:w-[90%] max-[500px]:text-[12px] mx-auto py-2 px-3 mb-[25px]">
                        <p className="border-[2px] border-royalPurple p-3 rounded-md bg-white cursor-pointer">Pay monthly</p>
                        <p className="cursor-pointer">Pay Quarterly</p>
                        <p className="cursor-pointer">Pay Annually</p>
                    </div>

                    <div className="flex justify-center gap-7 text-gray-600 max-[910px]:flex-col max-[910px]:items-center">
                        <div className="w-[365px] rounded-lg generalbg border-[1px] border-gray-300 py-6 px-5 max-[550px]:w-[90%]">
                            <p className="mb-7">Free plan</p>
                            <p className="mb-7"><span className="font-[600] text-[41px] leading-[52px] text-gray-900 mr-1">₦0</span><span className="font-[500] text-[14px] leading-[21px]">per month</span></p>
                            <p className="mb-12 w-[80%] max-[550px]:w-[90%]">For anyone who wants to try making their first demos.</p>
                            <p className="font-[600] text-gray-900 mb-5">FEATURES</p>
                            <ul className="mb-14">
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Limited search result</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Limited access to Job posts</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Limited access to UI Components</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Limited access to Inspiration library</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Limited access to Design Knowledge</li>
                            </ul>
                            <button className="bg-gray-300 rounded-full w-full py-3 font-[600] text-white">Current plan</button>
                        </div>

                        <div className="w-[365px] rounded-lg border-[1px] border-purple-600 py-6 px-5 max-[550px]:w-[90%]">
                            <div className="flex justify-between items-center mb-7">
                                <p>Pro Plan</p>
                                <p className="bg-purple-50 text-purple-600 rounded-full py-1 px-2 text-[12px] font-[500] border-[1px] border-purple-200">Popular</p>
                            </div>
                            <p className="mb-7"><span className="font-[600] text-[41px] leading-[52px] text-gray-900 mr-1">₦5,000</span><span className="font-[500] text-[14px] leading-[21px]">per month</span></p>
                            <p className="mb-12 w-[80%] max-[550px]:w-[90%]">Find unlimited inspirations, UI components, Jobs, Design Knowledge.</p>
                            <p className="font-[600] text-gray-900 mb-5">FEATURES</p>
                            <ul className="mb-14">
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Unlimited search result</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Full access to Job posts</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Full access to UI Components</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Full access to Inspiration library</li>
                                <li className="flex items-center mb-3"><span className="mr-4 pl-1"><Image src={checkmark} alt="checkmark"/></span>Full access to Design Knowledge</li>
                            </ul>
                            <button className="bg-purple-600 rounded-full w-full py-3 font-[600] text-white">Get started</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
  )
}

export default Dashboard