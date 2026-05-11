const check = (request, response) => {
  response.json({
    message: "checking profile endpoint: server route is stable...",
  });
};

export { check };
