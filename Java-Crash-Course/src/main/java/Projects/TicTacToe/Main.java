package Projects.TicTacToe;

import java.util.Scanner;

public class Main {
    static char[][] board;

    public static void resetBoard() {
        board = new char[][]{
                {' ', ' ', ' '},
                {' ', ' ', ' '},
                {' ', ' ', ' '}
        };
    }

    public static void printBoard() {
        System.out.println("-------------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println("\n-------------");
        }
    }

    public static boolean checkWin(char player) {
        // rows
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == player && board[i][1] == player && board[i][2] == player) return true;
        }
        // cols
        for (int j = 0; j < 3; j++) {
            if (board[0][j] == player && board[1][j] == player && board[2][j] == player) return true;
        }
        // diagonals
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player) return true;
        if (board[0][2] == player && board[1][1] == player && board[2][0] == player) return true;

        return false;
    }

    public static boolean isBoardFull() {
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == ' ') return false;
            }
        }
        return true;
    }

    // ---------- Multiplayer ----------
    public static void playMultiplayer(Scanner sc) {
        resetBoard();
        char currentPlayer = 'X';
        boolean gameEnded = false;

        System.out.println("Multiplayer Mode!");
        printBoard();

        while (!gameEnded) {
            System.out.println("Player " + currentPlayer + ", enter your move (row col: 0-2): ");
            int row = sc.nextInt();
            int col = sc.nextInt();

            if (row < 0 || row >= 3 || col < 0 || col >= 3 || board[row][col] != ' ') {
                System.out.println("Invalid move! Try again.");
                continue;
            }

            board[row][col] = currentPlayer;
            printBoard();

            if (checkWin(currentPlayer)) {
                System.out.println("Player " + currentPlayer + " wins!");
                gameEnded = true;
            } else if (isBoardFull()) {
                System.out.println("It's a draw!");
                gameEnded = true;
            } else {
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        }
    }

    // ---------- AI Logic ----------
    public static int minimax(boolean isMaximizing) {
        if (checkWin('O')) return 10;
        if (checkWin('X')) return -10;
        if (isBoardFull()) return 0;

        if (isMaximizing) {
            int bestScore = -1000;
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    if (board[i][j] == ' ') {
                        board[i][j] = 'O';
                        int score = minimax(false);
                        board[i][j] = ' ';
                        bestScore = Math.max(bestScore, score);
                    }
                }
            }
            return bestScore;
        } else {
            int bestScore = 1000;
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    if (board[i][j] == ' ') {
                        board[i][j] = 'X';
                        int score = minimax(true);
                        board[i][j] = ' ';
                        bestScore = Math.min(bestScore, score);
                    }
                }
            }
            return bestScore;
        }
    }

    public static int[] bestMove() {
        int bestScore = -1000;
        int[] move = {-1, -1};

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j] == ' ') {
                    board[i][j] = 'O';
                    int score = minimax(false);
                    board[i][j] = ' ';
                    if (score > bestScore) {
                        bestScore = score;
                        move = new int[]{i, j};
                    }
                }
            }
        }
        return move;
    }

    // ---------- Play with AI ----------
    public static void playWithAI(Scanner sc) {
        resetBoard();
        char currentPlayer = 'X';
        boolean gameEnded = false;

        System.out.println("Play vs Computer (AI)!");
        printBoard();

        while (!gameEnded) {
            if (currentPlayer == 'X') {
                System.out.println("Your turn! Enter row and col (0-2): ");
                int row = sc.nextInt();
                int col = sc.nextInt();

                if (row < 0 || row >= 3 || col < 0 || col >= 3 || board[row][col] != ' ') {
                    System.out.println("Invalid move! Try again.");
                    continue;
                }

                board[row][col] = 'X';
            } else {
                System.out.println("Computer's turn...");
                int[] move = bestMove();
                board[move[0]][move[1]] = 'O';
            }

            printBoard();

            if (checkWin(currentPlayer)) {
                System.out.println("Player " + currentPlayer + " wins!");
                gameEnded = true;
            } else if (isBoardFull()) {
                System.out.println("It's a draw!");
                gameEnded = true;
            } else {
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        }
    }

    // ---------- Main ----------
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Welcome to Tic Tac Toe!");
        System.out.println("Choose mode:");
        System.out.println("1. Multiplayer");
        System.out.println("2. Play vs AI");

        int choice = sc.nextInt();

        if (choice == 1) {
            playMultiplayer(sc);
        } else if (choice == 2) {
            playWithAI(sc);
        } else {
            System.out.println("Invalid choice!");
        }

        sc.close();
    }
}
