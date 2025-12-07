package Practice;

public class EPAM {
    public void reverse(){
        String s = "hello";
        StringBuilder rev = new StringBuilder();
        for(int i = s.length()-1; i>=0; i--)
            rev.append(s.charAt(i));
        System.out.println(rev);
    }

    public void isPalindrome(){
        String s = "madam";
        StringBuilder rev = new StringBuilder();
        for(int i = s.length()-1; i>=0; i--)
            rev.append(s.charAt(i));
        System.out.println(s.equals(rev.toString()) ? "Palindrome" : "Not Palindrome");
    }

    public void countVowelsAndConsonants(){
        String s = "epam";
        int v = 0, c = 0;
        for(char ch: s.toCharArray()){
            if("aeiouAEIOU".indexOf(ch)!=-1) v++;
            else c++;
        }
        System.out.println(v + " " + c);
    }

    public void removeDuplicates(){
        int[] arr = {1,1,2,2,3};
        int j=0;
        for(int i=1;i<arr.length;i++){
            if(arr[i]!=arr[j]) arr[++j]=arr[i];
        }
        System.out.println(j+1);
    }

    public void secondLargest(){
        int[] arr = {5,2,9,7,3};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for(int n : arr){
            if(n > first){ second = first; first = n; }
            else if(n > second && n != first) second = n;
        }
        System.out.println(second);
    }

    public void findSumOfDigits(){
        int n = 1234, sum = 0;
        while(n>0){ sum += n%10; n/=10; }
        System.out.println(sum);
    }

    public void reverseNumber(){
        int n = 123, rev = 0;
        while(n>0){ rev = rev*10 + n%10; n/=10; }
        System.out.println(rev);
    }

    public void isArmstrong(){
        int n = 153, temp=n, sum=0;
        while(n>0){ int d=n%10; sum+=d*d*d; n/=10; }
        System.out.println(sum==temp);
    }

    public static void main(String[] args) {

    }
}
