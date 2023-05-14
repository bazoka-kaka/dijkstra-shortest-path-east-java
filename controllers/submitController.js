const getShortestPath = require("./dijkstra");

const handleSubmit = (req, res) => {
  const { location_from, location_destination } = req?.body;
  if (!location_from || !location_destination)
    return res
      .status(400)
      .json({ message: "Location source and destination must be specified!" });
  const routesResult = getShortestPath(location_from, location_destination);
  res.json({ routesResult });
};

module.exports = { handleSubmit };
