import { StatusCodes } from "http-status-codes";
import logger from "../logger/logger.js";
import CustomAPIError from "../errors/custom-api.js";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("called");

  if (!(err instanceof CustomAPIError)) {
    logger.error(err);
  }

  const statusCode =
    err instanceof CustomAPIError
      ? err.statusCode
      : StatusCodes.INTERNAL_SERVER_ERROR;

  const message =
    err instanceof CustomAPIError
      ? err.message
      : "Something went wrong, try again later";
  console.log(err)

  res.status(statusCode).json({ success: false, msg: message });
};

export default errorHandlerMiddleware;
