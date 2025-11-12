import java.util.Scanner;

public class MysticWaves {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number of N waves:");
        int n = scanner.nextInt();
        int res = n%2 ;
        for (int i = 0; i < n ; i++) {
         //   int res = i + 1;
            System.out.println("hello number " + res);
            int y = scanner.nextInt();
            int x = scanner.nextInt();
            int res2 = x%2 ;
            if( res2 == 0){
                System.out.println("n is even " + n );
               // scanner.close();
                return;
            }else{
                System.err.println("n is odd " + y );
            }
        }

       // int res = n%2 ;
        System.out.println("The value of n%2 is: " + res);

        System.out.println("Welcome to Mystic Waves!");
        // Additional code for the Mystic Waves application would go here
    }
}

