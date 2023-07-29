import Image from "next/image";
import logo from "../../public/images/logo.webp";

export default function ComingSoon() {
  return (
    <main className="w-full select-none bg-black ">
      <div className="shade h-screen bg-coming_soon bg-cover lg:w-2/5"></div>
      <section className=" absolute top-0 flex h-screen w-full flex-col justify-between px-6 pt-8 md:pt-12 lg:pl-[45%] ">
        <Image
          className="mx-auto w-[200px] md:mx-0 lg:mx-0 "
          src={logo}
          alt="tedx rit image"
        />
        <div className="pb-28 text-white md:pb-[30%] lg:pb-[40%]">
          <p className="text-[70px]/[90%] font-extralight md:text-[85px]/[110%] lg:font-thin">
            COMING <span className="text-primary">SOON</span>
          </p>
          <div className="max-w-xs md:max-w-md lg:max-w-sm">
            <p className=" text-[16px]/[120%] font-light md:text-[28px] lg:text-[20px]">
              Stay tuned for the upcoming TEDx event at{" "}
              <span className="cursor-default duration-300 hover:text-primary hover:ease-out">
                RIT, Kottayam.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
