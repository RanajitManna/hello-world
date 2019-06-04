//main.cpp
#include <iostream>

using namespace std;

#include "functions.h"

int main(){
   print_hello();
   cout << endl;
   cout << "The factorial of 5 is " << factorial(5) << endl;
   return 0;
}

//hello.cpp
#include <iostream>

using namespace std;

#include "functions.h"

void print_hello(){
   cout << "Hello World!";
}

//factorial.cpp
#include "functions.h"

int factorial(int n){

   if(n!=1){
      return(n * factorial(n-1));
   } else return 1;
}


//function.h
#include "function.h"
void print_hello();
int factorial(int n);
 
















