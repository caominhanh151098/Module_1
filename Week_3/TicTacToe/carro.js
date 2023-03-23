window.addEventListener("load", dataInput);
        alert("Người chơi 1: đánh X đầu tiên");



        let x = document.getElementById("carogame");
        let board = [];
        let data = "";
        let turn = 1;

        for (let i = 0; i < 11; i++) {
            board[i] = ["(.)", "(.)", "(.)", "(.)", "(.)", "(.)", "(.)", "(.)", "(.)", "(.)"];
        }

        function dataInput() {
            let data = "";
            for (let i = 0; i < 10; i++) {
                data += "<br>"
                for (let j = 0; j < 10; j++) {
                    if (board[i][j] == "X" || board[i][j] == "O") {
                        data += board[i][j] + "&nbsp;&nbsp;&nbsp;"
                    }
                    else
                        data += board[i][j] + "&nbsp;&nbsp"
                }
            }
            x.innerHTML = data;
        }

        function change() {
            if (turn == 1) {
                changeX();
                turn = 2;
            }
            else {
                changeO();
                turn = 1;
            }
        }

        function changeX() {
            let x = Number(prompt("Người chơi 1 - X: ") - 1);
            let y = Number(prompt("Y: ") - 1);
            while (x < 0 || x > 9 || y < 0 || y > 9) {
                alert("Vị trí ngoài bàn cờ! Nhập lại ...")
                x = Number(prompt("X: ") - 1);
                y = Number(prompt("Y: ") - 1);
            }
            while (board[x][y] == "X" || board[x][y] == "O") {
                alert("Vị trí đã đánh dấu! Nhập lại ...")
                x = Number(prompt("X: ") - 1);
                y = Number(prompt("Y: ") - 1);
            }
            board[x][y] = "X";
            dataInput();
            checkwin("X");
        }

        function changeO() {
            let x = Number(prompt("Người chơi 2 - X: ") - 1);
            let y = Number(prompt("Y: ") - 1);
            while (x < 0 || x > 9 || y < 0 || y > 9) {
                alert("Vị trí ngoài bàn cờ! Nhập lại ...")
                x = Number(prompt("X: ") - 1);
                y = Number(prompt("Y: ") - 1);
            }
            while (board[x][y] == "X" || board[x][y] == "O") {
                alert("Vị trí đã đánh dấu! Nhập lại ...")
                x = Number(prompt("X: ") - 1);
                y = Number(prompt("Y: ") - 1);
            }
            board[x][y] = "O";
            dataInput();
            checkwin("O");
        }

        function checkwin(value) {
            let win = "";
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j] == value && board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && board[i][j] == board[i][j + 3] && board[i][j] == board[i][j + 4]) {
                        win = "Win"
                    }
                    else if (board[i][j] == value && board[i][j] == board[i + 1][j] && board[i][j] == board[i + 2][j] && board[i][j] == board[i + 3][j] && board[i][j] == board[i + 4][j]) {
                        win = "Win"
                    }
                    else if (board[i][j] == value && board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] == board[i + 3][j + 3] && board[i][j] == board[i + 4][j + 4]) {
                        win = "Win"
                    }
                    else if (board[i][j] == value && board[i][j] == board[i + 1][j - 1] && board[i][j] == board[i + 2][j - 2] && board[i][j] == board[i + 3][j - 3] && board[i][j] == board[i + 4][j - 4]) {
                        win = "Win"
                    }
                }
            }
            console.log(value + win);
            if (value == "X" && win == "Win") {
                document.getElementById("btn").value = "Người chơi 1 " + win;
                document.getElementById("btn").onclick = null;
            } else if (value == "O" && win == "Win") {
                document.getElementById("btn").value = "Người chơi 2 " + win;
                document.getElementById("btn").onclick = null;
            }



        }