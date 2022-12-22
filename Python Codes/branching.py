import sys

first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
sum = first_num + second_num

if(sum <= 0):
    print("You have chosen the path of destitution.")
elif(sum <= 100):
    print("You have chosen the path of plenty.")
else:
    print("You have chosen the path of excess.")