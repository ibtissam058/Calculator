def calculate():
    print("Sample Calculator")
    while True:
       try:
           num1=float(input("Enter first number: "))
           num2=float(input("Enter second number: "))
           op=input("Enter The operator (+, -, *, /): ")

           if op == "+":
               result=num1+num2
           elif op == "-":
               result=num1-num2
           elif op == "*":
                result=num1*num2
           elif op == "/":
               if num2 ==0:
                   print("Can't divide by zero!")
                   continue
               result=num1/num2
           else:
               print("Invalid Operator!")
               continue

           print(f"The result is: {result}")
       except ValueError:
           print("Invalid Number!")

       cont=input("Do you want to continue? (y/n): ").lower()
       if cont != "y":
           print("THANK YOU! Goodbye!")
           break
if __name__ == "__main__":
   calculate()