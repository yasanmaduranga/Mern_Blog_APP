# Mern_Blog_APP
This is Blog App that is developing by React.js with Tailwind CSS, Node.js and MongoDB


1)After Express 5 we can handle errors within index.js file.

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack, // if we are not in production
  });
});
