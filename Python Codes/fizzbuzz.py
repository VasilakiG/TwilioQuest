import sys

inputs = sys.argv
inputs.pop(0)

for item in inputs:
    item = int(item)
    print_string = ""
    if(item % 3 == 0):
        print_string = print_string + "fizz"
        if(item % 5 == 0):
            print_string = print_string + "buzz"
    elif(item % 5 == 0):
        print_string = print_string + "buzz"
    else:
        print_string = item

    print(print_string)