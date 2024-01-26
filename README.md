
# Bowling Record System

This app allows users to upload text files with bowling game scores and view the scoreboard and the total score for each player. The app can store up to 5 files and display them in a list. Users can click on any file to see the results of the game, if the data inside is valid.

## File Format
The text files should have the following format:
- Each line should contain the name of a player and their round scores, separated by a newline character.
- The round scores should be comma-separated and consist of numbers from 0 to 9, or X for a strike.
- Each player should have 10 rounds, except for the player who can have an extra round if they score a strike or a spare in the 10th round.
- The file should have a .txt extension.

For example, a valid file could look like this:

```
Player A
0,X, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2
Player B
9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9
Player C
4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
```

## Score Calculation
The app calculates the score for each player according to the standard bowling rules:
- Each round consists of two rolls, except for the 10th round which can have three rolls if the player scores a strike or a spare.
- A strike (X) means that the player knocked down all 10 pins in the first roll. The score for that round is 10 plus the sum of the next two rolls.
- A spare means that the player knocked down all 10 pins in two rolls. The score for that round is 10 plus the next roll.
- The total score for the game is the sum of the scores for each round.

For example, the score for Player A would be calculated as follows:

| Round | Roll 1 | Roll 2 | Roll 3 | Score |
| ----- | ------ | ------ | ------ | ----- |
| 1     | 0      | X      |        | 10 + 1 = 11 |
| 2     | 1      | 2      |        | 1 + 2 = 3 |
| 3     | 1      | 2      |        | 1 + 2 = 3 |
| 4     | 1      | 2      |        | 1 + 2 = 3 |
| 5     | 1      | 2      |        | 1 + 2 = 3 |
| 6     | 1      | 2      |        | 1 + 2 = 3 |
| 7     | 1      | 2      |        | 1 + 2 = 3 |
| 8     | 1      | 2      |        | 1 + 2 = 3 |
| 9     | 1      | 2      |        | 1 + 2 = 3 |
| 10    | 1      | 2      |        | 1 + 2 = 3 |
| Total |        |        |        | 11 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 + 3 = 38 |

## How to Use
To use the app, follow these steps:
- Download or clone the repository from github.
- Install the required dependencies using `npm install`.
- Run the app using `ng serve`.
- Open your browser and go to `http://localhost:4200`.
- Upload a text file with bowling game scores using the `Choose File` button or by `drag and drop` the file.
- If the file is valid, it will be added to the list of files.
- Click on any file in the list to see the scoreboard and the total score for each player.
