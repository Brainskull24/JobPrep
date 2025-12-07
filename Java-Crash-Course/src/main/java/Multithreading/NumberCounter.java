package Multithreading;

public class NumberCounter extends Thread {
    @Override
    public void run() {
        int count = 0;
        for(int i = 1; i <= 1000000000; i++){
            if(i % 10 == 6){
                count++;
            }
        }
        System.out.println(count);
    }
}
