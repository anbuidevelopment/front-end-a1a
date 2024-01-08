import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Card from '../Card';
import MWiseLostTime from '../Table/MWiseLostTime';
import MMoreBroken from '../Table/MMoreBroken';
import KindIssue from '../Table/KindIssue';
import KindIssueWeek from '../Table/KindIssueWeek';
import Summary from '../Table/Summary';

const NoSewing = () => {
  const [selectState, setSelectState] = useState(1);

  return (
    <section className=''>
      <Dashboard setSelect={setSelectState} />
      <Card>
        {(() => {
          switch (selectState) {
            case 1:
              return <MWiseLostTime />;
            case 2:
              return <MMoreBroken />;
            case 3:
              return <KindIssue />;
            case 4:
              return <KindIssueWeek />;
            case 5:
              return <Summary />;
            default:
              return <Summary />;
          }
        })()}
      </Card>
    </section>
  );
};

export default NoSewing;
