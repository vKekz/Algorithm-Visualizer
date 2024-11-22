export function startDelay(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
