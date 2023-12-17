import Logo from './Logo';

function SplashScreen() {
  return (
    <div className="left-0 top-0 right-0 bottom-0 absolute flex flex-col items-center justify-center bg-background-dark animate-splashFadeOut">
      <Logo />
      <div className="font-base">써드림 서비스 한줄 설명</div>
    </div>
  );
}

export default SplashScreen;
