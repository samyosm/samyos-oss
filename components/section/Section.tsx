export interface SectionProps {
  class?: string;
  titleClass?: string;
  title: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      <h2
        className={"font-medium text-4xl text-neutral-900 " + props.titleClass}
      >
        {props.title}
      </h2>
      <div className={props.class}>
        {props.children}
      </div>
    </div>
  );
};
