import java.util.Scanner;

public class MysticWaves {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number of test cases (t):");
        int t = scanner.nextInt();  // number of test cases

        // Loop for each test case
        for (int i = 0; i < t; i++) {
            System.out.println("Enter values for x and n:");
            int x = scanner.nextInt();
            int n = scanner.nextInt();

            // Compute total energy
            int totalEnergy;
            if (n % 2 == 0) {
                totalEnergy = 0;  // even number of waves cancels out
            } else {
                totalEnergy = x;  // odd number leaves one x
            }

            // Output the result
            System.out.println("Total magical energy: " + totalEnergy);
        }

        System.out.println("Welcome to Mystic Waves!");
        scanner.close();
    }
}
