import LogoTitle from '../assets/logo-title.svg';
import LogoSymbol from '../assets/logo-symbol.svg';

function Logo() {
  return (
    <div className="inline-flex flex-col items-center gap-[24px] text-heading dark:text-heading-dark">
      <LogoSymbol />
      <LogoTitle />
    </div>
  );
}

export default Logo;
