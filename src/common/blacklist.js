const blacklist = {
  includes: (username) => {
    if ("WHITE_LISTED_USERS" in process.env) {
      // turn blacklist into whitelist
      return !process.env.WHITE_LISTED_USERS.split(",").includes(username);
    } else {
      // default blacklist
      return ["renovate-bot", "technote-space", "sw-yx"].includes(username);
      ;
    }
  }
};

export { blacklist };
export default blacklist;
