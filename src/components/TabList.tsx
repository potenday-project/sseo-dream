import TabMenuItem from './TabMenuItem';

type TabListProps = {
  tabs: {
    label: string;
    isActive?: boolean;
  }[];
  actions?: React.ReactNode;
  onClick: (index: number) => void;
  disabled: boolean;
};

function TabList({ tabs, actions, disabled, onClick }: TabListProps) {
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="flex gap-[14px]">
          {tabs.map((tab, index) => (
            <TabMenuItem
              key={tab.label}
              label={tab.label}
              isActive={tab.isActive}
              disabled={disabled}
              onClick={() => onClick(index)}
            />
          ))}
        </div>
        <div>{actions}</div>
      </div>
    </div>
  );
}

export default TabList;
