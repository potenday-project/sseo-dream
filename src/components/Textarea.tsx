import Loader from './Loader';

type TextareaProps = {
  placeholder?: string;
  value: string;
  isEditable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
};

function Textarea({ value, placeholder, isEditable, isLoading = false, onChange }: TextareaProps) {
  //= {`relative min-h-[416px] bg-contentBackground rounded-[6px] rounded-tl-none overflow-hidden ${isEditable ? "h-full" ? ""}
  return (
    <div
      className={`relative min-h-[416px] bg-contentBackground rounded-[6px] rounded-tl-none overflow-hidden ${
        isEditable ? 'h-full' : ''
      }`}>
      <textarea
        className="resize-none w-full min-h-[416px] p-[14px] focus:outline-none bg-contentBackground"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={!isEditable}
      />
      {isLoading && <Loader />}
    </div>
  );
}

export default Textarea;
