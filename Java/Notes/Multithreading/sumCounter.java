package Multithreading;

public class sumCounter implements Runnable{
    @Override
    public void run() {
        long sum = 0;
        for(int i = 1; i <= 1000000000; i++){
            sum += i;
        }
        System.out.println(sum);
    }
}
