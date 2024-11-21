export function startDelay(millis: number) {
  return timeOut(millis);
}

export function timeOut(millis: number) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
