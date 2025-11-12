import java.util.Scanner;
import java.math.BigInteger;

public class CargoCraftFleet {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.err.println("Enter number of test cases (t):");
        int t = scanner.nextInt();  // number of test cases

        for (int i = 0; i < t; i++) {
            System.err.println("Enter number of cargo units (n):");
            BigInteger n = scanner.nextBigInteger(); // number of cargo units (supports arbitrarily large numbers)

            // Check if n < 4 or n is odd
            if (n.compareTo(BigInteger.valueOf(4)) < 0 || n.mod(BigInteger.TWO).compareTo(BigInteger.ZERO) != 0) {
                System.out.println("-1");
            } else {
                // min = ceil(n / 6.0) = (n + 5) / 6
                BigInteger min = n.add(BigInteger.valueOf(5)).divide(BigInteger.valueOf(6));
                // max = n / 4
                BigInteger max = n.divide(BigInteger.valueOf(4));
                System.out.println("total cargo: " + min + " " + max);
            }
        }

        scanner.close();
    }
}
