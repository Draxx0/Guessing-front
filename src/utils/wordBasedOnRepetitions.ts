export const wordBasedOnRepetitions = (
  singular: string,
  plurial: string,
  repetitions: number
): string => {
  if (repetitions > 1) return plurial;
  return singular;
};
