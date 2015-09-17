module.exports = function (robot) {

  robot.hear(/ally/i, function(res){
    res.send("is actually the boss");
  });

};
