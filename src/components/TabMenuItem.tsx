type TabMenuItemProps = {
  isActive?: boolean;
  label: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function TabMenuItem({ label, isActive, onClick, ...props }: TabMenuItemProps) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center items-center py-[12px] px-[14px]  bg-contentBackground rounded-tl-[6px] rounded-tr-[6px] ${
        isActive ? 'text-primary' : 'text-disabled'
      }`}
      onClick={onClick}
      {...props}>
      {label}
    </button>
  );
}

export default TabMenuItem;
