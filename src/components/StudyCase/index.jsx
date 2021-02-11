import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import works from '../../data/works';
import './index.scss';

const StudyCase = () => {
  const { workSlug } = useParams();
  const [currentWork, setcurrentWork] = useState(undefined);

  useEffect(() => {
    const foundWork = works.find((studycase) => studycase.slug === workSlug);
    setcurrentWork(foundWork);
  }, [workSlug]);

  return (
    <div className="StudyCase">
      {!currentWork && (
        <p>Pas de projet avec ce slug…</p>
      )}
      {currentWork && (
        <>
          <h3>{currentWork.subtitle}</h3>
          <p>{currentWork.description}</p>
        </>
      )}
    </div>
  );
};

export default StudyCase;
