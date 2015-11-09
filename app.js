angular.module('directivePractice', []);

angular.module('directivePractice')
.directive('lessonHider', function() {
    return {
      templateUrl: "./lessonHider.html",
      restrict: "E",
      scope: {
        lessons: '='
      },
      link: function(scope, element, attributes){

}
    }
});
