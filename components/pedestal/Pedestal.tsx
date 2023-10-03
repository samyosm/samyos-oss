export interface PedestalProps {
  title: string;
  emoji: string;
  children: React.ReactNode;
}

export const Pedestal = (props: PedestalProps) => {
  return (
    <div className="flex gap-6">
      <p
        aria-hidden="true"
        className="text-2xl bg-primary-100 w-20 h-20 rounded-2xl flex justify-center items-center"
      >
        {props.emoji}
      </p>
      <div className="space-y-3 flex-1">
        <h3 className="text-neutral-900 text-xl font-medium">{props.title}</h3>
        <p>{props.children}</p>
      </div>
    </div>
  );
};
