// controller using async

exports.login = async (req, res, next) => {
  try {
    const { userId, userPassword } = req.body;
    return res.json({
      status: "ok",
    });
  } catch (err) {
    next(err);
  }
};
