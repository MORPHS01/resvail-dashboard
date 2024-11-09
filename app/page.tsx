import Image from "next/image";
import Link from "next/link";
import runwayLogo from "@/public/runwayLogo.svg"
import google from "@/public/googleSVG.svg"
import apple from "@/public/appleSVG.svg"

export default function Home() {
  return (
    <main className="flex max-md:block">
      <div className="w-[50%] h-[100vh] background max-md:w-[100%] max-md:h-[45vh]">
        <Image src={runwayLogo} alt="runwayLogo" className=" absolute top-[20px] left-[20px]"/>
        <div className="px-10 mt-[40vh] text-center text-white mx-auto max-md:hidden">
          <h1 className="text-[44px] leading-[48px]">Everything you need, to make anything you want.</h1>
          <p className="pt-5 w-[50%] mx-auto text-[14.5px] leading-[20px]">Dozens of creative tools to ideate, generate and edit content like never before.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[50%] text-center max-md:w-[100%] max-md:py-12 max-md:rounded-2xl max-md:absolute max-md:-bottom-[100px] max-md:bg-white">
        <div className="mb-[30px]">
          <h1 className="text-black font-[600] text-[28px]">Welcome to Runway</h1>
          <p className="text-[13px]">Don&apos;t have an account? <span className="text-[12px] text-linkColor cursor-pointer">Sign up for free</span></p>
        </div>
        <div className="mb-[30px] w-[55%] mx-auto max-md:w-[65%]">
          <input type="email" placeholder="Username or Email" className="rounded-md px-6 py-4 border-[1px] border-slate-400 w-full mb-2"/>
          <input type="password" placeholder="Password" className="rounded-md px-6 py-4 border-[1px] border-slate-400 w-full"/>
        </div>
        <div className="mb-[20px] w-[55%] mx-auto max-md:w-[65%]">
          <Link href="/dashboard"><button className="cursor-pointer bg-black text-white hover:bg-royalPurple rounded-full w-full py-4">Log in</button></Link>
        </div>

        <div className="flex mb-[20px] w-[55%] mx-auto items-center max-md:w-[65%]">
          <hr className="flex-grow border-[1px] border-gray-200"/>
          <p className="text-center px-3">OR</p>
          <hr className="flex-grow border-[1px] border-gray-200"/>
        </div>

        <div className="mb-[30px] w-[55%] mx-auto max-md:w-[65%]">
          <button className="cursor-pointer bg-white text-black border-[1px] border-slate-400 rounded-full w-full py-4 flex items-center justify-center relative mb-4"><span className="absolute left-[20px]"><Image src={google} width={20} alt="googleLogo"/></span>Log in with Google</button>
          <button className="cursor-pointer bg-white text-black border-[1px] border-slate-400 rounded-full w-full py-4 flex items-center justify-center relative mb-4"><span className="absolute left-[20px]"><Image src={apple} width={20} alt="googleLogo"/></span>Log in with Apple</button>
          <button className="cursor-pointer bg-white text-black border-[1px] border-slate-400 rounded-full w-full py-4 flex items-center justify-center">Use Single Sign-On (SS0)</button>
        </div>

        <div>
          <p className="text-tinytext text-[13px] font-[400] cursor-pointer hover:text-linkColor">Forgot Password</p>
        </div>
      </div>
    </main>
  );
}
