var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];




  var employeeSatisfaction= function () {
    var array = _.times(5, function (){
      var result = _.times(10, function(){
        return _.sample(opinions);
      });
      return result;
    });
    return array;
  };
    console.log(employeeSatisfaction());
