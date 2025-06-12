// logger.ts
export enum LogLevel {
  INFO = 'INFO',
  DEBUG = 'DEBUG',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

function getTimeStamp(): string {
  return new Date().toISOString();
}

export function log(level: LogLevel, message: string): void {
  console.log(`[${getTimeStamp()}] [${level}] ${message}`);
}

export const logger = {
  info: (msg: string, code: any) => log(LogLevel.INFO, msg),
  debug: (msg: string) => log(LogLevel.DEBUG, msg),
  warn: (msg: string) => log(LogLevel.WARN, msg),
  error: (msg: string) => log(LogLevel.ERROR, msg),
};
