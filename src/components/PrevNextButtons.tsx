import FooterButton from './shared/button/FooterButton';

export default function PrevNextButtons() {
  return (
    <footer className="flex p-4 items-center justify-center mt-auto">
      <FooterButton>이전</FooterButton>
      <FooterButton isActive>다음</FooterButton>
    </footer>
  );
}
