export interface AppDetailsOpenerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openAppInfo(): Promise<void>;
}
