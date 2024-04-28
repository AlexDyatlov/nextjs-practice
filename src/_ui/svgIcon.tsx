import clsx from 'clsx';

interface SvgIconProps {
  className?: string;
  name: string;
  size: string;
}

export default function SvgIcon({ className, name, size, ...props }: SvgIconProps) {
  return (
    <svg className={clsx(className)} width={size} height={size} {...props}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
}
