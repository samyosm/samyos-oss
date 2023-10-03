export interface DetailsProps {
  title: string;
  children: React.ReactNode;
}

export const Details = (props: DetailsProps) => {
  return (
    <details className="max-w-3xl mx-auto leading-loose text-xl group">
      <summary className="font-medium group-open:text-sky-600 text-2xl cursor-pointer">
        {props.title}
      </summary>
      <div className="pt-6 space-y-6">
        {props.children}
      </div>
    </details>
  );
};
