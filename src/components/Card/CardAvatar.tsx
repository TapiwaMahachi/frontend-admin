import * as React from 'react';

interface cardAvatarProps
{
    children: React.ReactNode
}
function CardAvatar({ children }: cardAvatarProps)
    : React.ReactElement {
  return (
    <div>
      {children}
    </div>
  );
}

export default CardAvatar;
