import Logo from '../components/Logo';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] pt-[240px]">
      <Logo />
      <div className="font-base text-font dark:text-font-dark">써드림 서비스 한줄 설명</div>
    </div>
  );
}

export default HomePage;
