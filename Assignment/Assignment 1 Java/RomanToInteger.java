package calci;

import java.util.HashMap;

public class RomanToInteger 
{
    public static int romanToInt(String s) 
    {
        // Create a mapping of Roman numerals to their respective values
        HashMap<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int prevValue = 0; // To keep track of the previous numeral's value

        for (int i = s.length() - 1; i >= 0; i--) 
        {
            char currentChar = s.charAt(i);
            int currentValue = romanMap.get(currentChar);

            // If the previous numeral's value is less than the current one, subtract it
            if (prevValue > currentValue)
            {
                result -= currentValue;
            } 
            else
            {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static void main(String[] args)
    {
        String roman = "IX"; // Example input
        int integer = romanToInt(roman);
        System.out.println("Integer representation: " + integer);
    }
}


//B. Convert Roman Number to Integer: