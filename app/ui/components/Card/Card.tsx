// components/Card.tsx
import React, { ReactNode } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { FaChartPie } from 'react-icons/fa';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  content: string;
  children?: ReactNode;
  renderLeft?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, children, renderLeft }) => {
  return (
    <div className={`${styles.card} ${renderLeft ? styles.leftCard : styles.rightCard}`}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <FaChartPie className={`${styles.icon}`} />
          <h3>{title}</h3>
        </div>
        <div className={styles.content}>
          {content}
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};




{/* <div className={styles.card}>
<div className={styles.left}>
  <div className={styles.title}>
    <FaChartPie className={styles.icon} />
    <h3>{title}</h3>
  </div>
  <div className={styles.content}>
    {content}
  </div>
</div>
<div className={styles.right}>
{children}
</div> */}

export default Card;
