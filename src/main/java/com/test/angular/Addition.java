package com.test.angular;

public class Addition {
    private double firstNum;

    private double secondNum;

    public double getFirstNum() {
        return firstNum;
    }

    public void setFirstNum(double firstNum) {
        this.firstNum = firstNum;
    }

    public double getSecondNum() {
        return secondNum;
    }

    public void setSecondNum(double secondNum) {
        this.secondNum = secondNum;
    }

    public double result() {
        return this.firstNum + this.secondNum;
    }
}
