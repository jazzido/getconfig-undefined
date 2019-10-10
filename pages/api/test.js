import getConfig from "next/config";

export default async (req, res) => {
  const config = getConfig();
  console.log(config);
  res.status(200).json(config);
};
