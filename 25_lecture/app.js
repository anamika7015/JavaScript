// forEach() = method used to iterate over the elements 
//            in array and apply a spacified function (callback)
            // to each elements
            //   array.forEach(callback)
            // elements , array, index are provided

            let fruits =["apple","banana","orange","coconut"];
            
            fruits.forEach(capatlize)
            fruits.forEach(display)
            function uppercase(element, index,array) {
                array[index] = element.toUpperCase();
            }
          function lowercase(element, index,array) {
            array[index] = element.toLowerCase();
          }

          function capatlize(element, index,array) {
            array[index] = element.charAt(0).toUpperCase()+element.slice(1);
          }




            function display(elements) {
            console.log(elements);
            }