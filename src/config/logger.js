import { createLogger, transports, format } from "winston";

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "silly",
      format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:dd" }),
        format.json()
      ),
    }),
  ],
});

export default logger;
