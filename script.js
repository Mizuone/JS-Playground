"use strict";
window.onload = function() {
    /* ################# Closure Example ################ */
    var ClosureSpace = {},
        closureText = document.querySelector("#closuresection");
    
    ClosureSpace = (function() {
        var sagaArray = [],
            character = "Kyle",
            stats = function() {
                var strength = ClosureSpace.randomNumber(50);

                sagaArray.push(function() {
                
                    var agility = ClosureSpace.randomNumber(25),
                        listNode = document.createElement("li"),
                        textNode = document.createTextNode(character + "'s " + "Stats: " + " Strength " + 
                        strength + " Agility " + agility);
                    
                    listNode.appendChild(textNode);
                    closureText.appendChild(listNode);
            });
        };
        
        ClosureSpace.randomNumber = function(num) {
            return Math.floor(Math.random() * num);    
        }
        
        stats();
        sagaArray[0]();
        sagaArray[0]();
        stats();
        sagaArray[0]();
        sagaArray[1]();
    })();
    /* ########################################################### */
    var ThisSpace = {},
        thisText = document.querySelector("#thissection");
        ThisSpace = (function() {
            var fn = function(one, two) {
                console.log(this, one, two);
            };
            
            var setTimeout = function(cb, ms) {
                console.log(ms);
               var listNode = document.createElement("li"),
                textNode = document.createTextNode(cb());
                
                listNode.appendChild(textNode);
                thisText.appendChild(listNode)
            };
            setTimeout(fn, 1000);
        })();
    var binarySearch = {};
    binarySearch = function() {
        var doSearch = function(array, targetValue) {
            let min = 0;
            let max = array.length - 1;
            let guess;
            while (min <= max) {
                guess = Math.floor((min + max) / 2);
                
                if (array[guess] === targetValue) {
                    return guess;
                }
                
                array[guess] < targetValue ? min = guess + 1 : max = guess - 1;
            }

            return -1;
        };

        var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
                41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        var result = doSearch(primes, 23);
        console.log("Found prime at index " + result);
    }
    binarySearch();
    var selectionSort = {};
    selectionSort = function() {
        var swap = function(array, firstIndex, secondIndex) {
            let temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;
        };

        var indexOfMinimum = function(array, startIndex) {

            let minValue = array[startIndex];
            let minIndex = startIndex;

            for(let i = minIndex + 1; i < array.length; i++) {
                if(array[i] < minValue) {
                    minIndex = i;
                    minValue = array[i];
                }
            } 
            return minIndex;
        }; 

        var selectionSort = function(array) {
            let minIndex;
            for (let i = 0; i < array.length; i++) {
                minIndex = indexOfMinimum(array, i);
                swap(array, minIndex, i);
            }
        };

        var array = [22, 11, 99, 88, 9, 7, 42];
        selectionSort(array);
        console.log("Array after sorting:  " + array);

        

        var negativeNumArray = [-1, -533, -222, 3, .02];
        selectionSort(negativeNumArray);
        console.log("Negative Array after sorting " + negativeNumArray);
        
    }
    selectionSort();
    
    var insertionSortAlgorithm = {};
    
    insertionSortAlgorithm = function() {
        var arrayAllNumbers = [22, -11, 0.99, -88, 29, -7, 42];
        var insert = function(array, rightIndex, value) {
            for(var i = rightIndex; i >= 0 && array[i] > value; i--) {
                array[i + 1] = array[i];
            }   
            array[i + 1] = value; 
        };

        var insertionSort = function(array) {
            for (var i = 1; i < array.length; i++) {
                insert(array, i - 1, array[i]);   
            }
        };
        insertionSort(arrayAllNumbers)
        console.log("Array after sorting:  " + arrayAllNumbers);
    }
    insertionSortAlgorithm();
    
//Insertion Sort
(function() {
    var arrNumbers = [10, 2, 30, 4, 12, 25, 55, 100, 2, 3, 4, 5, 1, 2, 0];

    function insertionSort(arr) {
        var key,
            pre;
        for (var i = 1; i < arr.length; i++) {
            key = arr[i];
            pre = i - 1;
            while( pre > -1 && arr[pre] > key) {
                arr[pre + 1] = arr[pre];
                pre = pre - 1;
                arr[pre + 1] = key;
            }
        }

        return arr;
    }
    console.log("Insertion Sort: ")
    console.log(insertionSort(arrNumbers));
 })();
    
    
    
    
}

