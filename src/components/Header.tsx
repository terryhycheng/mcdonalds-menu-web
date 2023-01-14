import m_logo from "../assets/mcdonald-logo.svg";
import g_logo from "../assets/mdi_github.svg";

export const Header = () => {
  return (
    <div className="py-8 px-4 border-b-8 border-primary-color">
      <div className="flex justify-center sm:justify-between max-w-[1200px] m-auto">
        <div className="flex gap-4">
          <img
            src={m_logo}
            alt="McDonalds Logo"
            width={50}
            className="object-contain"
          />
          <div>
            <div className="font-bold text-2xl">McDonald's</div>
            <div className="font-light text-sm uppercase tracking-wider">
              Menu Website
            </div>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <a
            href="https://github.com/terryhycheng"
            target="_blank"
            className="flex"
          >
            <img
              src={g_logo}
              alt="GitHub Logo"
              width={36}
              className="object-contain"
            />
          </a>
          <div className="flex flex-col justify-center">
            <div className="font-light text-[10px] uppercase tracking-wider">
              Designed & built by
            </div>
            <div className="font-bold text-md">Terryhycheng</div>
          </div>
        </div>
      </div>
    </div>
  );
};
