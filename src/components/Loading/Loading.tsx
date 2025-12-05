import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Logo } from "../Logo/Logo";

const Loading = () => {
  useLockBodyScroll();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-[9999]">
      <div className="flex flex-col justify-center items-center gap-2">
        <Logo />
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loading;
