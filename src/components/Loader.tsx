import loadingImage from '../assets/loading-icon.gif';

function Loader() {
  return (
    <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full p-[10px] bg-contentBackground rounded-[6px] rounded-tl-none">
      <div className="flex flex-col items-center justify-center gap-[8px]">
        <div className="w-[137px] h-[137px]">
          <img src={loadingImage} alt="loading" />
        </div>
        <div className="text-base font-light">정성껏 써드리고 있어요</div>
      </div>
    </div>
  );
}

export default Loader;
