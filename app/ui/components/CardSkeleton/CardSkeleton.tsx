// components/SkeletonCard.tsx
import styles from './Card.module.css';
import skeletonStyles from './SkeletonCard.module.css';

const SkeletonCard: React.FC = () => {
  return (
    <div className={`${styles.card} ${skeletonStyles.skeletonCard}`}>
      <div className={`${styles.icon} ${skeletonStyles.skeletonIcon}`}></div>
      <div className={styles.contentContainer}>
        <div className={`${styles.title} ${skeletonStyles.skeletonTitle}`}></div>
        <div className={`${styles.content} ${skeletonStyles.skeletonContent}`}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
