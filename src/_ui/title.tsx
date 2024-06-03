import clsx from 'clsx';

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  children: React.ReactNode;
  className: string;
}

export default function Title({ tag = 'p', children, className }: TitleProps) {
  const TagName = tag;

  return (
    <TagName
      className={clsx(
        {
          h1: tag === 'h1',
          h2: tag === 'h2',
          h3: tag === 'h3',
          text: tag === 'p'
        },
        className
      )}
    >
      {children}
    </TagName>
  );
}
