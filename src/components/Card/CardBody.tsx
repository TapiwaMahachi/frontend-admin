import * as React from 'react';

interface cardBodyProps
{
    children: React.ReactNode
}

function CardBody({ children }: cardBodyProps)
:React.ReactElement {
  return (
    <div>
      {children}
    </div>
  );
}

export default CardBody;
