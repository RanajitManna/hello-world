
#include<iostream>
using namespace std;

class sum {   // crete class          
	
   int c;    //global variable declaration    
public:

   sum() {   //default contructor
       cout << "\nThe Sum is :";
   }
/*
 *create parameterized constructor,
 *@params a and b
 *@type integer
 *@global variable c and storing value in c
 */
   sum(int a, int b) {  
       c = a + b;
   }
/*
 *@return type 
 *return c
 *
 */
   void display() {
       cout << c;
   }
};

/*to execute all the function
 *to the asign the value a and b
 *
 *
 */

int main() {

   int a, b;

   cout << "Enter Two Numbers :";
   cin >> a>>b;

   sum  s;   // create an object s
   sum s1(a, b);// passing value a and b 
   s1.display(); // return value 

   return 0;
}

	
