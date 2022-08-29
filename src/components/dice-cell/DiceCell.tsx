import React from 'react';

import bone1 from '../../assets/icons/bones/1.svg';
import bone2 from '../../assets/icons/bones/2.svg';
import bone3 from '../../assets/icons/bones/3.svg';
import bone4 from '../../assets/icons/bones/4.svg';
import bone5 from '../../assets/icons/bones/5.svg';
import { Background, Wrapper } from './style';

interface DiceCellProps {
  bones: number;
}

const DiceCell: React.FC<DiceCellProps> = ({ bones, children }) => {
  const layout = [bone1, bone2, bone3, bone4, bone5];

  return (
    <Wrapper>
      {bones !== 0 && <Background src={layout[bones - 1]} />}
      {children}
    </Wrapper>
  );
};
export default DiceCell;
