package calci;
import java.util.Scanner;

public class panagram
{
	static boolean isPana(String str)
	{
		int[] count=new int[26];
		for(int i=0;i<str.length();i++)
		{
			char ch=str.charAt(i);
			if(ch>='a'&&ch<='z')
				count[ch-97]++;
			if(ch>='A'&&ch<='Z')
				count[ch-65]++;
		}
		for(int i=0;i<26;i++)
		{
			if(count[i]==0)
				return false;
		}
		return true;
	}
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the String");
		String str=sc.nextLine();
		
		boolean rs=isPana(str);
		if(rs==true)
			System.out.println("String is Panagram");
		else
			System.out.println("String is Not panagram");
	}

}

