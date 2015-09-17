module.exports = function (robot) {

  robot.hear(/matty/i, function(res) {
    res.send("is the boss");
  });

  robot.hear(/ally/i, function(res){
    res.send("is actually the boss");
  });
  robot.hear(/terry/i, function(res){
    res.send("wishes they were the boss");
  });
  robot.hear(/Thursday/i,function(res)){
  	
  }

};
