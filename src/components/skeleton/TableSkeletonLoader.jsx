import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TableSkeletonLoader = ({ count, height }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ width: '100%' }}>
          <Skeleton height={height} />
        </div>
      ))}
    </>
  );
};

export default TableSkeletonLoader;
