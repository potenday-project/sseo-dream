import Logo from './Logo';

function SplashScreen() {
  return (
    <div className="left-0 top-0 right-0 bottom-0 absolute flex flex-col items-center justify-center bg-background-dark animate-splashFadeOut">
      <Logo />
      <div className="pt-5 font-base">당신의 마음을 써드림</div>
    </div>
  );
}

export default SplashScreen;
