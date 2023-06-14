import { keyframes } from "@emotion/react";

export const bounce: string = keyframes`
0% { transform: translateY(0); }
25% { transform: translateY(5px); }
50% { transform: translateY(0); }
75% { transform: translateY(-5px); }
100% { transform: translateY(0); }
`;
