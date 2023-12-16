import FooterButton from './shared/button/FooterButton';

type PrevNextButtonsProps = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

export default function PrevNextButtons({ onClickPrev, onClickNext }: PrevNextButtonsProps) {
  return (
    <footer className="flex p-4 items-center justify-center mt-auto">
      <FooterButton onClick={onClickPrev}>이전</FooterButton>
      <FooterButton isActive onClick={onClickNext}>
        다음
      </FooterButton>
    </footer>
  );
}
