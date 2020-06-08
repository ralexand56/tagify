import React from "react";
import styled, { useTheme } from "styled-components";

interface Props {
  width: string;
}
export default function Logo({ width }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 312.36 421.68">
        <defs>
          <clipPath id="clip-path" transform="translate(-100 -45.52)" />
        </defs>
        <g>
          <path
            fill={theme.colors.light}
            id="ring"
            d="M345.6,108c4-7.2,8-14.4,12.8-21.6S368.8,72.8,376,68a28.42,28.42,0,0,1,7.2-3.2c4.8-1.6,7.2,0,8.8,4.8a36.14,36.14,0,0,1,.8,16c-2.4,16.8-9.6,32-17.6,47.2-9.6,16.8-20.8,32.8-36,44.8-5.6,4.8-12,9.6-20,11.2h-4c-5.6.8-8.8,4-8.8,9.6s4,8.8,9.6,8.8c8.8,0,16.8-3.2,24.8-8,16-9.6,28-23.2,38.4-38.4,12.8-18.4,23.2-38.4,29.6-60,3.2-11.2,4.8-22.4,2.4-33.6C408,50.4,392,41.6,376,47.2c-11.2,4-19.2,11.2-25.6,20-5.6,8-10.4,16-16,24.8a2.43,2.43,0,0,0,0,3.2A160.19,160.19,0,0,0,345.6,108Z"
            transform="translate(-100 -45.52)"
          />
        </g>
        <ellipse
          fill={theme.colors.medium}
          id="circle"
          cx="243.33"
          cy="317"
          rx="83.84"
          ry="84.18"
          transform="translate(-254.67 307.51) rotate(-57.66)"
        />
        <path
          id="lines"
          fill={theme.colors.light}
          d="M309,346.33a7.41,7.41,0,0,1-7.45-.53,7.26,7.26,0,0,1-2.51-2.95l-.5-1c-.37-.71-.93-1.78-1.69-3.14-1.53-2.72-3.84-6.61-6.94-11.15A145.69,145.69,0,0,0,262,296.92c-3.78-3.06-7.54-5.84-11.23-8.35a161.85,161.85,0,0,0-40.05-20.11l-.7-.22A7.44,7.44,0,0,1,205,259a7.58,7.58,0,0,1,9.3-5.22c.5.15,21,6,45,22.33,4,2.72,8.1,5.73,12.22,9.07a162.07,162.07,0,0,1,41.06,51.12A7.62,7.62,0,0,1,309,346.33ZM281.72,361.9a6.17,6.17,0,0,1-8.3-2.9s-.11-.24-.42-.85-.8-1.52-1.44-2.67c-1.29-2.32-3.25-5.62-5.89-9.47A123.7,123.7,0,0,0,242,320c-3.2-2.59-6.39-4.95-9.52-7.08a141.68,141.68,0,0,0-32-16.4c-1.76-.61-2.58-.85-2.59-.84a6.22,6.22,0,0,1-4.23-7.75,6.29,6.29,0,0,1,7.74-4.34c.43.12,17.82,5.07,38.15,18.91,3.39,2.31,6.86,4.86,10.35,7.69a137.46,137.46,0,0,1,34.8,43.32A6.35,6.35,0,0,1,281.72,361.9Zm-31.18,15.43a4.87,4.87,0,0,1-1.68-2s-.5-1.07-1.63-3.08-2.83-4.9-5.12-8.23a107.41,107.41,0,0,0-20.57-22.62c-2.79-2.26-5.56-4.31-8.28-6.16A123.12,123.12,0,0,0,185.44,321c-1.54-.54-2.27-.74-2.27-.74a5,5,0,0,1-3.39-6.19,5.05,5.05,0,0,1,6.2-3.48c.33.1,15.36,4.38,32.93,16.32,2.93,2,5.93,4.22,8.94,6.66a119.08,119.08,0,0,1,30,37.37,5.08,5.08,0,0,1-2.38,6.72A4.93,4.93,0,0,1,250.54,377.33Z"
          transform="translate(-100 -45.52)"
        />
        <path
          id="tag"
          fill={theme.colors.light}
          d="M404,221.6l-24-56.8c-10.4,14.4-20,24.8-31.2,32.8a28.85,28.85,0,0,1-4.8,16c-9.6,15.2-29.6,20.8-44.8,11.2S278.4,195.2,288,180s29.6-20.8,44.8-11.2c2.4,1.6,4,3.2,6.4,4.8,11.2-9.6,20-21.6,28.8-36l-3.2-9.6c-3.2-8-12-13.6-20.8-12l-91.2,13.6c-5.6.8-11.2,4-13.6,9.6L100,367.2l164.8,100L402.4,240A19.16,19.16,0,0,0,404,221.6ZM314.45,362c-24.76,39.12-76.69,50.67-116,25.81s-51-76.75-26.29-115.87,76.69-50.67,116-25.81S339.22,322.91,314.45,362Z"
          transform="translate(-100 -45.52)"
        />
      </svg>
    </Container>
  );
}

const Container = styled.section`
  width: 30px;
  margin-right: 0.6em;
`;