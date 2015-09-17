module.exports = function (robot) {

  robot.hear(/home/i, function(res) {
    res.send("do you wish you were there now?");
  });

  robot.hear(/mazda/i, function(res){
    res.send("zoom zoom zoom");
  });

};
