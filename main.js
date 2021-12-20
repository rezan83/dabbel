const menuIcon = document.querySelector(".menu-icon");
const aside = document.querySelector(".aside");
const asideClose = document.querySelector(".aside_close-icon");

function toggle(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

menuIcon.addEventListener("click", function () {
  toggle(aside, "active");
});

asideClose.addEventListener("click", function () {
  toggle(aside, "active");
});

function CartIcon($rootScope, $scope) {
//      $event.stopPropagation();
  $rootScope.showCart = false;
  $scope.toggleCart = function () {
    $rootScope.showCart = !$rootScope.showCart;
  console.log($rootScope.showCart);
  };
}

function CartForm($rootScope, $scope, $http) {

  $scope.items = [
    {
      id: 1,
      name: "item 1",
      count: 1,
      price: 339.99,
    },
    {
      id: 2,
      name: "item 2",
      count: 1,
      price: 129.29,
    },
    {
      id: 3,
      name: "item 3",
      count: 1,
      price: 669.99,
    },
    {
      id: 4,
      name: "item 4",
      count: 1,
      price: 999.99,
    },
  ];

  $scope.increase = function ($event,item) {
    $event.stopPropagation();
    let items = $scope.items;

    for (let i = 0; items.length; i++) {
      if (items[i].id === item.id) {
        items[i].count += 1;
        break;
      }
    }
  };

  $scope.decrease = function ($event, item) {
    $event.stopPropagation();
    let items = $scope.items;

    for (let i = 0; items.length; i++) {
      if (items[i].id === item.id) {
        items[i].count += items[i].count && -1;
        break;
      }
    }
  };

  $scope.removeItem = function ($event, index) {
      $event.stopPropagation();
    $scope.items.splice(index, 1);
  };

  $rootScope.counter = function () {
    return $scope.items.length;
  };

  $scope.total = function () {
    let total = 0;
    angular.forEach($scope.items, function (item) {
      total += item.count * item.price;
    });
    return total;
  };

  $scope.checkout = function ($event) {
    $event.stopPropagation();
    $scope.items = [];
    setTimeout(() => {
      alert("checkout successfully");
    }, 500);
  };
  
}
