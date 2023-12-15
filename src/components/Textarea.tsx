type TextareaProps = {
  placeholder?: string;
  value: string;
  isEditable?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ value, placeholder, isEditable, onChange }: TextareaProps) {
  return (
    <div>
      <textarea
        className="resize-none w-full h-[416px] p-[14px] focus:outline-none bg-contentBackground rounded-[6px] rounded-tl-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={!isEditable}
      />
    </div>
  );
}

export default Textarea;
