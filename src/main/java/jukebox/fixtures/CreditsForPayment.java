package jukebox.fixtures;

import jukebox.sut.JukeBox;

//TODO: Refer link: https://dzone.com/refcardz/getting-started-fitnesse for fitnesse understanding
public class CreditsForPayment {
    private double payment;

    private double credits;

    public void execute() {
        // executed after each table row
        this.credits = new JukeBox().calculateCredits(payment);
    }

    // setter method
    public void setPayment(double payment) {
        this.payment = payment;
    }

    // returning function because of question mark in the test
    public double credits() {
        return credits;
    }
}
