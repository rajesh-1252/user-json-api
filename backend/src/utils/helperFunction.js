export const apiResponse = (res, result, status = 200) => {
  return res.status(status).json({
    success: true,
    result,
  });
};
