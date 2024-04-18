interface SvgIconProps {
  name: string;
  size: string;
}

export default function SvgIcon({ name, size, ...props }: SvgIconProps) {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
}
