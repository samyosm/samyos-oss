export interface StepperItemProps {
  children: string,
  variant?: 'incomplete' | 'complete' | 'completing'
}

export const StepperItem = ({variant = 'incomplete', ...props}: StepperItemProps) => {
  const variantClass = {
    'complete': 'border-success-400 text-success-600 bg-success-50',
    'incomplete': 'border-neutral-300',
    'completing': 'font-medium border-other-400 text-other-500 bg-other-50'
  }

  return (
    <li className={"p-3 rounded-lg border " + variantClass[variant]}>{props.children}</li>
  )
}
