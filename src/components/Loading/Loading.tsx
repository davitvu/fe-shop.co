import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

const Loading = () => {
  useLockBodyScroll();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/40 z-[9999]">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
