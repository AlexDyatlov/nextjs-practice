import clsx from 'clsx';

interface MessageProps {
  className?: string;
  text: string;
  tag?: 'span' | 'p';
  status?: 'error' | 'success';
}

export default function Message({ className, text, tag = 'p', status }: MessageProps) {
  const TagName = tag;

  return (
    <TagName
      className={clsx(className, 'message', {
        'message--error': status === 'error',
        'message--success': status === 'success'
      })}
    >
      {text}
    </TagName>
  );
}
