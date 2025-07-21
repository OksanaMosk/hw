
import { FC, useId } from 'react';

interface RenderStarsProps {
  rating: number;
}

export const RenderStars: FC<RenderStarsProps> = ({ rating }) => {
  const idColor = useId();

  const gradients = (
    <defs>
      <linearGradient id={`${idColor}-grad80`}>
        <stop offset="80%" stopColor="gold" />
        <stop offset="80%" stopColor="lightgray" />
      </linearGradient>
      <linearGradient id={`${idColor}-grad50`}>
        <stop offset="50%" stopColor="gold" />
        <stop offset="50%" stopColor="lightgray" />
      </linearGradient>
      <linearGradient id={`${idColor}-grad40`}>
        <stop offset="40%" stopColor="gold" />
        <stop offset="40%" stopColor="lightgray" />
      </linearGradient>
      <linearGradient id={`${idColor}-grad20`}>
        <stop offset="20%" stopColor="gold" />
        <stop offset="20%" stopColor="lightgray" />
      </linearGradient>
    </defs>
  );

  const stars = Array.from({ length: 5 }, (_, i) => {
    const fillAmount = rating - i;
    let fill = 'lightgray';

    if (fillAmount >= 1) fill = 'gold';
    else if (fillAmount >= 0.8) fill = `url(#${idColor}-grad80)`;
    else if (fillAmount >= 0.5) fill = `url(#${idColor}-grad50)`;
    else if (fillAmount >= 0.4) fill = `url(#${idColor}-grad40)`;
    else if (fillAmount >= 0.2) fill = `url(#${idColor}-grad20)`;

    return (
      <svg
        key={i}
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {i === 0 && gradients}
        <path
          d="M12 .587l3.668 7.568L24 9.75l-6 5.848 1.416 8.582L12 18.897 4.584 24.18 6 15.598 0 9.75l8.332-1.595z"
          fill={fill}
        />
      </svg>
    );
  });

  return <div className="flex gap-1">{stars}</div>;
};
