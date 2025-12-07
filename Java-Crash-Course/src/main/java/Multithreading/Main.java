package Multithreading;

public class Main extends Thread {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();
        NumberCounter thread1 = new NumberCounter();
        sumCounter sum = new sumCounter();
        Thread thread2 = new Thread(sum);

        thread1.start();
        thread2.start();

        try{
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(System.currentTimeMillis() - startTime);
    }
}
