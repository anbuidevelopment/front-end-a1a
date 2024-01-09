import Nav from '@/features/nav/Nav';
import { MWiseLostTime, MMoreBroken, KindIssue, KindIssueWeek, Summary } from '@/features/table';
import { useState } from 'react';

const Container = () => {
  const [selected, setSelected] = useState(0);

  console.log(selected);

  return (
    <>
      <Nav setSelected={setSelected} />
      {(() => {
        switch (selected) {
          case 1:
            return <MMoreBroken />;
          case 2:
            return <KindIssue />;
          case 3:
            return <KindIssueWeek />;
          case 4:
            return <Summary />;
          default:
            return <MWiseLostTime />;
        }
      })()}
    </>
  );
};

export default Container;
