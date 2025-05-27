import logoImg from "./assets/logo.svg";
import heroImage from "./assets/tablet/image-hero.png";
import heroImageLeft from "./assets/desktop/image-hero-left.png";
import heroImageRight from "./assets/desktop/image-hero-right.png";
import womenVidImage from "./assets/desktop/image-woman-in-videocall.jpg";
import womenChatImage from "./assets/desktop/image-women-videochatting.jpg";
import manMeetingImage from "./assets/desktop/image-men-in-meeting.jpg";
import manTextingImage from "./assets/desktop/image-man-texting.jpg";
import footerImage from "./assets/mobile/image-footer.jpg";
import footerImageTablet from "./assets/tablet/image-footer.jpg";
import footerImageDesktop from "./assets/desktop/image-footer.jpg";

function App() {
  return (
    <>
      <img src={logoImg} alt="Logo" className="mx-auto my-12" />
      {/* header Section */}
      <header className="overflow-hidden text-center relative font-redhat font-black text-[40px]/[1.1] tracking-normal lg:flex lg:gap-8">
        <img
          src={heroImage}
          alt="Hero"
          className="w-[116vw] mx-auto max-w-none translate-x-[-8vw] mb-12 lg:hidden"
        />
        <img src={heroImageLeft} alt="Hero Left" className="hidden lg:block" />
        <div>
          <h1 className="text-slate-900">Group Chat for Everyone</h1>
          <p className="text-slate-600 text-lg font-medium p-7">
            Meet makes it easy ot connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4 items-center">
            <button className="bg-cyan-600 text-white rounded-4xl text-lg py-4 px-8 w-fit hover:bg-cyan-500 transition duration-300 hover:opacity-80">
              Download <span className="text-cyan-300">v1.3</span>
            </button>
            <button className="bg-purple-600 text-white rounded-4xl text-lg py-4 px-8 w-fit hover:bg-purple-500 transition duration-300 hover:opacity-80">
              What is it?
            </button>
          </div>
        </div>
        <img
          src={heroImageRight}
          alt="Hero Right"
          className="hidden lg:block"
        />
      </header>

      {/* main content */}
      <main className="text-center font-redhat tracking-normal">
        <div className="mx-auto h-20 bg-slate-300 w-0.5 mt-20"></div>
        <div className="mx-auto border-2 border-slate-300 rounded-[50%] w-14 h-14 p-4 text-slate-600 mb-20">
          <p className="text-[16px]/[1.5] font-black">01</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-10">
          <img
            className="rounded-2xl"
            src={womenVidImage}
            alt="women in video call"
          />
          <img
            className="rounded-2xl"
            src={womenChatImage}
            alt="women video chatting"
          />
          <img
            className="rounded-2xl"
            src={manMeetingImage}
            alt="men in meeting"
          />
          <img
            className="rounded-2xl"
            src={manTextingImage}
            alt="men texting"
          />
        </div>
        <p className="text-cyan-600 text-xs/[1.1] font-black tracking-[4px]">
          BUILT FOR MODERN USE
        </p>
        <h2 className="text-slate-900 text-[32px]/[1.1] md:text-[36px] lg:text[40px] font-black my-4">
          Smarter meetings, all in one place
        </h2>
        <p className="text-slate-600 font-medium text-[16px]/[1.5] lg:text-[18px] p-4">
          Send messages, share files, show your screen, and record your meetings
          - all in one workspace. Control who can join with invite - only team
          access, data encryption, and data export.
        </p>
      </main>

      {/* footer */}
      <footer className="text-center font-redhat tracking-normal relative overflow-hidden">
        <div className="mx-auto h-20 bg-slate-300 w-0.5 mt-15"></div>
        <div className="mx-auto border-2 bg-white border-slate-300 rounded-[50%] w-14 h-14 p-4 text-slate-600 mb-10">
          <p className="text-[16px]/[1.5] font-black">02</p>
        </div>
        <img
          src={footerImage}
          alt="Footer"
          className="absolute inset-0 -z-10 top-27 md:hidden"
        />
        <img
          src={footerImageTablet}
          alt="Footer Tablet"
          className="hidden md:block lg:hidden w-full absolute inset-0 -z-10 top-27"
        />
        <img
          src={footerImageDesktop}
          alt="Footer Desktop"
          className="hidden lg:block w-full h-full absolute inset-0 -z-10 top-27"
        />
        <div className="absolute inset-0 bg-cyan-600 opacity-90 -z-5 top-27"></div>
        <h2 className="text-white text-[32px]/[1.1] md:text-[36px] lg:text-[40px] font-black mx-4">
          Experience more together
        </h2>
        <p className="text-white font-medium text-[16px]/[1.1] lg:text-[18px] p-10">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className="rounded-4xl bg-purple-600 py-5 px-7 text-white font-black text-[16px]/[1.5] mb-20 hover:bg-purple-500 transition duration-300 hover:opacity-80">
          Download <span className="text-purple-300">v1.3</span>
        </button>
      </footer>
    </>
  );
}

export default App;
