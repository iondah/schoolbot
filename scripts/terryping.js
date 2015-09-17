module.exports = function (robot) {

  robot.hear(/terry/i, function(res) {
    res.send("loves biscuits");
  });
};
