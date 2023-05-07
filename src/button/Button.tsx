import className from 'classnames';
import { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }


        `}
      </style>
    </div>
  );
};

export { Button };
