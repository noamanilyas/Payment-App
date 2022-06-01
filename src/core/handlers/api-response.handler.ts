export const successResponse = (res, body) => {
  return res.json({
    status: true,
    result: body,
    error: false,
  });
};

export const errorResponse = (res, err) => {
  return res.status(err["status"]).json({
    status: false,
    result: false,
    error: {
      type: err.name,
      message: err.message,
    },
  });
};
