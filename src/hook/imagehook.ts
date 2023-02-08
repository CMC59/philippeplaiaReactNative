export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../starships/CR90corvette.jpg");
      break;
    case "stardestroyer":
      source = require("../../starships/stardestroyer.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("../../starships/sentinel-classlandingcraft.jpg");
      break;
    case "deathstar":
      source = require("../../starships/deathstar.jpg");
      break;
    case "millenniumfalcon":
      source = require("../../starships/millenniumfalcon.jpg");
      break;
    case "y-wing":
      source = require("../../starships/y-wing.jpg");
      break;
    case "x-wing":
      source = require("../../starships/x-wing.jpg");
      break;
    case "tieadvanced x1":
      source = require("../../starships/tieadvancedx1.jpg");
      break;
    case "executor":
      source = require("../../starships/executor.jpg");
      break;
    case "rebeltransport":
      source = require("../../starships/rebeltransport.jpg");
      break;
  }
  return source;
};