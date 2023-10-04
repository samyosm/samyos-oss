import {StepperItem} from "@/components/stepper/StepperItem";

export interface StepperProps {
  items: string[]
  current: number
}

const getVariant = (current: number, idx: number) => {
  if (current === idx) {
    return 'completing';
  } else if (current > idx) {
    return 'complete';
  } else {
    return 'incomplete'
  }
}

export const Stepper = (props: StepperProps) => {
  return (
    <ol className="p-2 space-y-2">
      {props.items.map((item, idx) => (
        <StepperItem
          key={item}
          variant={getVariant(props.current, idx)}
        >
          {item}
        </StepperItem>)
      )}
    </ol>
  )
}