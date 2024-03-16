const notFound = (req, res) => {
  res.status(404).json({ messsage: "Route not found" });
};

export default notFound;
