exports.finish = (req, res) => {
  const isSuccess = Math.random() < 0.5;

  setTimeout(() => {
    if (isSuccess) {
      return res.sendStatus(201);
    }

    res.sendStatus(500);
  }, 3000);
};
