robot.tslMotionkit2.start()
robot.setAssist(RobotAssist.LineFollowing, true)
basic.forever(function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) == true && robot.detectLine(RobotLineDetector.Right) == true) {
        robot.motorSteer(0, 30)
    } else if (robot.detectLine(RobotLineDetector.Left) == false && robot.detectLine(RobotLineDetector.Right) == true) {
        robot.motorSteer(30, 20)
    } else if (robot.detectLine(RobotLineDetector.Left) == true && robot.detectLine(RobotLineDetector.Right) == false) {
        robot.motorSteer(-30, 20)
    }
})
