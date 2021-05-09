Run task:
1. npm install
2. node caesar-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

-a or --action - can be only 'encode' or 'decode' 
-s or --shift - a shift for decoding or encoding. can be only negative or positive numbers
-i or --input - input file, source file
-o or --output - output file

If action or shift are not entered the program will show error exit.
If input file is not entered will use console to input data.
If output file is not entered console will be used for output.
If output or input file are not exist the program will show error and exit.
