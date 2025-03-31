export default function LoadingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <radialGradient
        id="a"
        cx={0.66}
        cy={0.313}
        fx={0.66}
        fy={0.313}
        gradientTransform="scale(1.5)"
      >
        <stop offset={0} stopColor="#003054" />
        <stop offset={0.3} stopColor="#003054" stopOpacity={0.9} />
        <stop offset={0.6} stopColor="#003054" stopOpacity={0.6} />
        <stop offset={0.8} stopColor="#003054" stopOpacity={0.3} />
        <stop offset={1} stopColor="#003054" stopOpacity={0} />
      </radialGradient>
      <circle
        cx={100}
        cy={100}
        r={70}
        fill="none"
        stroke="url(#a)"
        strokeDasharray="200 1000"
        strokeLinecap="round"
        strokeWidth={15}
        //@ts-expect-error Typescript thinks transformOrigin attribute doesnt exist
        transformOrigin="center"
      >
        <animateTransform
          attributeName="transform"
          calcMode="spline"
          dur={2}
          keySplines="0 0 1 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="360;0"
        />
      </circle>
      <circle
        cx={100}
        cy={100}
        r={70}
        fill="none"
        stroke="#003054"
        strokeLinecap="round"
        strokeWidth={15}
        opacity={0.2}
        //@ts-expect-error Typescript thinks transformOrigin attribute doesnt exist
        transformOrigin="center"
      />
    </svg>
  );
}
