basic.clearScreen()
robot.tslMotionkit2.start()
let LF_counter_mid = 0
let LF_counter_left = 0
let LF_counter_right = 0
basic.forever(function () {
    if (robot.obstacleDistance() < 10) {
        robot.motorStop()
        basic.showNumber(LF_counter_left)
    }
    if (robot.obstacleDistance() >= 10) {
        while (robot.detectLine(RobotLineDetector.Left) == true && robot.detectLine(RobotLineDetector.Right) == true) {
            robot.motorSteer(0, 25, 50)
            LF_counter_mid = LF_counter_left + 1
        }
        while (robot.detectLine(RobotLineDetector.Left) == false && robot.detectLine(RobotLineDetector.Right) == true) {
            robot.motorSteer(25, 20, 50)
            LF_counter_left = LF_counter_left + 1
        }
        while (robot.detectLine(RobotLineDetector.Left) == true && robot.detectLine(RobotLineDetector.Right) == false) {
            robot.motorSteer(-25, 20, 50)
            LF_counter_right = LF_counter_right + 1
        }
    }
})
