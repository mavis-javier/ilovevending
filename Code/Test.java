public class Test {
    public static void main(String[] args) throws Exception{

    }
    public boolean isPalindrome(int x) {
        String xInteger = ((Integer) x).toString();
        char[] num = new char[xInteger.length()];
        int i = 0;
        while(i < num.length) {
            num[i] = xInteger.charAt(i);
        }
        return false;
    }
}