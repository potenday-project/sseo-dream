import { UserSelectionResult } from '../stores/letter';

export default function extractNonEmptyValues(userSelectionResult: UserSelectionResult) {
  const values = Object.values(userSelectionResult).filter((value) => {
    return (
      (typeof value === 'string' && value.length > 0) || (typeof value === 'number' && value > 0)
    );
  });

  return values;
}
