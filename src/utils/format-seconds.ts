/**
 * Formats a number of seconds into HH:MM format, rounding up to the nearest minute
 * @param totalSeconds - The total number of seconds to format
 * @returns A string in HH:MM format
 */
export function formatSecondsToHHMM(totalSeconds: number): string {
  const totalMinutes = Math.ceil(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
