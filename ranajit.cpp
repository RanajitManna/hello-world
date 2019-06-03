
#include<iostream>
using namespace std;

class sum {
   int c;
public:

   sum() {
       cout << "\nThe Sum is :";
   }

   sum(int a, int b) {
       c = a + b;
   }

   void display() {
       cout << c;
   }
};

int main() {

   int a, b;

   cout << "Enter Two Numbers :";
   cin >> a>>b;

   sum  s;
   sum s1(a, b);
   s1.display();

   return 0;
}

	
